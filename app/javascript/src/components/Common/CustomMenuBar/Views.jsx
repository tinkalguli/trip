import React, { useEffect, useState } from "react";

import { Plus, Search, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const Views = ({ views = [], segments = [], tags = [] }) => {
  const [isSegmentsSearchCollapsed, setIsSegmentsSearchCollapsed] =
    useState(true);
  const [isTagsSearchCollapsed, setIsTagsSearchCollapsed] = useState(true);
  const [segmentsSearchTerm, setSegmentsSearchterm] = useState("");
  const [tagsSearchTerm, setTagsSearchterm] = useState("");
  const [activeView, setActiveView] = useState();
  const [activeSegment, setActiveSegment] = useState();
  const [activeTag, setActiveTag] = useState();

  const onSegmentsSearchCollapse = () => {
    setIsSegmentsSearchCollapsed(true);
    setSegmentsSearchterm("");
  };

  const onTagsSearchCollapse = () => {
    setIsTagsSearchCollapsed(true);
    setTagsSearchterm("");
  };

  const filterComparator = ({ label }, searchTerm) =>
    label.toLowerCase().includes(searchTerm.trim().toLowerCase());

  const filteredSegments = segments.filter(segment =>
    filterComparator(segment, segmentsSearchTerm)
  );
  const filteredTags = tags.filter(tag =>
    filterComparator(tag, tagsSearchTerm)
  );

  const segmentsIconProps = [
    {
      icon: Search,
      onClick: () => {
        !isSegmentsSearchCollapsed && setSegmentsSearchterm("");
        setIsSegmentsSearchCollapsed(isCollapsed => !isCollapsed);
      },
      tooltipProps: {
        content: "Search",
        position: "top",
      },
    },
  ];

  const tagsIconProps = [
    {
      icon: Search,
      onClick: () => {
        !isTagsSearchCollapsed && setTagsSearchterm("");
        setIsTagsSearchCollapsed(isCollapsed => !isCollapsed);
      },
      tooltipProps: {
        content: "Search",
        position: "top",
      },
    },
    {
      icon: Plus,
      onClick: () => {},
      tooltipProps: {
        content: "Add",
        position: "top",
      },
    },
    {
      icon: Settings,
      onClick: () => {},
      tooltipProps: {
        content: "Settings",
        position: "top",
      },
    },
  ];

  useEffect(() => {
    setActiveView(views[0]);
  }, []);

  const BlockItem = ({ view, onClick, activeView }) => {
    const { label, count } = view;

    return (
      <MenuBar.Block
        label={label}
        count={count}
        active={view === activeView}
        onClick={() => onClick(view)}
      />
    );
  };

  return (
    <>
      {views.map((view, idx) => (
        <BlockItem
          key={`${view.title}-${idx}`}
          view={view}
          activeView={activeView}
          onClick={setActiveView}
        />
      ))}
      <MenuBar.SubTitle iconProps={segmentsIconProps}>
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          SEGMENTS
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        autoFocus
        collapse={isSegmentsSearchCollapsed}
        onCollapse={onSegmentsSearchCollapse}
        onChange={event => setSegmentsSearchterm(event.target.value)}
        value={segmentsSearchTerm}
        placeholder="Search Segments"
      />
      {filteredSegments.map((view, idx) => (
        <BlockItem
          key={`${view.label}-${idx}`}
          view={view}
          activeView={activeSegment}
          onClick={setActiveSegment}
        />
      ))}
      <MenuBar.SubTitle iconProps={tagsIconProps}>
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          TAGS
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        autoFocus
        collapse={isTagsSearchCollapsed}
        onCollapse={onTagsSearchCollapse}
        onChange={event => setTagsSearchterm(event.target.value)}
        value={tagsSearchTerm}
        placeholder="Search Tags"
      />
      {filteredTags.map((view, idx) => (
        <BlockItem
          key={`${view.title}-${idx}`}
          view={view}
          activeView={activeTag}
          onClick={setActiveTag}
        />
      ))}
    </>
  );
};

export default Views;

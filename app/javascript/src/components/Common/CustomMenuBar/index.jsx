import React from "react";

import { MenuBar } from "neetoui/layouts";

import Views from "./Views";

const CustomMenuBar = ({ showMenu, title, views, segments, tags }) => (
  <MenuBar title={title} showMenu={showMenu}>
    <Views views={views} segments={segments} tags={tags} />
  </MenuBar>
);

export default CustomMenuBar;

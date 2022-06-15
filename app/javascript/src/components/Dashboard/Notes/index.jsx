import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header, Scrollable } from "neetoui/layouts";

import notesApi from "apis/notes";
import CustomMenuBar from "components/Common/CustomMenuBar";
import EmptyState from "components/Common/EmptyState";

import NoteCard from "./Card";
import { NOTES_SEGMENTS, NOTES_TAGS, NOTES_VIEWS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";
import EditNotePane from "./Pane/Edit";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = note_id => {
    setShowDeleteAlert(true);
    setSelectedNoteIds(state => [...state, note_id]);
  };

  const handleEditClick = note => {
    setShowEditNote(true);
    setSelectedNote(note);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <CustomMenuBar
        title="Notes"
        showMenu={showMenu}
        views={NOTES_VIEWS}
        segments={NOTES_SEGMENTS}
        tags={NOTES_TAGS}
      />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone, Ect.",
          }}
          menuBarToggle={() => setShowMenu(!showMenu)}
        />
        {notes.length ? (
          <Scrollable
            className="w-full min-w-full space-y-4 pb-8"
            size="viewport"
          >
            {notes.map(note => (
              <NoteCard
                key={note.id}
                handleEditClick={() => handleEditClick(note)}
                handleDeleteClick={() => handleDeleteClick(note.id)}
                note={note}
              />
            ))}
          </Scrollable>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
        <EditNotePane
          showPane={showEditNote}
          setShowPane={setShowEditNote}
          fetchNotes={fetchNotes}
          note={selectedNote}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            refetch={fetchNotes}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;

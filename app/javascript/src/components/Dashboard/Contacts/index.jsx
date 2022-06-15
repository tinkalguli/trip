import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header, Scrollable } from "neetoui/layouts";

import CustomMenuBar from "components/Common/CustomMenuBar";

import { CONTACTS, CONTACTS_VIEWS } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import EditContactPane from "./Pane/Edit";
import Table from "./Table";

const Contacts = () => {
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEditPaneOpen, setIsEditPaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [, setSelectedContactIds] = useState([]);

  const handleDeleteClick = contact => {
    setIsDeleteAlertOpen(true);
    setSelectedContactIds(state => [...state, contact?.id]);
  };

  const handleEditClick = contact => {
    setSelectedContact(contact);
    setIsEditPaneOpen(true);
  };

  return (
    <div className="flex w-full overflow-hidden">
      <CustomMenuBar
        title="Contacts"
        showMenu={showMenu}
        views={CONTACTS_VIEWS}
        segments={[]}
        tags={[]}
      />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              onClick={() => setShowNewContactPane(true)}
              label="Add Contact"
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
        <Scrollable className="w-full">
          <Table
            contacts={CONTACTS}
            handleDeleteClick={handleDeleteClick}
            handleEditClick={handleEditClick}
          />
        </Scrollable>
        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />
        <EditContactPane
          showPane={isEditPaneOpen}
          setShowPane={setIsEditPaneOpen}
          contact={selectedContact}
        />
        {isDeleteAlertOpen && (
          <DeleteAlert
            onClose={() => setIsDeleteAlertOpen(false)}
            setSelectedContactIds={setSelectedContactIds}
          />
        )}
      </Container>
    </div>
  );
};

export default Contacts;

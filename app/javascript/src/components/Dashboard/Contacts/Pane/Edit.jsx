import React from "react";

import { Pane, Typography, Toastr } from "neetoui";
import { capitalize } from "utils";

import Form from "./Form";

export default function EditContactPane({ showPane, setShowPane, contact }) {
  const onClose = () => setShowPane(false);

  const formatedContact = () => {
    const contactClone = { ...contact };
    if (contact?.role) {
      contactClone.role = {
        label: capitalize(contact?.role),
        value: contact?.role,
      };
    }

    return contactClone;
  };

  const onSubmit = () => {
    try {
      Toastr.success("Contact updated successfully");
    } catch (error) {
      logger.error(error);
    } finally {
      onClose();
    }
  };

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Contact
        </Typography>
      </Pane.Header>
      <Form
        onSubmit={onSubmit}
        isEdit={true}
        onClose={onClose}
        contact={formatedContact()}
      />
    </Pane>
  );
}

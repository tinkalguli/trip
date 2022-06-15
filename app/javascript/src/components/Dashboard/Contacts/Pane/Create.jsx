import React from "react";

import { Pane, Typography, Toastr } from "neetoui";

import Form from "./Form";

import { CONTACTS_FORM_INITIAL_FORM_VALUES } from "../constants";

export default function NewContactPane({ showPane, setShowPane }) {
  const onClose = () => setShowPane(false);

  const onSubmit = () => {
    try {
      Toastr.success("Contact created successfully");
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
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form
        onSubmit={onSubmit}
        onClose={onClose}
        contact={CONTACTS_FORM_INITIAL_FORM_VALUES}
        isEdit={false}
      />
    </Pane>
  );
}

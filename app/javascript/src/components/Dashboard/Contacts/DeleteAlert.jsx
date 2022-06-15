import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, setSelectedContactIds }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsSubmitting(true);
      onClose();
      setSelectedContactIds([]);
      Toastr.success("Contact deleted successfully");
    } catch (error) {
      logger.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={isSubmitting}
      onSubmit={handleDelete}
      onClose={onClose}
      style="primary"
      message="Are you sure you want to delete the contact? This action cannot be undone."
      title="Delete Contact"
    />
  );
};

export default DeleteAlert;

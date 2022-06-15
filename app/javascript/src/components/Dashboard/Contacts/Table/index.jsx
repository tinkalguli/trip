import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import columns from "./columns";

import { DEFAULT_PAGE_SIZE, INITIAL_PAGE_NUMBER } from "../constants";

const Table = ({ handleDeleteClick, handleEditClick, contacts }) => {
  const [currentPageNumber, setCurrentPageNumber] =
    useState(INITIAL_PAGE_NUMBER);

  return (
    <NeetoUITable
      rowData={contacts}
      columnData={columns(handleDeleteClick, handleEditClick)}
      currentPageNumber={currentPageNumber}
      defaultPageSize={DEFAULT_PAGE_SIZE}
      handlePageChange={value => setCurrentPageNumber(value)}
    />
  );
};

export default Table;

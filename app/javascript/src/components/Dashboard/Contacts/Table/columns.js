import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown } from "neetoui";

import { formatDate } from "utils/time";

export default (handleDeleteClick, handleEditClick) => {
  const contactOptions = [
    {
      label: "Delete",
      onClick: handleDeleteClick,
    },
    {
      label: "Edit",
      onClick: handleEditClick,
    },
  ];

  return [
    {
      title: "NAME & ROLE",
      dataIndex: "name",
      key: "name",
      render: (_, { first_name, last_name }) => (
        <div className="flex flex-row items-center justify-start">
          <div>
            <Avatar
              size="medium"
              className="mr-3"
              user={{ name: `${first_name} ${last_name}`, imageUrl: null }}
            />
          </div>
          {`${first_name} ${last_name}`}
        </div>
      ),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "CREATED AT",
      dataIndex: "created_at",
      key: "created_at",
      render: created_at => (
        <div className="flex flex-row items-center justify-start">
          {formatDate(created_at)}
        </div>
      ),
    },
    {
      dataIndex: "icon",
      key: "icon",
      render: (_, contact) => (
        <Dropdown
          icon={() => <MenuHorizontal size={20} />}
          buttonStyle="text"
          position="bottom-end"
        >
          {contactOptions.map(option => (
            <li key={option.label} onClick={() => option.onClick(contact)}>
              {option.label}
            </li>
          ))}
        </Dropdown>
      ),
    },
  ];
};

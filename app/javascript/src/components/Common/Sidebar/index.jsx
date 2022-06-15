import React from "react";

import Logo from "images/Logo";
import { Sidebar as NeetoUISidebar } from "neetoui/layouts";
import { useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import {
  PROFILE_PATH,
  CHANGE_PASSWORD_PATH,
  LOGIN_PATH,
} from "components/routeConstants";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

import { APP_NAME, SIDENAV_LINKS } from "./constants";

const Sidebar = () => {
  const history = useHistory();
  const authDispatch = useAuthDispatch();
  const { user } = useUserState();

  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      window.location.href = LOGIN_PATH;
    } catch (error) {
      logger.error(error);
    }
  };

  const bottomLinks = [
    {
      label: "My Profile",
      onClick: () => history.push(PROFILE_PATH, { resetTab: true }),
    },
    {
      label: "Change Password",
      onClick: () => history.push(CHANGE_PASSWORD_PATH, { resetTab: true }),
    },
    {
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <NeetoUISidebar
      isCollapsed={false}
      navLinks={SIDENAV_LINKS}
      appName={APP_NAME}
      organizationInfo={{
        logo: <img src={Logo} alt="logo" />,
      }}
      profileInfo={{
        name: `${user.first_name} ${user.last_name}`,
        imageUrl: user.profile_image_path,
        email: user.email,
        bottomLinks,
      }}
      changelogProps={{ id: "neetochangelog-trigger" }}
    />
  );
};

export default Sidebar;

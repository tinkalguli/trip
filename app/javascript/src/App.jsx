import React from "react";

import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";

import Main from "./components/Main";

const App = props => {

  return (
  <AuthProvider>
    <UserProvider>
      {/* <Main {...props} /> */}
      <form onSubmit={handleSubmit}>

      </form>
    </UserProvider>
  </AuthProvider>
)};

export default App;

import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Login from "./pages/Login";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Login />
        </MuiThemeProvider>
      </div>
    );
  }
}

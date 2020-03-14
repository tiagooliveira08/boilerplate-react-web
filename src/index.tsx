import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import { rootStoreProvider } from "./stores";
import { App } from "./App";

ReactDOM.render(
  <Provider {...rootStoreProvider}>
    <App projectName="Template Web" />
  </Provider>,
  document.getElementById("app")
);

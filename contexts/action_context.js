import React from "react";
import initialState from "../data.json";

const appState = initialState;
const actionLog = [];

const process = (action) => {
    actionLog.push(action);
    action.process(appState);

  console.log(actionLog);
  console.log(appState.responses);
};

const ActionContext = React.createContext({
  appState, actionLog, process
});

export default ActionContext;

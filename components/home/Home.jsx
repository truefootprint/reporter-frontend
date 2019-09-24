import { useState, useContext, useEffect } from "react";
//import data from "../../data.json";
import MainContext from "../../contexts/main_context";
import Client from "../../helpers/client";
import Activity from "../activity";
import Submit from "../submit";

const Home = () => {
  let [appState, setAppState] = useState(null);
  let [actionLog, setActionLog] = useState([]);
  let client = new Client();

  useEffect(() => {
    client.getMyData().then(({ data }) => setAppState(data));
  }, []);

  let process = (action) => {
    setActionLog(l => l.concat(action));
    setAppState(s => action.process(s));
  };

  let contextValue = {
    appState, setAppState, actionLog, setActionLog, process, client,
  };

  if (appState === null) {
    return null;
  }

  let projectActivities = appState.projects[0].project_activities;

  return (
    <MainContext.Provider value={contextValue}>
      {projectActivities.map((props, i) => <Activity key={i} {...props} />)}
      <Submit />
    </MainContext.Provider>
  );
};

export default Home;

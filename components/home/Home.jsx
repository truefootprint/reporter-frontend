import { useState, useContext } from "react";
import data from "../../data.json";
import MainContext from "../../contexts/main_context";
import Client from "../../helpers/client";
import Activity from "../activity";
import Submit from "../submit";

const Home = () => {
  let [appState, setAppState] = useState(data);
  let [actionLog, setActionLog] = useState([]);
  let client = new Client();

  let process = (action) => {
    setActionLog(l => l.concat(action));
    setAppState(s => action.process(s));
  };

  let contextValue = {
    appState, setAppState, actionLog, setActionLog, process, client,
  };

  return (
    <MainContext.Provider value={contextValue}>
      {appState.activities.map((props, i) => <Activity key={i} {...props} />)}
      <Submit />
    </MainContext.Provider>
  );
};

export default Home;

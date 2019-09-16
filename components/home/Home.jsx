import { useState, useContext } from "react";
import data from "../../data.json";
import MainContext from "../../contexts/main_context";
import Activity from "../activity";

const Home = () => {
  let [appState, setAppState] = useState(data);
  let [actionLog, setActionLog] = useState([]);

  let process = (action) => {
    setActionLog(l => l.concat(action));
    setAppState(s => action.process(s));
  };

  let contextValue = {
    appState, setAppState, actionLog, setActionLog, process
  };

  return (
    <MainContext.Provider value={contextValue}>
      {appState.activities.map((props, i) => <Activity key={i} {...props} />)}
    </MainContext.Provider>
  );
};

export default Home;

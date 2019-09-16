import { useState, useContext } from "react";
import ActionContext from "../../contexts/action_context";
import Activity from "../activity";

const Home = () => {
  let context = useContext(ActionContext);
  let activities = context.appState.activities;

  return activities.map((props, i) => (
    <Activity key={i} {...props} />
  ));
};

export default Home;

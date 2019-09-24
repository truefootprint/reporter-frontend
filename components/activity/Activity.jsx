import { useContext } from "react";
import MainContext from "../../contexts/main_context";
import Topic from "../topic";
import Question from "../question";

const Activity = ({ id, name, project_questions }) => {
  let context = useContext(MainContext);
  let indicator = "";

  let current_activity = context.appState.projects[0].current_project_activity;

  if (current_activity !== null && current_activity.id === id) {
    indicator = "*";
  }

  let byTopic = project_questions.by_topic;

  let inner = byTopic.map(({ topic, project_questions }, i) => {
    let presentedQuestions = project_questions.map((props, j) => (
      <Question key={j} {...props} />
    ));

    return (
      <div key={i}>
        <Topic {...topic} />
        {presentedQuestions}
      </div>
    )
  });

  return (
    <div className="activity">
      <h1>{name} {indicator}</h1>

      {inner}
    </div>
  );
};

export default Activity;

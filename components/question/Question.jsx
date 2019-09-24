import { useContext } from "react";
import MainContext from "../../contexts/main_context";
import AnswerQuestion from "../../actions/answer_question";

const Question = ({ id, text }) => {
  let context = useContext(MainContext);

  let responses = context.appState.responses
    .filter(r => r.project_question_id === id);

  let response = responses[responses.length - 1];

  const handleChange = (event) => {
    let { name, value } = event.target;

    let questionId = parseInt(name, 10);
    let action = new AnswerQuestion(questionId, value);

    context.process(action);
  };

  return (
    <div className="question">
      <span>{text}</span>

      <input
        type="radio"
        name={id}
        value="yes"
        checked={response && response.value === "yes" ? true : false}
        onChange={handleChange} /> Yes

      <input
        type="radio"
        name={id}
        value="no"
        checked={response && response.value === "no" ? true : false}
        onChange={handleChange} /> No
    </div>
  );
};

export default Question;

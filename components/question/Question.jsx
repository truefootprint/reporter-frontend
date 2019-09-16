import { useContext } from "react";
import ActionContext from "../../contexts/action_context";
import AnswerQuestion from "../../actions/answer_question";

const Question = ({ id, text }) => {
  let context = useContext(ActionContext);

  const handleChange = (event) => {
    let { name, value } = event.target;

    let questionId = parseInt(name, 10);
    let action = new AnswerQuestion(questionId, value);

    context.process(action);
  };

  return (
    <div className="question">
      <span>{text}</span>

      <input type="radio" name={id} value="yes" onChange={handleChange} /> Yes
      <input type="radio" name={id} value="no" onChange={handleChange} /> No
    </div>
  );
};

export default Question;

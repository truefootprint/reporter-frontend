import { useContext } from "react";
import ActionContext from "../../contexts/action_context";
import AnswerQuestion from "../../actions/answer_question";

const Question = ({ text }) => {
  let context = useContext(ActionContext);

  const handleChange = (event) => {
    let { name, value } = event.target;

    context.process(new AnswerQuestion(name, value));
  };

  return (
    <div className="question">
      <span>{text}</span>

      <input type="radio" name={text} value="yes" onChange={handleChange} /> Yes
      <input type="radio" name={text} value="no" onChange={handleChange} /> No
    </div>
  );
};

export default Question;

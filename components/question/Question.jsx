const Question = ({ text }) => (
  <div className="question">
    <span>{text}</span>

    <input type="radio" name={text} value="yes" /> Yes
    <input type="radio" name={text} value="no" /> No
  </div>
);

export default Question;

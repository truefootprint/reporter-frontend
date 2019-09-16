import Question from "../question";

const Topic = ({ name, questions }) => (
  <div className="topic">
    <h2>{name}</h2>

    {questions.map((props, i) => (
      <Question key={i} {...props} />
    ))}
  </div>
);

export default Topic;

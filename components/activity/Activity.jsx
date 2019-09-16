import Topic from "../topic";

const Activity = ({ name, topics }) => (
  <div className="activity">
    <h1>{name}</h1>

    {topics.map((props, i) => (
      <Topic key={i} {...props} />
    ))}
  </div>
);

export default Activity;

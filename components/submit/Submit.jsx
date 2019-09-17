import { useContext } from "react";
import MainContext from "../../contexts/main_context";

const Submit = () => {
  const { client, actionLog, setActionLog } = useContext(MainContext);

  const handleSubmit = () => {
    client.submitActions(actionLog);
    setActionLog([]);
  };

  return (
    <div className="submit">
      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Submit;

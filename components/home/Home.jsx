import data from "../../data.json";
import Activity from "../activity";

const Home = () => (
  data.activities.map(props => <Activity {...props} />)
);

export default Home;

import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  const history = useNavigate();
  const toStart = (event) => {
    event.preventDefault();
    history("/details");
  };

  return (
    <div className="homeSection">
      <div className="startSection">
        <h1>Choose the Right Place for staying</h1>
        <button className="startButton" onClick={toStart}>
          Get Start
        </button>
      </div>
    </div>
  );
};

export default Home;

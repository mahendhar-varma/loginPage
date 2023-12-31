import { useNavigate } from "react-router-dom";

const Details = () => {
  const history = useNavigate();

  const toBack = (event) => {
    event.preventDefault();
    history("/loginPage");
  };

  return (
    <div>
      <button onClick={toBack}>Back</button>
    </div>
  );
};

export default Details;

import { useJobSwire } from "../../context/JobSwireContext";
import SingleHiring from "../SingleHiring";
import "./Hiring.css";

const Hiring = () => {
  const { itemsHiring } = useJobSwire();

  return (
    <div>
      <h1>#Hiring</h1>
      <p>CV göndererek ekibimize katılabilirsin!</p>
      <div className="container-hiring">
        {itemsHiring.map((itemsHiringData, index) => (
          <SingleHiring key={index} itemsHiringData={itemsHiringData} />
        ))}
      </div>
    </div>
  );
};

export default Hiring;

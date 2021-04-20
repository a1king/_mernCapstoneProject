import "../styles/screens/HomeScreen.css";
import Product from "../components/Product";

const Homescreen = () => {
  return (
    <div className="homescreen">
      <h2 className="homescreen__title"> Latest Products </h2>

      <div className="homescreen__products">
        <Product />
      </div>
    </div>
  );
};

export default Homescreen;

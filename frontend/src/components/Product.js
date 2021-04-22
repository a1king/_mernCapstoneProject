import "../styles/Product.css";
import { Link } from "react-router-dom";

const Product = ({ imgUrl, name, price, description, productId }) => {
  return (
    <div className="product">
      <img src={imgUrl} alt={name} />

      <div className="product__info"></div>
      <p className="info__name">{name} </p>
      <p className="info__description">{description.substring(0, 100)}...</p>

      <p className="info__price">{price}</p>

      <Link to={`/product/${productId}`} className="info__button">
        View
      </Link>
    </div>
  );
};

export default Product;

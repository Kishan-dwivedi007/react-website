import "./Items.css";
import { Link } from "react-router-dom";
const Items = ({ image, name, old_price, new_price, id }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={image} alt="img" onClick={window.scrollTo(0, 0)} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${old_price}</div>
        <div className="item-price-old">${new_price}</div>
      </div>
    </div>
  );
};

export default Items;

import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./Css/ShopCategory.css";
import dropdown_icon from "../Components/assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const all_product = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="img" />
      <div className="shopcategory-indexShort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-short">
          Short by <img src={dropdown_icon} alt="img" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product
          .filter((item) => item.category === props.category)
          .map((item, i) => {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;

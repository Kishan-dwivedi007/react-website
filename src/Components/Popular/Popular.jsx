import "./Popular.css";
import data_product from "../assets/data";
import Items from "../Items/Items";
const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1> <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          const { id, name, new_price, old_price, image } = item;
          return (
            <Items
              key={i}
              id={id}
              name={name}
              new_price={new_price}
              old_price={old_price}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;

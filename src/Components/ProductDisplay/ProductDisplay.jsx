import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product[0].image} alt="" />
          <img src={product[0].image} alt="" />
          <img src={product[0].image} alt="" />
          <img src={product[0].image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product[0].image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product[0].name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product[0].old_price}
          </div>
          <div className="productdisplay-right-prices-new">
            ${product[0].new_price}
          </div>
        </div>
        <div className="productdisplay-right-discription">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            pariatur vitae assumenda suscipit perspiciatis illum dolor error
            omnis. Illum itaque earum, nam rerum optio animi?
          </p>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>Add to cart</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women , T-shirt, Crop-Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

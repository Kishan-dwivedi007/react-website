// import { useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum.jsx";
import all_product from "../Components/assets/all_product.js";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";
import Discription from "../Components/Discription/Discription.jsx";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct.jsx";

const Products = () => {
  // const { all_product } = useContext(ShopContext);
  const all_prod = all_product;
  const { productid } = useParams();
  const proId = Number(productid);
  let product = all_prod.filter((e) => e.id === proId);
  // const product = all_product.find((e) => e.id === Number(productid));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Discription />
      <RelatedProduct />
    </div>
  );
};

export default Products;

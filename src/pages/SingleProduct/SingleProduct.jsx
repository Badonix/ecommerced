import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { useLocation } from "react-router-dom";
import { SALES } from "../../products";
export const SingleProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[1];
  console.log(currentRoute);
  const currentProduct =
    currentRoute === "sales"
      ? SALES.find((el) => el.id == id)
      : PRODUCTS.find((el) => el.id == id);
  return (
    <>
      <h1>{currentProduct.productName}</h1>
      <p>{currentProduct.description}</p>
      <img src={currentProduct.productImage} style={{ width: "250px" }} />
      <h2>${currentProduct.price}</h2>
    </>
  );
};

export default SingleProduct;

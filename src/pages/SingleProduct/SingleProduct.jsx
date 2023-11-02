import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { useLocation } from "react-router-dom";
import { SALES } from "../../products";
import './singleProduct.css'
import { Link } from "react-router-dom";
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
      <h1 className="productName" >{currentProduct.productName}</h1>
      <div className="both">
        <div className="left">
          <img className="productImage" src={currentProduct.productImage} style={{ width: "250px" }} />
        </div>
        <div className="right" >
          <h2 className="productPrice">{currentProduct.price} ლარი</h2>
          <p className="productDescription" >{currentProduct.description}</p>
        </div>
      </div>
      <div className="kve">
        <p>
          ზომები: {currentProduct.size}. ზომების არჩევანი გთავაზობთ
          მორგებულ გადაწყვეტილებებს,
          თუმცა ზომების ცვლილება გავლენას
          ახდენს საბოლოო ფასზე.
          <br />
          <br />
        </p>
        <p>
          შესაძენად დაგვიკავშირდით: 
          <ul>
            <Link>
              Facebook
            </Link> <br />
            <Link to={`tel: 511 19 99 50`}>
              +995 511 19 99 50
            </Link>
          </ul>
        </p>
      </div>
    </>
  );
};

export default SingleProduct;

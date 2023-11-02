import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import imgg from '../../images/contemporary-chair-z0AGK2F-600.jpg'
import { Height } from "@mui/icons-material";
export const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} className="da" />
        ))}
      </div>
    </div>
  );
};

import React from "react";

export default function Child({ productDetails }) {
  // console.log(props);
  let { prodName, price, quantity, onSale } = productDetails;

  return (
    <>
      <h1 className="bg-secondary text-light text-center p-4">Child</h1>
      <h3 className="text-center">Product Details</h3>
      <h4>Product Name: {prodName}</h4>
      <h4>Product Price: {price}</h4>
      <h4>Product Count: {quantity}</h4>
      <h4>Product Sale: {onSale == true ? `50%` : `Original Price`}</h4>
    </>
  );
}

import React, { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {
  let [userName, setUserName] = useState(`Ahmed`);
  let [product, setProduct] = useState({
    id: 1,
    prodName: `Samsung`,
    price: 3000,
    quantity: 200,
    onSale: true,
  });

  return (
    <>
      <h1 className="bg-success text-light text-center p-4">Parent</h1>
      <h3 className="bg-primary text-center text-light my-2 p-3">
        User Name: {userName}
      </h3>
      <Child userName={userName} productDetails={product} />
    </>
  );
}

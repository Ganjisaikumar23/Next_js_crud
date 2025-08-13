"use client";

import React, { use, useEffect, useState } from "react";

const page = ({ params }) => {
  const [name, setName] = useState("");
  const [mobileModel, setMobileModel] = useState(" ");
  const [mobilePrice, setMobilePrice] = useState(" ");
  const { productId } = use(params);

  const mobileDataHandler = async () => {
    const responce = await fetch(
      `http://localhost:3000/api/products/mobile/update/${productId}`
    );

    const finalResonce = await responce.json();

    console.log("final Responceeee", finalResonce);
    const { title, model, price } = finalResonce;
    setName(title);
    setMobileModel(model);
    setMobilePrice(price);
  };
  useEffect(() => {
    mobileDataHandler();
  }, []);

  const productUpdateHeandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/api/products/mobile?id=${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle: name,
          newModel: mobileModel,
          newPrice: mobilePrice,
        }),
      }
    );

    const result = await response.json();
    console.log("Updated mobile:", result);

    alert("your's mobile data updated");
  };
  return (
    <div>
      <form onSubmit={productUpdateHeandler}>
        <div>
          <h3>mobile name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h3>model</h3>
          <input
            type="text"
            value={mobileModel}
            onChange={(e) => setMobileModel(e.target.value)}
          />
        </div>
        <div>
          <h3>price</h3>
          <input
            type="text"
            value={mobilePrice}
            onChange={(e) => setMobilePrice(e.target.value)}
          />
        </div>
        <button type="submit" style={{ background: "blue" }}>
          UPDATE MOBILE
        </button>
      </form>
    </div>
  );
};

export default page;

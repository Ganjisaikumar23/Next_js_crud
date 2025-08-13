"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [mobile, setMobile] = useState([]);

  const productHandler = async () => {
    const responce = await fetch("http://localhost:3000/api/products/mobile");
    const myresponce = await responce.json();

    console.log("myresponce", myresponce);
    setMobile(myresponce.mobileData);
  };

  useEffect(() => {
    productHandler();
  }, []);

  const mobileDataDelect = async (productId) => {
    const responce = await fetch(
      `http://localhost:3000/api/products/mobile?id=${productId}`,
      {
        method: "DELETE",
      }
    );
    const result = await responce.json();
    console.log("result", result);
    setMobile(mobile.filter((item) => item._id !== productId));
    alert("mobile product delected");
  };
  return (
    <div>
      <h1>Mobile Data</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Mobile Id</th>
            <th>Mobile Name</th>
            <th>Mobile Model</th>
            <th>Mobile Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mobile.map((iteam) => {
            return (
              <tr key={iteam._id}>
                <td>{iteam._id}</td>
                <td>{iteam.title}</td>
                <td>{iteam.model}</td>
                <td>{iteam.price}</td>
                <td>
                  <Link href={`/all-products/mobiles/${iteam._id}`}>
                    <button style={{ backgroundColor: "blue" }}>Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      mobileDataDelect(iteam._id);
                    }}
                  >
                    Delect
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default page;

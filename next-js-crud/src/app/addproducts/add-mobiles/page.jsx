"use client";

import { useState } from "react";

const page = () => {
    const [name,setName]=useState('')
    const [model,setModel]=useState('')
    const [price,setPrice]=useState('')
 
    const mobileDataHandler=async()=>{
        const responce= await fetch("http://localhost:3000/api/products/mobile",{
            method:'POST',
            "Content-type":"application/json",
              body:JSON.stringify({title:name,model,price})
        })
        if(responce.ok){
            alert("mobile success")
        }
        setName("")
        setModel("")
        setPrice("")
    }
  return (
    <div>
      <form  onSubmit={mobileDataHandler}>
        <div>
          <h3>mobile name</h3>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <h3>model</h3>
          <input type="text"  value={model} onChange={(e)=>setModel(e.target.value)}/>
        </div>
        <div>
          <h3>price</h3>
          <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
        </div>
        <button type="submit"> add mobile</button>
      </form>
    </div>
  );
};

export default page;

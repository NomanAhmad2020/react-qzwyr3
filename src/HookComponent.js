import React from "react";
import { useState } from 'react';


function HookComponent() {
  const [name,setName]= useState("demo");

  return(
    <div className="App">
    <h1> MyComponent : {name} </h1>
    <input type ="text" onChange={(e)=>setName(e.target.value)}></input>
    </div>
  )

};
export default HookComponent;
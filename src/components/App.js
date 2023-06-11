import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [props, setProps] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/props')
    .then(res => res.json())
    .then(data=>setProps(data))
  },[])
  console.log(props)
  return (
    <div className="app">
      <Header />
      <PlantPage props={props} setProps={setProps}/>
    </div>
  );
}

export default App;

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({props, setProps}) {

  const cards = props.map((p)=><PlantCard prop={p} handleSubmit={handleEditSubmit} />)

  function handleEditSubmit(e, id, formData){
    e.preventDefault()
    console.log("hey")
    fetch(`http://localhost:3000/props/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then(data=>{
      const updatedProps = props.map((p)=> p.id === id ? data : p)
      setProps(updatedProps)
    })
}
  return (
    <ul className="cards">{cards}</ul>
  );
}

export default PlantList;

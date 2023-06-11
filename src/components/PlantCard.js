import React, { useState } from "react";
import EditPlantForm from "./EditPlantForm";


function PlantCard({prop, handleSubmit}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  function handleClick(e){
    console.log(e.target)
    setShowModal(true)
  }

  return (
    <li className="card box">
      <img key={"1"+prop.id} src={prop.image1} alt={"plant name"} />
      {prop.image2 ? <img key={"2"+prop.id} src={prop.image2} alt={"plant name"} /> : null}
      <h4>{prop.name}</h4>
      {prop.picked ? (
        <button className="primary">Remove</button>
      ) : (
        <button>Add to Pick List</button>
      )}
      <p>{prop.description}</p>
      <button onClick={handleClick} >Edit Prop</button>
      {showModal ? <EditPlantForm setShowModal={setShowModal} prop={prop} handleSubmit={handleSubmit} /> : null}
    </li>
  );
}

export default PlantCard;

import React, { useState, useRef } from 'react'
import ReactDom from "react-dom";

const EditPlantForm = ({setShowModal, prop, handleSubmit}) => {
    const modalRef = useRef();
    const [formData, setFormData] = useState({
        name: prop.name,
        image1: prop.image1,
        image2: "",
        description: prop.description
      })

    function handleChange(e){
        const newFormData = {...formData, [e.target.name]:e.target.value}
        setFormData(newFormData)
      }

   

    const closeModal = (e) => {
        if (e.target === modalRef.current) {
          setShowModal(false);
        }
      };

      return ReactDom.createPortal(
        <div className="container" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            <h2>Edit Plant info</h2> 
            <form onSubmit={(e)=>{handleSubmit(e,prop.id, formData); setShowModal(false)}}>
                <input type="text" name="name" placeholder="Prop name" onChange={handleChange} value={formData.name}/>
                <input type="text" name="image1" placeholder="Image URL" onChange={handleChange} value={formData.image1} />
                <input type="text" name="image2" placeholder="Second Image URL" onChange={handleChange} value={formData.image2} />
                <input type="test" name="description" placeholder="Description" onChange={handleChange} value={formData.description} />
                <button type="submit">Submit</button>
            </form>

            <button onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
      );
}

export default EditPlantForm



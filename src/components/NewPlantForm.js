import React, {useState} from "react";

function NewPlantForm({props, setProps}) {
  const [formData, setFormData] = useState({
    name: "",
    image1: "",
    description: ""
  })

function handleChange(e){
  const newFormData = {...formData, [e.target.name]:e.target.value}
  setFormData(newFormData)
}

function handleSubmit(e){
  e.preventDefault()
  console.log(formData)
  fetch('http://localhost:3000/props',{
    method: "post",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(r => r.json())
  .then(data=>setProps([...props, data]))
  setFormData({
    name: "",
    image1: "",
    description: ""
  })
}
  return (
    <div className="new-plant-form">
      <h2>New Prop</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Prop name" onChange={handleChange} value={formData.name}/>
        <input type="text" name="image1" placeholder="Image URL" onChange={handleChange} value={formData.image1} />
        <input type="test" name="description" placeholder="Description" onChange={handleChange} value={formData.description} />
        <button type="submit">Add Prop</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

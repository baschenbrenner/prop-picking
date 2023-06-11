import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({props, setProps}) {
  return (
    <main>
      <NewPlantForm props={props} setProps={setProps} />
      <Search />
      <PlantList props={props} setProps={setProps}/>
    </main>
  );
}

export default PlantPage;

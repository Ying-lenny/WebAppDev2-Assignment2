import React from "react";
import Person from "../peopleCard/";
import "./peopleList.css";

const PeopleList = ({popular, action}) => {
  const peopleCards = popular.map(m => (
    <Person key={m.id} person={m} action={action} />
  ));
  return <div className="row people bg-info">{peopleCards}</div>;
};

export default PeopleList;
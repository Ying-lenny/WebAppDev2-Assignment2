import React from "react";
import "./peopleDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.biography}</p>

      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Name
        </li>
        <li key="rut" className="list-group-item ">
          {person.name}
        </li>

        <li key="rdh" className="list-group-item list-group-item-dark">
          Known For
        </li>
        <li key="rut" className="list-group-item ">
          {person.known_for_department}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Popularity
        </li>
        <li key="rut" className="list-group-item ">
          {person.popularity}
        </li>

        <li key="rdh" className="list-group-item list-group-item-dark">
          Place of Birth
        </li>
        <li key="rut" className="list-group-item ">
          {person.place_of_birth}
        </li>
      </ul>
    </>
  );
};
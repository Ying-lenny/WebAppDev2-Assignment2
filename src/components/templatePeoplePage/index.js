import React from "react";
import PeopleHeader from '../headerPeople'
import "./peoplePage.css";

const TemplatePeoplePage = ({ person, children }) => {
  return (
    <>
      <PeopleHeader person={person} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : "./person-poster-placeholder.png"
            }
            className="movie"
            alt={person.title}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplatePeoplePage;
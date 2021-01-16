import React, { useState } from "react";
import Header from "../headerPeopleList";
import PeopleList from "../peopleList";
import FilterControlsPeople from "../filterControlsPeople";

const PeopleListPageTemplate = ({ popular, title, action}) => {
const [nameFilter, setNameFilter] = useState("");

  let displayedPeople = popular
  .filter(m => {
    return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      <Header title={title} numPeople={displayedPeople.length} />
      <FilterControlsPeople onUserInput={handleChange} numPeople={displayedPeople.length}/>
      <PeopleList
        action={action}
        popular={displayedPeople}
    />
    </>
  );
};

export default PeopleListPageTemplate ;
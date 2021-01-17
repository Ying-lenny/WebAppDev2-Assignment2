/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import {PeopleContext} from "../../contexts/peopleContext";

const AddToNewcomersButton = ({ person }) => {
  const context = useContext(PeopleContext);

  const handleAddToNewcomers = e => {
    e.preventDefault();
    context.addToInterest(person.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToNewcomers}
    >
      Add to Newcomers
    </button>
  );
};

export default AddToNewcomersButton;
import React, { useContext } from "react";
import {PeopleContext} from "../../contexts/peopleContext";

const AddToInterestButton = ({ person }) => {
  const context = useContext(PeopleContext);

  const handleAddToInterest = e => {
    e.preventDefault();
    context.addToInterest(person.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToInterest}
    >
      Add to People of Interest
    </button>
  );
};

export default AddToInterestButton;
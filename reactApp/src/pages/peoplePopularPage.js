/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import Pagetemplate from "../components/templatePeopleListPage";
import {PeopleContext} from '../contexts/peopleContext';
import AddToInterestButton from '../components/buttons/addToInterest';

const peoplePopularPage = () => {
  const context = useContext(PeopleContext);
  const popular = context.popular.filter((m) => {  // New
    return !("interest" in m);
  });
  return (
    <Pagetemplate
      title={"Popular Actors"}
      popular={popular}  /* Changed */
      action={(person) => {
        return <AddToInterestButton person={person} />;
      }}
    />
  );
};

export default peoplePopularPage;
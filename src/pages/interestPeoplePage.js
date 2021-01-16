import React, {useContext} from "react";
import PeopleListPageTemplate from "../components/templatePeopleListPage";
import {PeopleContext} from '../contexts/peopleContext';
import AddToInterestButton from '../components/buttons/addToInterest';

const InterestPeoplePage = () => {
  const context = useContext(PeopleContext);
  const interests = context.popular.filter( m => m.interest )
  return (
    <PeopleListPageTemplate
      popular={interests}
      title={"People of Interest"}
      action={(person) => {
        return <AddToInterestButton person={person} />;
      }}
    />
  );
};

export default InterestPeoplePage;
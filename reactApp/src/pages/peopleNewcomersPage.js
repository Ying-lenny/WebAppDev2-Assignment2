/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext} from "react";
import PeopleListPageTemplate from "../components/templatePeopleListPage";
import {PeopleContext} from '../contexts/peopleContext';
import AddToNewcomersButton from '../components/buttons/addToNewcomers';

const peopleNewcomersPage = () => {
  const context = useContext(PeopleContext);
  const newcomer = context.popular.filter( m => m.newcomers )
  return (
    <PeopleListPageTemplate
      popular={newcomer}
      title={"Up and coming Actors"}
      action={(person) => {
        return <AddToNewcomersButton person={person} />;
      }}
    />
  );
};

export default peopleNewcomersPage;
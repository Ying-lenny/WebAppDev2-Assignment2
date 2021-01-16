import React, { useContext } from "react";
import Pagetemplate from "../components/templatePeopleListPage";
import {PeopleContext} from '../contexts/peopleContext';
import AddToNewcomersButton from '../components/buttons/addToNewcomers';

const PeopeLatestPage = () => {
  const context = useContext(PeopleContext);
  const popular = context.popular.filter(m => m.latest)
  return (
    <Pagetemplate
      title={"Latest Actors"}
      popular={popular}  /* Changed */
      action={(person) => {
        return <AddToNewcomersButton person={person} />;
      }}
    />
  );
};

export default PeopeLatestPage;
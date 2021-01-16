import React from "react";
import {withRouter } from "react-router-dom";
import PeopleDetails from "../components/peopleDetails";
import PageTemplate from "../components/templatePeoplePage";
import usePerson from "../hooks/usePeople";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)  // NEW
  return (
    <>
    {person ? (
      <>
        <PageTemplate person={person}>
          <PeopleDetails person={person} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for Person details puh-leease</p>
    )}
  </>
  );
};

export default withRouter(PersonPage);

import React, { useEffect, createContext, useReducer } from "react";
import {getPopularPeople, getLatestPeople } from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
      case "add-interest":
      return {
        popular: state.popular.map((m) =>
          m.id === action.payload.person.id ? { ...m, interest: true } : m
        ),
      };

      case "add-newcoming":
      return {
        latest: state.latest.map((m) =>
          m.id === action.payload.person.id ? { ...m, newcoming: true } : m
        ),
        popular: [...state.popular],
      };

      case "load-popular":
        return { popular: action.payload.popular};
      case "load-latest":
        return { latest: action.payload.popular, popular: [...state.popular]};
      default:
        return state;
    }
  };

  const PeopleContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { popular: [], latest: [] });

    const addToInterest = (personId) => {
      const index = state.popular.map((m) => m.id).indexOf(personId);
      dispatch({ type: "add-interest", payload: { person: state.popular[index] } });
    };

    const addToNewcomers = (personId) => {
      const index = state.latest.map((m) => m.id).indexOf(personId);
      dispatch({ type: "add-newcoming", payload: { person: state.latest[index] } });
    };

    useEffect(() => {
      getPopularPeople().then((popular) => {
        dispatch({ type: "load-popular", payload: { popular } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      getLatestPeople().then((popular) => {
        dispatch({ type: "load-latest", payload: { popular } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PeopleContext.Provider
        value={{
          popular: state.popular,
          latest: state.latest,
          addToInterest: addToInterest,
          addToNewcomers: addToNewcomers
        }}
      >
        {props.children}
      </PeopleContext.Provider>
    );
  };
  
  export default PeopleContextProvider;
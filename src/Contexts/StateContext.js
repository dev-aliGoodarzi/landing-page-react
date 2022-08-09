// Importing Necessary Things
import React, { useReducer } from "react";
import { testimonialImage1 } from "../Compunents/ImageExporter/ImageExporter";
// Importing Necessary Things

// Creating Context
export const State__Context = React.createContext();
export const SetState__Context = React.createContext();
// Creating Context

// Initializing State
const initialState = {
  topImage: testimonialImage1,
  currentUserImage: "",
};
// Initializing State

// Building Logic In Headers
const handlers = {
  change: (state, action) => {
    const { topImage, currentUserImage } = action.payload;
    return {
      ...state,
      topImage,
      currentUserImage,
    };
  },
};
// Building Logic In Headers

// Reducer Function
const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;
// Reducer Function

// Warper Component => this Component Wraps The Child Component And Pass Data To Children
export const StateContext = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialState);
  return (
    <State__Context.Provider value={state}>
      <SetState__Context.Provider value={dispach}>
        {children}
      </SetState__Context.Provider>
    </State__Context.Provider>
  );
};
// Warper Component => this Component Wraps The Child Component And Pass Data To Children

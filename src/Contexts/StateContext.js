// Importing Necessary Things
import React, { useReducer } from "react";
import { testimonialImage1 } from "../Compunents/ImageExporter/ImageExporter";
// Importing Necessary Things

// Initializing State
const initialState = {
  topImage: testimonialImage1,
  currentUserImage: "",
};
// Initializing State

// Creating Context
export const ImageDispatcherContext = React.createContext(initialState);
// Creating Context

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
  const change = (e) => {
    return dispach({
      type: "change",
      payload: {
        topImage: e.currentTarget.src,
        imageSrc: testimonialImage1,
      },
    });
  };
  return (
    <ImageDispatcherContext.Provider value={{ state, change }}>
      {children}
    </ImageDispatcherContext.Provider>
  );
};
// Warper Component => this Component Wraps The Child Component And Pass Data To Children

import React, { createContext, useContext, useReducer, useMemo } from "react";
import { SET_MESSAGES } from "./actions";

export const initialState = {
  messages: []
};

function reducer(state, action) {
  if (!state) throw new Error("Reducer state invalid");
  if (!action) throw new Error("Reducer action object invalid");
  if (!action.payload) throw new Error("Reducer action payload invalid");
  if (!action.type) throw new Error("Reducer action type invalid");

  let changeToState = {};

  switch (action.type) {
    case SET_MESSAGES: {
      changeToState = {
        messages: action.payload
      };
      break;
    }

    default: {
      throw new Error();
    }
  }
  return {
    ...state,
    ...changeToState
  };
}

export const ReducerContext = createContext(null);

export default ReducerContext;
export const ReducerConsumer = ReducerContext.Consumer;

export const useReducerContext = () => useContext(ReducerContext);

export const ReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch
    }),
    [state, dispatch]
  );

  return (
    <ReducerContext.Provider value={value}>{children}</ReducerContext.Provider>
  );
};

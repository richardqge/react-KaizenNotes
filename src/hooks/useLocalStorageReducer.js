import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  }); //what we return from 3rd arg, func, will be stored in state

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}

export { useLocalStorageReducer };
//write a function that takes key, default value, and a reducer
//and it calls useReducer with that reducer that was passed in
//and it takes the key and looks to see if there's something in localStorage
//under that key already, if not use defaultVal, else use value found in localStorage
//then set up useEffect Hook, sync to localStorage whenever state changes

//this Hook can be used anytime using useReducer and want changes to persist in localStorage



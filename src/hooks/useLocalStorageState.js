import {useState, useEffect} from 'react';

function UseLocalStorageState(key, defaultVal){
  //make piece of state, based off value in localStorage
  const[state,setState]=useState(()=>{
    let val;
    try{
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    }
    catch(e){
      val = defaultVal;
    }
    return val;
  })
  //use useEffect to update localStorage when state changes
  useEffect(()=>{
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state,setState];
}

export default UseLocalStorageState;
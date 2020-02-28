import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";

import useTodoState from "../hooks/useTodoState"; //gives the HOOK

const defaultTodos = [
  { id: 1, task: "Mow tha lawn", completed: false },
  { id: 2, task: "Release lady bugs", completed: true }
];
export const TodosContext = createContext();

export const DispatchContext = createContext();

export function TodosProvider(props) {
  // const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
      {/* so this allows us to wrap context in <TodoProvider> w/o making new component */}
    </TodosContext.Provider>
  );
}
//so created TodosProvider, which calls useTodoState() to set up initial info in this obj
//pass that in as value for TodosContext.Provider
//return <TodosContext.Provider> WRAPPER

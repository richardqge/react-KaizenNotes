import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState"; //gives the HOOK

const defaultTodos = [
  { id: 1, task: "Mow tha lawn", completed: false },
  { id: 2, task: "Release lady bugs", completed: true }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  // const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(defaultTodos);
  const todosStuff = useTodoState(defaultTodos); //does the same thing
  return (
    <TodosContext.Provider value={{ todosStuff }}>
      {props.children}
    </TodosContext.Provider>
  );
}
//so created TodosProvider, which calls useTodoState() to set up initial info in this obj
//pass that in as value for TodosContext.Provider 
//return <TodosContext.Provider> WRAPPER 

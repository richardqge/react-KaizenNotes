import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import  {TodosContext}  from "./context/todos.context";

import Todo from "./Todo";

function TodoList() {
  const  todos  = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo {...todo} id={todo.id} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;

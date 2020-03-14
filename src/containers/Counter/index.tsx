import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../stores";

export const Counter = observer(() => {
  const { todoStore } = useStore();

  return (
    <div>
      {console.log(todoStore.todoList)}
      <p>{todoStore.todoStatus}</p>
      {todoStore.todoList.map(todo => (
        <ul>
          <li>{todo.description}</li>
          <li>{todo.isDone ? "Feito" : "Falta fazer"}</li>
        </ul>
      ))}
    </div>
  );
});

import React from "react";
import { Counter } from "./../containers/Counter";

interface IProps {
  projectName: string;
}

export const App = ({ projectName }: IProps) => {
  return (
    <div>
      <p>{projectName}</p>
      <Counter />
    </div>
  );
};

import { useContext } from "react";
import { Context } from "../App";

export const ComponentsThree = () => {
  const value = useContext(Context);

  return <div>{value.data.name}</div>;
};

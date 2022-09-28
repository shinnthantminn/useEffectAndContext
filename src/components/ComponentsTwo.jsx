import { Context } from "../App";
import { useContext } from "react";

const ComponentsTwo = () => {
  const { data, hundleClick } = useContext(Context);

  return (
    <>
      <p onClick={() => hundleClick("Hello par")}>name is {data.name}</p>
      <p>age is {data.age}</p>
    </>
  );
};

export default ComponentsTwo;

import { useState } from "react";

const useToggle = (toggleState = false): [boolean, () => void] => {
  const [toggle, setToggle] = useState(toggleState);

  const toggleChange = () => setToggle((prev) => !prev);

  return [toggle, toggleChange];
};

export default useToggle;
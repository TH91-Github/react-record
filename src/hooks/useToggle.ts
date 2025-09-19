import { useState } from "react";

// 🔹 기본 toggle
const useToggle = ( toggleState = false): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [toggle, setToggle] = useState(toggleState);
  const toggleChange = () => setToggle((prev) => !prev);
  return [toggle, toggleChange, setToggle];
};

export default useToggle;
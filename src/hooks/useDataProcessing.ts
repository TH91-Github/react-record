import { useRef, useState } from "react";

export const useLazyData = (dataSet:any) => { // 임시 3/21
  const hasInitialized = useRef(false);
  const [data, setData] = useState(null);

  if (!hasInitialized.current) {
    const generatedData = dataSet();
    setData(generatedData);
    hasInitialized.current = true;
  }

  return data;
};
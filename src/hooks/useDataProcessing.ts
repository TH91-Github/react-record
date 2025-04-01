import { useRef, useState } from "react";

// 🔹 처음 한번 변환되고 값 유지 - 변경이 없는 경우 사용
export const useFixedData = <T>(dataSet: () => T): T | null => { 
  const initData = useRef(false);
  const [data, setData] = useState<T | null>(null);

  if (!initData.current) {
    const changeData = dataSet();
    setData(changeData);
    initData.current = true;
  }
  return data;
};
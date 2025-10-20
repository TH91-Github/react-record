import { useRef, useState } from "react";

// 🔹 최초 한번 변환되고 값 유지 
// 변경이 없는 경우에 사용
// 계산 결과를 최초 한 번만 수행하고 이후로는 재계산 X
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
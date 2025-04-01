import { useMemo } from "react";
// 📍 일치하는 값 찾는 Hook

interface MatchItmePropsType<T> {
  data: T[];  // 비교할 데이터 리스트
  idKey: keyof T; // 비교할 키 (객체의 키 중 하나)
  findVal: string; // 찾을 값
}

// 🔹 일치하는 값(item) - 하나
export const useMatchItem = <T,>({ 
  data, idKey, findVal,  
}:MatchItmePropsType<T>):{matchIdx:number, matchItem: T | undefined } => {
  return useMemo(() => {
    const currentIdx = data.findIndex((item) => item[idKey] === findVal);
    const currentItem = currentIdx !== -1 ? data[currentIdx] : undefined;
    return { matchIdx: currentIdx, matchItem: currentItem };
  }, [data, idKey, findVal]);
};

// 🔹 일치하는 값(item) - 여러 개 []
export const useMatchItems = <T,>({
  data, idKey, findVal,  
}:MatchItmePropsType<T>): {matchIdx:number[], matchItem: T | T[] } => {
  return useMemo(() => {
    const matchedItems = data.filter((item) => item[idKey] === findVal);
    // 일치하지 않는 -1 삭제
    const matchedIndexes = data
      .map((item, idx) => (item[idKey] === findVal ? idx : -1))
      .filter((idx) => idx !== -1); 
    return { matchIdx: matchedIndexes, matchItem: matchedItems };
  }, [data, idKey, findVal]);
};
// 📍 일치하는 값 찾는 Hook
import { useMemo } from "react";

interface MatchItmePropsType<T> {
  data: T[];  // 비교할 데이터 리스트
  idKey: keyof T; // 비교할 키 (객체의 키 중 하나)
  findVal: string; // 찾을 값
}

// 🔹 일치하는 값(item) - 하나만 반환 단일 대상
export const useMatchItem = <T,>({ 
  data, idKey, findVal,  
}:MatchItmePropsType<T>):{ matchIdx: number, matchItem: T | undefined } => {
  return useMemo(() => {
    const currentIdx = data.findIndex((item) => item[idKey] === findVal);
    const currentItem = currentIdx !== -1 ? data[currentIdx] : undefined;
    return { matchIdx: currentIdx, matchItem: currentItem };
  }, [data, idKey, findVal]);
};

// 🔹 일치하는 값(item) - 조건과 일치 하는 값 여러 개 반환[] 다중 대상
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

/*
  일관화
  불필요한 리렌더링 방지 - 성능 최적화
  반환값 - 일치 항목과 index
  고유 ID 검색 및 카테고리 / 상태 필터링
*/
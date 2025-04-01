import { useMemo } from "react";
import { useLocation } from "react-router-dom";
// 📍 location 기준 Hook

// 🔹 location path 데이터 비교
export const useLocationCurrent = <T,>(
  list: T[], // 비교 데이터
  idKey: keyof T, // id, title 찾을 키 값 설정
  index: number // 몇 번째 인덱스를 사용할지
): { locationIdx: number; locationItem: T | undefined; locationPath: string[] }=> {
  const location = useLocation();
  return useMemo(() => {
    const pathArr = location.pathname.split("/").filter(Boolean);
    const targetId = pathArr[index];
    const currentIdx = list.findIndex((item) => item[idKey] === targetId);
    const currentItem = currentIdx !== -1 ? list[currentIdx] : undefined;

    return {locationIdx:currentIdx, locationItem:currentItem, locationPath:pathArr}; // idx, obj, path
  }, [location.pathname, list, idKey, index]);
};

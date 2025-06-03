import { selector } from 'recoil';
import { filterState, stateToastID } from './atoms';

// 필터링된 리스트 예시
export const filteredListState = selector({
  key: 'filteredListState',  // 고유 키
  get: ({ get }) => {
    const filter = get(filterState);  // filter 상태 가져오기
    const list = ['Item 1', 'Item 2', 'Item 3'];  // 예시 데이터

    return list.filter(item => item.includes(filter)); // 필터링된 리스트 반환
  },
});


export const selectorToastID = selector({
  key: 'selectorToastID',
  get: ({ get }) => {
    const current = get(stateToastID);
    return current;
  },
  set: ({ set, get }) => {
    const current = get(stateToastID);
    set(stateToastID, current + 1);
  },
});

import ETCList from 'component/pages/etc/ETCList';
// js
import { randomListId } from 'utils/common';
import TabListMotion from 'component/pages/etc/details/TabListMotion';
import CountDown from 'component/pages/etc/details/CountDown';

let ETCDataList = [
  {
    // id 값은 하단 랜덤으로 생성
    title:"ETCList",
    index: true,
    element: <ETCList />,
    view: false,
    desc: "ETC 목록 정리 관리 화면",
    keyWord:"#etc #기타 #기타등등"
  },
  {
    title:"카테고리 TAB - 리스트 모션",
    path:"/etc/tab-list-motion",
    element: <TabListMotion />,
    view: true,
    desc: "카테고리 선택 클릭 시 리스트자연스러운 무빙 샘플",
    keyWord:"#샘플 #무빙 #카테고리리스트 #자연스러운움직임"
  },
  {
    title:"카운트 다운",
    path:"/etc/tab-list-motion",
    element: <CountDown />,
    view: false,
    desc: "지정된 수에서 0까지 카운트 다운",
    keyWord:"#카운트다운 #CountDown #진행바 #progress #progressbar #프로그레스바"
  },
];
export const ETCRouter = randomListId(ETCDataList, "Etc");


import ETCList from 'component/pages/etc/ETCList';
// js
import { ranDom } from 'utils/common';

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
];

export const ETCRouter = ranDomId(ETCDataList);
function ranDomId(listData){ // id 랜덤으로 생성
  let routerData = listData.map((item)=> {
    const idOption = { id : ranDom(9999, "guide")}
    return item.id === undefined ? {...idOption, ...item} : item
  })
  return routerData; 
}


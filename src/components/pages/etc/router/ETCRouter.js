// React
import { ranDomId } from 'utils/common';


let ETCDataList = [
  {
    title:"etc",
    // // id 값은 하단 랜덤으로 생성
    // title:"GuideList",
    // index: true,
    // element: <GuideList />,
    // view: false,
    // desc: "Record 목록 정리 관리 화면",
    // keyWord:"#Guide #메인 #리스트 #메인리스트"
  },
  {
    // // id 값은 하단 랜덤으로 생성
    // title:"Color Guide",
    // path:"/guide/color",
    // element: <GuideColor />,
    // view: true,
    // desc: "👉 Color Guide 자세히 보러가기",
    // keyWord:"#Guide #Color #컬러 #색상 #코드"
  },
];
export const ETCRouter = ranDomId(ETCDataList, "ETC");

// React
import GuideList from 'component/pages/guide/GuideList';
import GuideColor from 'component/pages/guide/details/GuideColor';
import GuideBreakPoint from 'component/pages/guide/details/GuideBreakPoint';
import GuideFont from 'component/pages/guide/details/GuideFont';
import GuideSwiper from 'component/pages/guide/details/GuideSwiper';

import { ranDom } from 'api/common';


let GuideDataList = [
  {
    // id 값은 하단 랜덤으로 생성
    title:"GuideList",
    index: true,
    element: <GuideList />,
    view: false,
    desc: "Record 목록 정리 관리 화면",
  },
  {
    // id 값은 하단 랜덤으로 생성
    title:"Color Guide",
    path:"/guide/color",
    element: <GuideColor />,
    view: true,
    desc: "👉 Color Guide 자세히 보러가기",
  },
  {
    title:"BreakPoint Guide",
    path:"/guide/breakpoint",
    element: <GuideBreakPoint />,
    view: true,
    desc: "👉 BreakPoint Guide 자세히 보러가기",
  },
  {
    title:"Font Guide",
    path:"/guide/font",
    element: <GuideFont />,
    view: true,
    desc: "👉 Font Guide 자세히 보러가기",
  },
  {
    title:"Swiper Guide",
    path:"/guide/swiper",
    element: <GuideSwiper />,
    view: true,
    desc: "👉 Swiper 라이브러리 사용 보러가기 : 제작 중",
  },
];

export const GuideRouter = ranDomId(GuideDataList);
function ranDomId(listData){ // id 랜덤으로 생성
  let routerData = listData.map((item)=> {
    const idOption = { id : ranDom(9999, "guide")}
    return item.id === undefined ? {...idOption, ...item} : item
  })
  return routerData; 
}


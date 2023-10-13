// React
import GuideSwiper from 'component/pages/guide/details/GuideSwiper';

import { ranDom } from 'api/common';

let GuideDataList = [
  {
    // id 값은 하단 랜덤으로 생성
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


// React
import GuideList from 'component/pages/guide/GuideList';
import GuideColor from 'component/pages/guide/details/GuideColor';
import GuideBreakPoint from 'component/pages/guide/details/GuideBreakPoint';
import GuideFont from 'component/pages/guide/details/GuideFont';
import GuideSwiper from 'component/pages/guide/details/GuideSwiper';

import { ranDomId } from 'utils/common';
import GuideTab from '../details/GuideTab';
import GuidePaginate from '../details/GuidePaginate';


let GuideDataList = [
  {
    // id 값은 하단 랜덤으로 생성
    title:"GuideList",
    index: true,
    element: <GuideList />,
    view: false,
    desc: "Record 목록 정리 관리 화면",
    keyWord:"#Guide #메인 #리스트 #메인리스트"
  },
  {
    // id 값은 하단 랜덤으로 생성
    title:"Color Guide",
    path:"/guide/color",
    element: <GuideColor />,
    view: true,
    desc: "👉 Color Guide 자세히 보러가기",
    keyWord:"#Guide #Color #컬러 #색상 #코드"
  },
  {
    title:"BreakPoint Guide",
    path:"/guide/breakpoint",
    element: <GuideBreakPoint />,
    view: true,
    desc: "👉 BreakPoint Guide 자세히 보러가기",
    keyWord:"#Guide #BreakPoint #브레이크 #브레이크포인트 #화면사이즈"
  },
  {
    title:"Font Guide",
    path:"/guide/font",
    element: <GuideFont />,
    view: true,
    desc: "👉 Font Guide 자세히 보러가기",
    keyWord:"#Guide #font #폰트 #폰트사이즈 #글자 #폰트종류"
  },
  {
    title:"Slider Guide",
    path:"/guide/swiper",
    element: <GuideSwiper />,
    view: true,
    desc: "👉 Swiper 라이브러리 사용 보러가기",
    keyWord:"#Guide #슬라이드 #swiper #배너슬라이드 #슬라이가이드 #slide #slider"
  },
  {
    title:"Tab Guide",
    path:"/guide/tab",
    element:<GuideTab />,
    view:true,
    desc: "👉 TAB 메뉴 사용 보러가기",
    keyWord:"#Guide #Tab #탭 #탭메뉴 #탭버튼"
  },
  {
    title:"Paginate Guide",
    path:"/guide/paginate",
    element:<GuidePaginate />,
    view:true,
    desc: "👉 Paginate 사용 보러가기 : 제작 중",
    keyWord:"#Guide #Paginate #페이지번호 #페이징 #번호리스트"
  }
];
export const GuideRouter = ranDomId(GuideDataList, "Guide");

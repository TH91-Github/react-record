import RecordList from 'component/pages/record/RecordList';
import Test from 'component/pages/record/study/Test';
// React
import State2 from 'component/pages/record/study/react/State2';
import State3 from 'component/pages/record/study/react/State3';
import ComponentTest from 'component/pages/record/study/react/ComponentTest';
import UseEffectTest from 'component/pages/record/study/react/UseEffectTest';

// js
import Js from 'component/pages/record/study/js/Js';
import { ranDom } from 'utils/common';

let RecordDataList = [
  {
    // id 값은 하단 랜덤으로 생성
    title:"RecordList",
    index: true,
    element: <RecordList />,
    view: false,
    desc: "Record 목록 정리 관리 화면",
    keyWord:"#Guide #슬라이드 #swiper #배너슬라이드 #슬라이가이드 #slide #slider"
  },
  {
    title:"Test",
    path:"Test",
    element: <Test />,
    view: false,
    desc: "Test 코드",
    keyWord:"#test #코드연습"
  },
  {
    title:"State (2) Array 변경",
    path:"React/state2",
    element: <State2 />,
    view: true,
    desc: "useState 활용 Array 값을 변경하는 방법",
    keyWord:"#state #useState #arr변경 #state arr"
  },
  {
    title:"State(3) input 입력된 값으로 변경",
    path:"React/state3",
    element: <State3 />,
    view: true,
    desc: "useState 활용 마지막 input, button arr 수정",
    keyWord:"#input #state #state input #button input state 수정"
  },
  {
    title:"Component 생성 및 Props 전달",
    path:"React/component",
    element: <ComponentTest />,
    view: true,
    desc: "컴포넌트 생성 및 props 전달 테스트",
    keyWord:"#compoent #컴포넌트 #컴포넌트생성 및 전달 #props 전달"
  },
  {
    title:"useEffect 사용",
    path:"React/useEffect",
    element: <UseEffectTest />,
    view: true,
    desc: "useEffect를 활용하여 테스트",
    keyWord:"#UseEffectTest #effect #useEffect"
  },
  {
    title:"JavaScript",
    path:"Js/js",
    element: <Js />,
    view: true,
    desc: "JavaScript 테스트",
    keyWord:"#JavaScript #JS #테스트"
  },
];

export const RecordRouter = ranDomId(RecordDataList);
function ranDomId(listData){ // id 랜덤으로 생성
  let routerData = listData.map((item)=> {
    const idOption = { id : ranDom(9999, "guide")}
    return item.id === undefined ? {...idOption, ...item} : item
  })
  return routerData; 
}


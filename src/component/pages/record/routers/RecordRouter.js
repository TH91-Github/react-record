import RecordList from 'component/pages/record/RecordList';
import Test from 'component/pages/record/study/Test';
import State2 from 'component/pages/record/study/state/State2';
import State3 from 'component/pages/record/study/state/State3';
import Js from 'component/pages/record/study/js/Js';

export const RecordRouter = [
  {
    id:1,
    title:"RecordList",
    index: true,
    element: <RecordList />,
    view: false,
    desc: "Record 목록 정리 관리 화면",
  },
  {
    id:111111,
    title:"Test",
    path:"Test",
    element: <Test />,
    view: false,
    desc: "Test 코드",
  },
  {
    id:2,
    title:"React - state (2) Array 변경",
    path:"state/state2",
    element: <State2 />,
    view: true,
    desc: "useState 활용 Array 값을 변경하는 방법",
  },
  {
    id:3,
    title:"React - state(3) input 입력된 값으로 변경",
    path:"state/state3",
    element: <State3 />,
    view: true,
    desc: "useState 활용 마지막 input, button arr 수정",
  },
  {
    id:4,
    title:"JavaScript",
    path:"js/Js",
    element: <Js />,
    view: true,
    desc: "JavaScript 테스트",
  },
]



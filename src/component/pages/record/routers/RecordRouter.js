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
    title:"State(2)",
    path:"state/state2",
    element: <State2 />,
    view: true,
    desc: "React-state (2) Array 변경",
  },
  {
    id:3,
    title:"useState Input, Button",
    path:"state/state3",
    element: <State3 />,
    view: true,
    desc: "React-useState 활용",
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



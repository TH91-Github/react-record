import RecordList from '../RecordList';
import State2 from 'component/pages/record/study/state/State2';
import State3 from 'component/pages/record/study/state/State3';

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
]



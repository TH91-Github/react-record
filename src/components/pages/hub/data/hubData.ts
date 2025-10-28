import { HubCategoryCodeInfoType, HubRoomType } from "types/hub/hub";

// 🔹 카테고리 ko, en 정보
export const hubCategoryCode: HubCategoryCodeInfoType[] = [
  {
    id:'code-1',
    title:'일반',
    code:'normal'
  },
  {
    id:'code-2',
    title:'여행',
    code:'travel'
  },
  {
    id:'code-2',
    title:'달력',
    code:'calendar'
  },
  {
    id:'code-2',
    title:'메모',
    code:'memo'
  },
  {
    id:'code-2',
    title:'가계부',
    code:'cashledger'
  },
] 

export const hubBaseData : HubRoomType[] = [
  {
    hubTit:'전체',
    hubCategory:'default',
    hubLists:[
      {
        order:1,
        code:'all',
        title:'전체',
        desc:'공개/비공개 전체 만들어진 방 목록을 안내하고 있어요.',
        total:5938,
      },
      {
        order:2,
        code:'normal',
        title:'일반',
        desc:'일상 모임, 메모, 약속 등 일상 속 함께 해보세요.',
        total:5938,
      },
      {
        order:3,
        code:'travel',
        title:'여행',
        desc:'여행을 위한 공간! 일정, 컨셉, 기록을 공유하세요!',
        total:5938,
      }
    ],
  },
  {
    hubTit:'참여 중',
    hubCategory:'groups',
    hubLists:[
      {
        order:1,
        code:'normal',
        title:'일반으로',
        desc:'일반으로 이루어진 방 수',
        total:5938,
      },
    ]
  },
  {
    hubTit:'즐겨찾기',
    hubCategory:'bookmark',
    hubLists:[
      {
        order:1,
        code:'travel',
        title:'여행 즐겨찾기 방 수',
        desc:'즐겨찾기 여행 관련 방 총 수',
        total:5938,
      },
      {
        order:2,
        code:'normal',
        title:'일반 즐겨찾기 방 수 ',
        desc:'즐겨찾기 일반 즐겨찾기 방 수',
        total:5938,
      }
    ]
  }
];
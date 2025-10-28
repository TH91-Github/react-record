// 🔹 hub room 타입 지정

type HubCategoryCodeKoType = '일반' | '여행' | '달력' | '메모' | '가계부'
type HubCategoryCodeType = 'normal' | 'travel' | 'calendar' | 'memo' | 'cashledger'

export interface HubCategoryCodeInfoType {
  id:string,
  title: HubCategoryCodeKoType
  code: HubCategoryCodeType
}
export interface HubItemType {
  order: number,
  code:'all' | HubCategoryCodeType
  title: string,
  desc: string,
  total: number,
}
export interface HubRoomType {
  hubTit:string,
  hubCategory:string,
  hubLists: HubItemType[]
}

/*
  ⭐ 타입 예시
  CodeType

  firebase
  roomData > 
  [depth 1]
    title:string : hub main Room 정보 타이틀
    desc:string : hub main Room 설명  
    roomInfo[ categoryCode 타입 별 정보 total을 계산하기 위함
      title:string
      desc:string
      total:number
      categoryCode: 'etc
    ] 

  [depth 2- 컬렉션]
  userRoom : user 개별 문서 등록 유저가 만든 정보 입력
  normal ~ 각 카테고리별 생성: 
    문서 방만들어지는 고유 id 자동 생성 : 

  ⭐[depth 3 - 컬렉션 hasPassword ]
  hasPassword 컬렉션이 있는 경우 필드 정보를 불러오지 않는다.
  비밀번호 입력 여부 보여준다 > 비밀번호 입력 > 요청
  hassPassword 컬렉션 > pw 문서 > value 비밀번호 일치 시 depth 2 필드 값 불러오기
  [depth 2 - 필드]
  categoryCode:string: normal
  id:string: 문서 id 
  master:{ 방 만드는 방장
    email:
    id:
    nickName:
    uid:
  }
  maLength:Number: 총 인원 수 조정
  time: 개설 시간
  updateTime: 업데이트 시간
  userLists[]:{
    email: 유저 이메일,
    joinTime:가입 시간,
    name: 방에서 닉네임 
    nickName:유저 닉네임,
    rank: 방에서 등급
    title:'방에서 '
    userRole: 직책 - 총무 등
    uid:''
  }
  visibility:boolean: 비공개 여부 


*/
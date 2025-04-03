// ✅ variables 동기화, 추후 DB 관리

interface DesignListsType {
  id: string;
  title: string;
  desc?: string[];
  code: string;
}

interface DesignDataType  {
  id:string | number;
  title:string;
  lists: DesignListsType[]
}

export const designData : DesignDataType[] = [
  {
    id:'colors',
    title:'주요 사용 색상',
    lists:[
      {
        id:'colors-red',
        title:'red',
        desc:['error 강하게 강조해야 하는 부분에 사용'],
        code:'#e8392c',
      },
      {
        id:'colors-green',
        title:'green',
        code:'#0C9463',
      },
      {
        id:'colors-yellow',
        title:'yellow',
        code:'#FFB000',
      },
      {
        id:'colors-black',
        title:'black',
        code:'#050b21',
      },
      {
        id:'colors-mSlateBlue',
        title:'green',
        desc:['default 포인트 색상','색상 이름 mediumSlateBlue이며 medium -> m 약어를 사용하고 있습니다.'],
        code:'#6a67e5',
      },
      {
        id:'colors-blue',
        title:'blue',
        code:'#395acc',
      },
      {
        id:'colors-darkNavy',
        title:'darkNavy',
        code:'#03053a',
      },
      {
        id:'colors-lineColor',
        title:'lineColor',
        desc:['border 또는 line 주로 사용'],
        code:'#dbdbdb',
      },
    ]
  },
  {
    id:'textColor',
    title:'글자에 사용하는 색상',
    lists:[
      {
        id:'textColor-title',
        title:'title',
        desc:['제목(타이틀) 기본 색상','title, tit class 적용 색상'],
        code:'#353844',
      },
      {
        id:'textColor-text',
        title:'text',
        desc:['일반적인 텍스트 색상'],
        code:'#42464d',
      },
      {
        id:'textColor-desc',
        title:'desc',
        desc:['설명 글에 사용되는 색상','desc 클래스 적용 색상'],
        code:'#42464d',
      },
      {
        id:'textColor-subText',
        title:'subText',
        desc:['서브로 입력되는 텍스트에 사용','살짝 흐린 텍스트에 사용'],
        code:'#8d9095',
      },
    ]
  },
  {
    id:'bgColor',
    title:'배경에 사용하는 색상',
    lists:[
      {
        id:'bgColor-sideWite',
        title:'sideWite',
        desc:['사이드 메뉴 BG 색상으로 사용'],
        code:'#F1F3F5',
      },
    ]
  },
  {
    id:'bgOpacity',
    title:'투명도가 적용된 배경 색상',
    lists:[
      {
        id:'bgOpacity-white',
        title:'white',
        desc:['투명도를 위해 rgba 사용'],
        code:'rgba(255,255,255,.7)',
      },
    ]
  }
]
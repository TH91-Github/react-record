// ✅ variables 동기화, 추후 DB 관리

import { bgColor, bgOpacity, colors, textColor } from "assets/style/variables"
import { BreakpointsDataType, ColorChipDataType, FontDataType } from "types/guide/guide"

export const colorsData : ColorChipDataType = {
  headData:{
    title:'Color System',
    desc:[
      '사용하는 색상의 일관성을 유지하기 위해 정의',
      '파일 경로 : /src/assets/style/variables.ts'
    ]
  },
  bodyData: [
    {
      id:'colors',
      title:'주요 사용 색상',
      lists:[
        {
          id:'colors-red',
          title:'red',
          desc:['error 강하게 강조해야 하는 부분에 사용'],
          code:`${colors.red}`,
        },
        {
          id:'colors-green',
          title:'green',
          code:`${colors.green}`,
        },
        {
          id:'colors-yellow',
          title:'yellow',
          code:`${colors.yellow}`,
        },
        {
          id:'colors-black',
          title:'black',
          code:`${colors.black}`,
        },
        {
          id:'colors-mSlateBlue',
          title:'mSlateBlue',
          desc:['default 포인트 색상','색상 이름 mediumSlateBlue이며 medium -> m 약어를 사용하고 있습니다.'],
          code:`${colors.mSlateBlue}`,
        },
        {
          id:'colors-blue',
          title:'blue',
          code:`${colors.blue}`,
        },
        {
          id:'colors-navy',
          title:'navy',
          code:`${colors.navy}`,
        },
        {
          id:'colors-darkNavy',
          title:'darkNavy',
          code:`${colors.darkNavy}`,
        },
        {
          id:'color-gray',
          title:'gray',
          code:`${colors.gray}`,
        },
        {
          id:'color-disabled',
          title:'disabled',
          code:`${colors.disabled}`,
          readable:true,
        },
        {
          id:'colors-lineBlack',
          title:'lineBlack',
          desc:['border 또는 line 주로 사용 - 어두운 버전'],
          code:`${colors.lineBlack}`,
        },
        {
          id:'colors-lineColor',
          title:'lineColor',
          desc:['border 또는 line 주로 사용 - 연한 버전'],
          code:`${colors.lineColor}`,
          readable:true,
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
          code:`${bgColor.sideWite}`,
          readable:true,
        },
      ]
    },
    {
      id:'bgOpacity',
      title:'투명도가 적용된 배경 색상',
      desc:['투명도를 확인하기 위해 박스가 움직이고 있습니다.'],
      lists:[
        {
          id:'bgOpacity-white',
          title:'white',
          desc:['투명도를 위해 rgba 사용'],
          code:`${bgOpacity.white}`,
          readable:true,
        },
      ]
    },
    {
      id:'textColor',
      title:'글자에 사용하는 색상 (텍스트와 연관된 배경 포함)',
      lists:[
        {
          id:'textColor-title',
          title:'title',
          desc:['제목(타이틀) 기본 색상','title, tit class 적용 색상'],
          code:`${textColor.title}`,
        },
        {
          id:'textColor-text',
          title:'text',
          desc:['일반적인 텍스트 색상'],
          code:`${textColor.text}`,
        },
        {
          id:'textColor-desc',
          title:'desc',
          desc:['설명 글에 사용되는 색상','desc 클래스 적용 색상'],
          code:`${textColor.desc}`,
        },
        {
          id:'textColor-subText',
          title:'subText',
          desc:['서브로 입력되는 텍스트에 사용','살짝 흐린 텍스트에 사용'],
          code:`${textColor.subText}`,
        },
      ]
    }
  ]
}

export const breakpointsData : BreakpointsDataType = {
  headData :{ 
    title:'Breakpoint System',
    desc:[
      '디바이스 환경에 따라 일관된 레이아웃을 제공하기 위해 정의',
      '파일 경로 : /src/assets/style/variables.ts'
    ]
  },
  bodyData :[ 
    {
      id:'breakpoints',
      title:'디바이스 해상도에 따른 5단계 기준',
      lists: [
        {
          id:'breakpoints-maxPc',
          title:'maxPc',
          desc:['최대 가로 사이즈 기준'],
          code:'1920',
        },
        {
          id:'breakpoints-largePc',
          title:'largePc',
          desc:['Desktop 기준 사이즈','노트북 및 데스크탑에 최적화'],
          code:'1440',
        },
        {
          id:'breakpoints-pc',
          title:'pc',
          desc:['일반적인 노트북 및 중형 데스크탑 기준 사이즈','1440보다 작은 해상도 환경에 최적화'],
          code:'1140',
        },
        {
          id:'breakpoints-tablet',
          title:'tablet',
          desc:['Tablet 기준 사이즈', '세로 모드 기준 넓은 태블릿까지 포함'],
          code:'1140',
        },
        {
          id:'breakpoints-mo',
          title:'mo',
          desc:['Mobile 기준 사이즈','일반적인 스마트폰 가로 모드까지 포함'],
          code:'768',
        },
        {
          id:'breakpoints-smallMo',
          title:'smallMo',
          desc:['Mobile 작은 기종 사이즈','작은 디바이스 또는 최소 해상도 대응'],
          code:'450',
        },
      ]
    },{
      id:'media',
      title:'CSS @media 사용',
      lists: [
        {
          id:'media-maxPc',
          title:'maxPc',
          desc:['최대 가로 사이즈 기준', '@media screen and (max-width: 1920px)'],
          media:{
            min: null,
            max: 1920
          },
        },
        {
          id:'media-largePc',
          title:'largePc',
          desc:['pc만 사용 ','@media screen and (min-width:1440px)'],
          media:{
            min: 1440,
            max: null
          },
        },
        {
          id:'media-pc',
          title:'pc',
          desc:['데스크탑 시작 ','@media screen and (min-width:1440px)'],
          media:{
            min: 1140,
            max: null
          },
        },
        {
          id:'media-smailPc',
          title:'smailPc',
          desc:['랩탑/노트북 포함 일반 PC 범위','@media screen and (min-width:1140px) and (max-width:1439px)'],
          media:{
            min: 1140,
            max: 1439
          },
        },
        {
          id:'media-tabletPc',
          title:'tabletPc',
          desc:['태블릿과 PC 포함 범위 ','@media screen and (min-width: 768px)'],
          media:{
            min: 768,
            max: null
          },
        },
        {
          id:'media-tablet',
          title:'tablet',
          desc:['태블릿 전용 ','@media screen and (min-width: 768px) and (max-width:1139)'],
          media:{
            min: 768,
            max: 1139
          },
        },
        {
          id:'media-tabletMo',
          title:'tabletMo',
          desc:['모바일과 태블릿 포함 범위 ','@media screen and (max-width:1139px'],
          media:{
            min: null,
            max: 1139
          },
        },
        {
          id:'media-tabletMo',
          title:'tabletMo',
          desc:['모바일 전용 ','@media screen and (max-width:767px)'],
          media:{
            min: null,
            max: 767
          },
        },
        {
          id:'media-smallMo',
          title:'smallMo',
          desc:['작은 모바일 전용 ','@media screen and (max-width:450px'],
          media:{
            min: null,
            max: 450
          },
        },
      ]
    }
  ]
}

export const fontsData : FontDataType = {
  headData:{
    title:'Typography System',
    desc:[
      '사용하는 글꼴 스타일을 쉽게 확인하고 사용하기 위해',
      'Pretendard 프리텐다드 사용: PretendardVariable',
      'default weight : 500' 
    ]
  },
  bodyData:[100, 200, 300, 400, 500, 600, 700, 800, 900]
}
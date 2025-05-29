import { SvgPropsType } from "assets/svg/Common";
import { ColorChipListsType } from "./ui";

interface headDataType {
  title:string,
  desc: string | string[]
}
interface GuideBaseDataType  {
  id:string;
  title:string;
  desc?:string[];
}

export interface ColorChipDataType {  // Color Data Type
  headData: headDataType,
  bodyData: (GuideBaseDataType & { lists: ColorChipListsType[] })[]
}

export interface BreakpointsDataType {  // Breakpoints Data Type
  headData: headDataType,
  bodyData: (GuideBaseDataType & { 
    lists: {
      id: string;
      title: string;
      desc?: string[];
      code?: string;
      media?: {
        min: number | null;
        max: number | null;
      }
    }[]
  })[]
}

export interface FontDataType {  // Color Data Type
  headData: headDataType,
  bodyData: number[]
}

export interface IconDataType {  // Icon Data Type
  headData: headDataType,
  bodyData: (GuideBaseDataType & { 
    lists: {
      id: string;
      title: string;
      category: string;
      desc?: string[];
      code: string;
      fill?: boolean; // fill 컬러 변경
      // iconElement?:React.ReactNode;
      svgElement?: React.FC<SvgPropsType>;
      classElement?: React.ReactNode;
      path?:string;
    }[]
  })[]
}

export interface ButtonCaseType {
  id: string;
  title: string;
  desc?: string[];
}
export interface ButtonDataType {  // Color Data Type
  headData: headDataType,
  bodyData: (GuideBaseDataType & { 
    category:string,
    lists: ButtonCaseType[]
  })[]
}

export interface ComponentsDataType {
  id:string;
  title: string;
  desc: string;
  category: string;
  update: string;
  keyword: string[];
}

export interface ComponentsInfoType {
  info:{
    id: string;
    title: string;
    desc: string;
  },
  hook:{
    id:string;
    title:string;
  }[],
  link:{
    id: string;
    title: string;
    link: string | null;
  }[],
  code: {
    id: string;
    title: string;
    lang: string;
    code: string;
  }[]
}
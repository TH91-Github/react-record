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
      desc?: string[];
      code: string;
    }[]
  })[]
}


// export interface IconDataType extends GuideBaseDataType {
//   lists: {
//     id: string;
//     title: string;
//     desc?: string[];
//     code: string;
//   }[]
// }

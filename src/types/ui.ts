// 📍 ui components type

interface GuideBaseDataType  {
  id:string;
  title:string;
  desc?:string[];
}
export interface ColorChipListsType {  // ColorChip lists
  id: string;
  title: string;
  desc?: string[];
  code: string;
  readable?:boolean; // 접근성 관련 색상 보완
}

export interface ColorChipDataType extends GuideBaseDataType {  // Color Data Type
  lists: ColorChipListsType[];
}

export interface BreakpointsDataType extends GuideBaseDataType { // Breakpoints Data Type
  lists: { // Breakpoints lists
    id: string;
    title: string;
    desc?: string[];
    code?: string;
    media?: {
      min: number | null;
      max: number | null;
    }
  }[]
}

export interface IconDataType extends GuideBaseDataType {
  lists: {
    id: string;
    title: string;
    desc?: string[];
    code: string;
  }[]
}
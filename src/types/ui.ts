// 📍 ui components type

interface DesignDataType  {
  id:string;
  title:string;
  desc?:string[];
}
export interface ColorChipListsType { // ColorChip lists
  id: string;
  title: string;
  desc?: string[];
  code: string;
  readable?:boolean; // 접근성 관련 색상 보완
}

// Color Data Type
export interface ColorChipDataType extends DesignDataType { 
  lists: ColorChipListsType[];
}

export interface BreakpointsListsType { // Breakpoints lists
  id: string;
  title: string;
  desc?: string[];
  code?: string;
  media?: {
    min: number | null;
    max: number | null;
  }
}
// Breakpoints Data Type
export interface BreakpointsDataType extends DesignDataType { 
  lists: BreakpointsListsType[];
}
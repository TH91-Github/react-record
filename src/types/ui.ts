// 📍 ui components type

export interface ColorChipListsType {  // ColorChip lists
  id: string;
  title: string;
  desc?: string[];
  code: string;
  readable?:boolean; // 접근성 관련 색상 보완
}

export interface TitlePointPropsType {
  titleTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  titleText: string;
  pointer?: 'circle' | 'underline';
  $display?: 'inline-block' | 'block';
  $fontSize?: number;
  $activeColor?: string;
}
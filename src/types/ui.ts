// 📍 ui components type

export interface ColorChipDataType { // ColorChip
  id: string;
  title: string;
  desc?: string[];
  code: string;
  readable?:boolean; // 접근성 관련 색상 보완
}
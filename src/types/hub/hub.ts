import { IconType } from "react-icons";

export interface HubItemType {
  order: number,
  code:'all' | 'normal' | 'travel',
  title: string,
  desc: string,
  total: number,
}
export interface HubCategoryType {
  hubTit:string,
  hubCategory:string,
  hubLists: HubItemType[]
}
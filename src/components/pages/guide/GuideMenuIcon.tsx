import { SvgBook, SvgCode, SvgDesign, SvgFolder, SvgPuzzle, SvgRectangleStack, SvgSetting, SvgSquareStack } from "assets/svg/Common";
import { useMemo } from "react";

export const GuideMenuIcon = ({id}:{id:string}) => {
  const iconTit:{[key:string] : React.ReactNode} = useMemo(() =>{ 
      return {
        principles: <SvgBook />, // 규칙
        design: <SvgDesign />, 
        ui: <SvgRectangleStack />, 
        assets: <SvgFolder />,
        components: <SvgSquareStack />,
        hooks: <SvgCode />,
        utils: <SvgPuzzle />,
        preferences: <SvgSetting />,
      };
    },[]);
  return(
    <span className="icon">{iconTit[id]}</span>
  )
}
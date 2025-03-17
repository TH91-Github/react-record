import { useLocation } from "react-router-dom";
import { guideList } from "routes/pages/guide/GuideRouter";
import styled from "styled-components";

export const GUIDE_DEPTH_LIST = guideList;
export const DepthHeader = ({title}:{title:string}) =>{
  const location = useLocation();
  console.log(location.pathname)
  return(
    <StyleWrap>

    </StyleWrap>
  )
}
const StyleWrap = styled.div`

`;
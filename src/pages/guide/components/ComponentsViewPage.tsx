import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

interface ContextPropsType { 
  id: string
  detailsAni: boolean | null
}
export const ComponentsViewPage = () => {
  const {id, detailsAni } = useOutletContext<ContextPropsType>();
  if(detailsAni === null) return null
  console.log(id)
  return (
    <StyleWrap>
      
      {/* 컨텐츠 */}
    
      {/* 검색 기능을 여기서 */}
      {/* detail 페이지 :id */}
      {/* popup, swiper,  */}

      {/* 
      리스트 -> 디테일

        title:''
        desc:''
        스토리북 url
        code: highlightjs
        
        케이스별 보여주기
        
      */}
    </StyleWrap>
  )
}

const StyleWrap = styled.div`

`;
import { LoadView } from "components/pages/guide/component/LoadView";
import { TitleHeading } from "components/ui/TitleHeading";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

interface ContextPropsType { 
  id: string
  detailsAni: boolean | null
}
export const ComponentsViewPage = () => {
  const {id, detailsAni } = useOutletContext<ContextPropsType>();
  const [notCheck,setNotCheck] = useState(false);
  
  const onNotFound= () => { // 경로 오류 및 일치하는 컴포넌트가 없는 경우
    setNotCheck(true)
  }

  useEffect(() => {
    if(notCheck){
      setNotCheck(false)
    }
  }, [id]);
  if(detailsAni === null) return null
  return (
    <StyleWrap>
      {!notCheck && (
        <TitleHeading
          $display="block"
          titleTag="h4"
          titleText={id} 
          pointer="circle"
          $fontSize={28}
        />
      )}
      <div className="view-cont">
        <LoadView id={id} onNotFound={onNotFound}/>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .title-heading{
    padding-right:30px;
  }
  .view-cont{
    margin-top:30px;
  }
`;
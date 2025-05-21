import { LoadView } from "components/pages/guide/component/LoadView";
import { TitleHeading } from "components/ui/TitleHeading";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useRecoilState } from "recoil";
import { statePrevFocus } from "recoil/atoms";
import styled from "styled-components";
import { formatText } from "utils/character";

interface ContextPropsType { 
  id: string
  detailsAni: boolean | null
}
export const ComponentsViewPage = () => {
  const navigate = useNavigate();
  const {id, detailsAni } = useOutletContext<ContextPropsType>();
  const [notCheck ,setNotCheck] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const onNotFound= () => { // 경로 오류 및 일치하는 컴포넌트가 없는 경우
    setNotCheck(true)
  }

  const handleClosedClick = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      navigate('/guide/components');
    }, 400);
  }
  useEffect(() => {
    return () => setIsClosing(false);
  }, []);

  useEffect(() => {
    if(notCheck){
      setNotCheck(false)
    }
  }, [notCheck, id]);
  if(detailsAni === null) return null
  return (
    <StyleWrap className={`${detailsAni ? 'fade-up':''} ${isClosing? 'fade-down':''}`}>
      {!notCheck && (
        <TitleHeading
          $display="block"
          titleTag="h4"
          titleText={formatText(id)} 
          pointer="circle"
          $fontSize={28}
        />
      )}
      <div className="view-cont">
        <LoadView id={id} onNotFound={onNotFound}/>
      </div>
      <button 
        className="close-btn"
        onClick={handleClosedClick}
      >
        <span>닫기</span>
      </button>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  position:relative;
  padding:30px;
  .title-heading{
    padding-right:30px;
  }
  .view-cont{
    margin-top:30px;
  }
  .close-btn {
  top:30px;
  right:30px;
  }
`;
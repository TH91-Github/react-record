import styled from "styled-components"

export const Popup = () => {

  const handleEndClick = () => {

  }

  return (
    <StyleWrap className="popup-wrap">
      <div className="popup-inner">
        <div className="popup-heading">

        </div>
        <div className="popup-body">

        </div>
      </div>
      <div className="dimmed" onClick={handleEndClick}></div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100svh;
  height:100svh;
  .dimmed {
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.5);
  }
`;
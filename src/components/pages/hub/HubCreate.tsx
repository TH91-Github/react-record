import { colors, transitionStyle } from "assets/style/variables";
import { IconFolderAdd } from "assets/svg/icons";
import styled from "styled-components"


export const HubCreate = () => {

  const handleCreateClick = () =>{

  }
  return (
    <StyleWrap>
      <button
        type="button"
        className="btn-create"
        onClick={handleCreateClick}
      >
        <span className="icon"><IconFolderAdd /></span>
        <span className="txt">방 만들기</span>
      </button>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
padding:10px 30px;
background-color:${colors.blue};
.btn-create{
  display:flex;
  gap:5px;
  align-items:center;
  padding:8px 10px;
  border-radius:5px;
  border:1px solid #fff;
  font-size:14px;
  ${transitionStyle(["background-color", "color"])};
  color:#fff;
  &:hover{
    background-color:#fff;
    color:${colors.blue};
  }
  .icon{
    display:inline-block;
    width:18px;
    height:18px;
  }
}
`;
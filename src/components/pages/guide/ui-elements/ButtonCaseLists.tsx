import { useToast } from "hooks/useToast";
import styled from "styled-components";
import { ButtonCaseType } from "types/guide/guide";
import { copyClipboard } from "utils/common";

interface ButtonCaseListsPropsType {
  data:ButtonCaseType[];
}
export const ButtonCaseLists = ({data}:ButtonCaseListsPropsType) =>{
  const { addToast } = useToast();

  const handleClickCopy = async (e:string) => {
    const copySuccess = await copyClipboard(e);
    addToast(
      copySuccess ? '복사를 성공했어요.' : '복사를 실패했어요.. 😢',
      copySuccess ? 'base' : 'error'
    )
  };
  
  return (
    <StyleWrap className="button-lists">
      <ul>
        {data.map((item,idx) => (
          <li 
            key={idx} 
            className={`${(item.title.includes('full')?'full-type':'')} ${(item.title.includes('ellipsis')?'ellipsis-type':'')}`}>
            <button 
              type="button" 
              className={item.title}
              title={`${item.title} 복사하기`}
              onClick={() => handleClickCopy(item.title)}
            >
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
ul { 
  display:flex;
  flex-wrap:wrap;
  gap:20px;
  & > li {
    &.ellipsis-type{
      width:100px;
    }
    &.full-type{
      width:200px;
    }
  }
}
`;
import styled from "styled-components";
import { ButtonCaseType } from "types/guide";
import { copyClipboard } from "utils/common";

interface ButtonCaseListsPropsType {
  data:ButtonCaseType[];
  category: string;
}
export const ButtonCaseLists = ({data, category}:ButtonCaseListsPropsType) =>{

  const handleClickCopy = async (e:string) => {
    const copySuccess = await copyClipboard(e);
    // 👇 popup 컴포넌트 완료 후 교체
    copySuccess 
      ? console.log('성공') 
      : console.log('실패') 
  };
  
  return (
    <StyleWrap className="button-lists">
      <ul>
        {
          data.map((item,idx) => (
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
          ))
        }
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
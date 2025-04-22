import { colors } from "assets/style/variables";
import { useState } from "react";
import styled from "styled-components"

interface TabBtnsPropsType {
  isAll? : boolean;
  lang?: 'ko'|'en';
  data: string[];
  changeEvent?: ({idx,val}:{idx:number, val:string}) => void;
}
export const TabBtns = <T,>({
  isAll = true,
  lang = 'en',
  data,
  changeEvent
}:TabBtnsPropsType) => {
  const [isActive, setIsActive] = useState(isAll ? -1 : 0);

  const handleTabClick = (val:string, idx:number) =>{
    setIsActive(idx)
    changeEvent && changeEvent({idx,val})
    console.log('ㅇㅇㅇ')
  }
  console.log('tab')
  
  return (
    <StyleWrap className="tab-btns">
      <ul>
        {isAll && 
          <li className={`tab ${isActive === -1 ? 'active' :''}`}>
            <button 
              type="button" 
              onClick={() => handleTabClick('All', -1)}>
              <span>{lang === 'en' ? 'All' : '전체'}</span>
            </button>
          </li>
        }
        {data.map((item, idx) => (
          <li key={idx} className={`tab ${isActive === idx ? 'active' :''}`}>
            <button
              type="button"
              onClick={() => handleTabClick(item, idx)}>
                <span>{item}</span>
            </button>
          </li>
        ))}
      </ul>

    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  & > ul {
    display:flex;
    gap:5px;
  }
  .tab {
    & > button {
      min-width:40px;
      height:40px;
      padding:5px 10px;
      border:1px solid transparent;
      border-radius: 5px;
      transition: border-color var(--transition), background-color var(--transition), color var(--transition);
    }
    &.active {
      & > button {
        background:${colors.mSlateBlue};
        color: #fff;
      }
    }
  }
`;
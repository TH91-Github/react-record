import { colors, textColor } from "assets/style/variables";
import { SearchModule } from "components/modules/SearchModule";
import { hooksData } from "components/pages/guide/data/hooksData";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { BadgeItemUI } from "components/ui/BadgeItemUI";
import { TitleHeading } from "components/ui/TitleHeading";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { cn } from "utils/common";

export const HooksPage = () => {
  const [filterLists, setFilterLists] = useState(hooksData)

  const handleResetLists = () => {
    setFilterLists(hooksData)
  }

  const onComfirm = useCallback((val: string) => {
    const loweredVal = val.toLowerCase();
    const result = hooksData.filter((item) =>
      item.keyword.some((keyVal) => keyVal.toLowerCase() === loweredVal)
    ); 
    setFilterLists(result)
  }, [hooksData]);

  return (
    <StyleWrap className="hook">
      <GuidePageHeading />
      <div className="content-wrap">
        <TitleHeading
          $display="block"
          titleTag="h3"
          titleText={'Hook System'} 
          pointer="underline"
          $fontSize={28}
          desc={['준비 중']}
        />
        <div className="section-wrap">
          <div className="section-item search-wrap">
            <button
              type="button"
              className={cn('all-btn', filterLists.length === hooksData.length && 'active')}
              onClick={handleResetLists}
            >
              <span>전체</span>
            </button>
            <SearchModule 
              data={hooksData}
              id="hooks"
              placeholder="hook 검색해보세요"
              styleOpt={{$maxWidth:'300px'}}
              onComfirm={onComfirm}
            />
          </div>
          <div className="section-item">
            <ul className="hook-lists">
              {filterLists.map(item => (
                <li key={item.id}>
                  <BadgeItemUI
                    id={item.id}
                    tag={item.id}
                    title={item.title}
                    desc={item.desc}
                    update={item.update}
                  />
                </li> // 예시
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .search-wrap{
    display:flex;
    justify-content: space-between;
  }
  .all-btn{
    min-width:40px;
    height:40px;
    padding:5px 10px;
    border:1px solid ${colors.mSlateBlue};
    border-radius: 5px;
    transition: border-color var(--transition), background-color var(--transition), color var(--transition);
    &:hover, &:focus{
      background:${colors.mSlateBlue};
      color:#fff;
    }
    &.active {
      background:${colors.mSlateBlue};
      color:#fff;
      &:hover { 
        background:#fff;
        color:${textColor.text};
      }
    }
  }
  
  .hook-lists{
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    & > li {
      width: calc((100% - 60px) / 4);
    }
  }
`;
import { Search } from "components/modules/Search";
import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { TitleHeading } from "components/ui/TitleHeading";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


export const ComponentsPage = () => {
  const t= 'view/:id'
  console.log(t.indexOf(':id'))
  return (
    <StyleWrap>
      <GuidePageHeading />
      <div className="content-wrap">
        <TitleHeading
          $display="block"
          titleTag="h3"
          titleText={'Components System'} 
          pointer="underline"
          $fontSize={28}
          desc={['팝업, 검색, 리스트 등등 컴포넌트 모음']}
        />
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <ul>
                <li>all</li>
                <li>tab</li>
                <li>swiper</li>
                <li>popup</li>
              </ul>
            </div>
            <Search placeholder="컴포넌트를 검색해보세요"/>
          </div>
          <div className="section-item">
            <Outlet />
          </div>
        </div>
        
      </div>    
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .section-heading{
    display:flex;
  }
`;

import { useSelector } from "react-redux";

import * as S from "component/styled/common/AllStyled";
import * as SP from "component/pages/profile/styled/ProfileStyled";
import TitleBar from "component/common/TitleBar";
import BadgeList from "component/common/BadgeList";
import { TextChange } from "api/regExpChk";
import PorgressBar from "component/common/ProgressBar";


function ProfileSkils({propsData}) {
  const pSkils = propsData.skils;
  const isMobile = useSelector((state) => state.mobileChk);
  const gap = moChk(20,10);
  function moChk(t,f){
    // pc / mo 순
    return !isMobile ? t : f
  }
  return (
    <>
      <SP.Section>
        <S.BoxInner>
          <TitleBar
            fontSize="24px"
            $align="center">
            🛠️{pSkils.title}
          </TitleBar>
          <SP.SectionBox>
            <S.UlFlex $gap={gap} $size={moChk(4,2)}>
              {
                pSkils.lists.map((skilsLists, idx) => (
                  <SP.SkilsLi key={idx}>
                    <SP.SkilsBox>
                      <BadgeList badgeType={skilsLists.category} badgeTit={skilsLists.title} />
                      <PorgressBar $marginTop="10px" value={skilsLists.percent} />
                      <SP.DescUl>
                        {
                          skilsLists.desc.map((skilsDesc, idx) => (
                            <S.LiCircle key={idx}>
                              <p dangerouslySetInnerHTML={{__html: TextChange(skilsDesc) }}></p>
                            </S.LiCircle>
                          ))
                        }
                      </SP.DescUl>
                    </SP.SkilsBox>
                  </SP.SkilsLi>
                ))
              }
            </S.UlFlex>
          </SP.SectionBox>
        </S.BoxInner>
      </SP.Section>
    </>
  )
}
export default ProfileSkils;
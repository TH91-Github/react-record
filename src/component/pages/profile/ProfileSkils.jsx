import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/profile/styled/ProfileStyled";
import TitleBar from "component/common/TitleBar";
import BadgeList from "component/common/BadgeList";
import PorgressBar from "component/common/ProgressBar";

function ProfileSkils({propsOpt}) {
  const {data,titSize,isMo} = propsOpt;
  const pSkils = data.skils;
  const gap = moChk(20,10);
  function moChk(t,f){
    // pc / mo 순
    return !isMo ? t : f
  }
  return (
    <>
      <S.Section>
        <SC.BoxInner>
          <TitleBar
            $fontSize={`${titSize}px`}
            $align="center">
            🛠️{pSkils.title}
          </TitleBar>
          <S.SectionBox>
            <SC.UlFlex $gap={gap} $size={moChk(4,2)}>
              {
                pSkils.lists.map((skilsLists, idx) => (
                  <li key={idx}>
                    <S.SkilsBox>
                      <BadgeList badgeType={skilsLists.category} badgeTit={skilsLists.title} />
                      <PorgressBar $marginTop="10px" value={skilsLists.percent} />
                      <S.DescUl>
                        {
                          skilsLists.desc.map((skilsDesc, idx) => (
                            <SC.LiCircle key={idx}>
                              <p>{skilsDesc}</p>
                            </SC.LiCircle>
                          ))
                        }
                      </S.DescUl>
                    </S.SkilsBox>
                  </li>
                ))
              }
            </SC.UlFlex>
          </S.SectionBox>
        </SC.BoxInner>
      </S.Section>
    </>
  )
}
export default ProfileSkils;
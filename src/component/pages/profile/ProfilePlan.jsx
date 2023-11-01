import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/profile/styled/ProfileStyled";
import TitleBar from "component/common/TitleBar";

function ProfilePlan({propsOpt}) {
  const {data,titSize,isMo} = propsOpt;
  const pProPlan = data.plan;
  const gap = moChk(20);
  function moChk(t,f){
    t = t ?? 1;
    f = f ?? t;
    // pc / mo 순
    return !isMo ? t : f
  }
  const contMarginTop = 10;
  return (
    <>
      <S.Section>
        <SC.BoxInner>
          <TitleBar
            $fontSize={`${titSize}px`}
            $align="center">
            📚{pProPlan.title}
          </TitleBar>
          <S.SectionBox>
            <SC.UlFlex $gap={gap} $size={moChk(2,1)}>
              {
                pProPlan.lists.map((planLists,idx) => (
                  <li key={idx}>
                    <S.PlanTit><span>{planLists.title}</span></S.PlanTit>
                    <SC.BoxLine $top $marginTop={`${contMarginTop}px`}>
                      <S.DescUl>
                        {
                          planLists.desc.map((planDesc, idx) => (
                            <SC.LiCircle key={idx}>
                              <p>{planDesc}</p>
                            </SC.LiCircle>
                          ))
                        }
                      </S.DescUl>
                    </SC.BoxLine>


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
export default ProfilePlan;
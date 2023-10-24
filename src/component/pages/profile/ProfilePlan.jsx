import * as S from "component/styled/common/AllStyled";
import * as SP from "component/pages/profile/styled/ProfileStyled";
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
      <SP.Section>
        <S.BoxInner>
          <TitleBar
            $fontSize={`${titSize}px`}
            $align="center">
            📚{pProPlan.title}
          </TitleBar>
          <SP.SectionBox>
            <S.UlFlex $gap={gap} $size={moChk(2,1)}>
              {
                pProPlan.lists.map((planLists,idx) => (
                  <li key={idx}>
                    <SP.PlanTit><span>{planLists.title}</span></SP.PlanTit>
                    <S.BoxLine $top $marginTop={`${contMarginTop}px`}>
                      <SP.DescUl>
                        {
                          planLists.desc.map((planDesc, idx) => (
                            <S.LiCircle key={idx}>
                              <p>{planDesc}</p>
                            </S.LiCircle>
                          ))
                        }
                      </SP.DescUl>
                    </S.BoxLine>


                  </li>
                  
                ))
              }
            </S.UlFlex>
          </SP.SectionBox>
        </S.BoxInner>
      </SP.Section>
    </>
  )
}
export default ProfilePlan;
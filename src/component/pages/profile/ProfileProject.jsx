import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/profile/styled/ProfileStyled";
import TitleBar from "component/common/TitleBar";

function ProfileProject({propsOpt}) {
  const {data,titSize,isMo} = propsOpt;
  const pProject = data.project;
  const gap = moChk(20,10);
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
            📌{pProject.title}
          </TitleBar>
          <S.SectionBox>
            <SC.UlFlex $gap={gap} $size={moChk(2,1)}>
              {
                pProject.lists.map((projectLists, idx) => 
                  <li key={idx}>
                    <S.ProjectBox>
                      <S.ProjectTit>{projectLists.title}</S.ProjectTit>
                      <S.Company>{projectLists.company}</S.Company>
                      <S.DateBox>
                        <span className="start">{projectLists.date.start}</span>
                        <span className="end">{projectLists.date.end}</span>
                      </S.DateBox>
                      <S.MemberBox>
                        <span className="number">총 {projectLists.totalPeople}명</span>
                        <span className="participation">
                          기여도: 
                          <span className="num">{projectLists.participation}%</span>
                        </span>
                      </S.MemberBox>
                      <SC.BoxLine $top $marginTop={`${contMarginTop}px`}>
                        <S.DescUl>
                          {
                            projectLists.desc.map((projectDesc, idx) => (
                              <SC.LiCircle key={idx}>
                                <p>{projectDesc}</p>
                              </SC.LiCircle>
                            ))
                          }
                        </S.DescUl>
                        <SC.Div $marginTop={`${contMarginTop}px`}>
                          {
                            projectLists.skils.map((skilsTxt ,idx) => (
                              <S.ComaSpan key={idx}>{skilsTxt}</S.ComaSpan>
                            ))
                          }
                        </SC.Div>
                      </SC.BoxLine>
                    </S.ProjectBox>
                  </li>
                )
              }
            </SC.UlFlex>
          </S.SectionBox>
        </SC.BoxInner>
      </S.Section>
    </>
  )
}
export default ProfileProject;
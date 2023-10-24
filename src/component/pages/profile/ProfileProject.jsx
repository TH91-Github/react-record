import * as S from "component/styled/common/AllStyled";
import * as SP from "component/pages/profile/styled/ProfileStyled";
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
      <SP.Section>
        <S.BoxInner>
          <TitleBar
            $fontSize={`${titSize}px`}
            $align="center">
            📌{pProject.title}
          </TitleBar>
          <SP.SectionBox>
            <S.UlFlex $gap={gap} $size={moChk(2,1)}>
              {
                pProject.lists.map((projectLists, idx) => 
                  <li key={idx}>
                    <SP.ProjectBox>
                      <SP.ProjectTit>{projectLists.title}</SP.ProjectTit>
                      <SP.Company>{projectLists.company}</SP.Company>
                      <SP.DateBox>
                        <span className="start">{projectLists.date.start}</span>
                        <span className="end">{projectLists.date.end}</span>
                      </SP.DateBox>
                      <SP.MemberBox>
                        <span className="number">총 {projectLists.totalPeople}명</span>
                        <span className="participation">
                          기여도: 
                          <span className="num">{projectLists.participation}%</span>
                        </span>
                      </SP.MemberBox>
                      <S.BoxLine $top $marginTop={`${contMarginTop}px`}>
                        <SP.DescUl>
                          {
                            projectLists.desc.map((projectDesc, idx) => (
                              <S.LiCircle key={idx}>
                                <p>{projectDesc}</p>
                              </S.LiCircle>
                            ))
                          }
                        </SP.DescUl>
                        <S.Div $marginTop={`${contMarginTop}px`}>
                          {
                            projectLists.skils.map((skilsTxt ,idx) => (
                              <SP.ComaSpan key={idx}>{skilsTxt}</SP.ComaSpan>
                            ))
                          }
                        </S.Div>
                      </S.BoxLine>
                    </SP.ProjectBox>
                  </li>
                )
              }
            </S.UlFlex>
          </SP.SectionBox>
        </S.BoxInner>
      </SP.Section>
    </>
  )
}
export default ProfileProject;
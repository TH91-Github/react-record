import React from "react";
import * as S from "component/styled/common/AllStyled";

function BadgeList ({badgeType, badgeTit}) {
  return (
    <>
      { badgeType === 'react' && <S.ReactBadge>{badgeTit}</S.ReactBadge> }
      { badgeType === 'vue' && <S.VueBadge>{badgeTit}</S.VueBadge> }
      { badgeType === 'javascript' && <S.JSBadge>{badgeTit}</S.JSBadge> }
      { badgeType === 'jquery' && <S.JQueryBadge>{badgeTit}</S.JQueryBadge> }
      { badgeType === 'html' && <S.HTMLBadge>{badgeTit}</S.HTMLBadge> }
      { badgeType === 'css' && <S.CSSBadge>{badgeTit}</S.CSSBadge> }
      { badgeType === 'scss' && <S.SCSSBadge>{badgeTit}</S.SCSSBadge> }
      { badgeType === 'etc' && <S.EtCBadge>{badgeTit}</S.EtCBadge> } 
    </>
  )
}

export default BadgeList;
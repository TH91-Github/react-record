import * as SC from "component/styled/common/AllStyled";
import { colors, fonts, media } from 'component/styled/common/Variable';
import styled from 'styled-components';

export const ETCWrap = styled.div`
  
`;
export const ETCSearch = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  padding:30px 0;
`;
export const ETCSearchInner = styled.div`
  position:relative;
  width:300px;
`;
export const ETCLineWrap = styled(SC.LineBox)`
  padding-top:30px;
`;
const ETCListGap = 20;
export const ETCListWrap = styled(SC.DivFlex)`
  gap:${ETCListGap}px;
`;

export const ETCTitleList = styled(SC.LineTitle).attrs({
  type: 'button'
})`
  position:relative;
  max-width:300px;
  padding:15px 20px;
  text-align:left;
  span {
    display:block;
    margin:10px 0 0;
    &:first-child {
      margin:0;
    }
  }
  ${media.mo} {
    display:block;
    .title-wrap {display:block;}
  }
`;
export const ETCListText = styled(SC.TextSub)`
  margin-left:20px;
  ${media.mo} {
    margin:10px 0 0 0;
  }
`;
export const GIfBox = styled.div`
  margin-top:10px;
  img {
    width:100%;
  }
`
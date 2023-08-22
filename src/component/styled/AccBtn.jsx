import styled from 'styled-components';
import Btn from './Btn';

const AccordionBtn = styled(Btn)`
  position:relative;
  width:100%;
  text-align:left;
  border:1px solid red;
  &::before {
    display:block;
     position:absolute; 
     right:20px; 
     top:50%; 
     width:9px; 
     height:1px;
     background:#000; 
     transform:rotate(-135deg) translateY(-50%);
     content:""; 
     transition:all .3s ease-in-out;
  }
  &::after {
    display:block; 
    position:absolute; 
    right:14px; 
    top:50%;
    width:9px; 
    height:1px;
    background:#000;
    transform:rotate(135deg) translateY(-50%);
    content:"";
    transition:all .3s ease-in-out;
  }
`;

/*
.accordion_box.view .h2_tit a:before {transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg); content:"";}
.accordion_box.view .h2_tit a:after {transform:rotate(45deg);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg); content:"";}
*/

function AccBtn({children, ...props}){
  return <AccordionBtn {...props}>{children}</AccordionBtn>
}
export default AccBtn;
import styled from 'styled-components';
import Btn from 'component/styled/common/Btn';

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

function AccBtn({children, ...props}){
  return <AccordionBtn {...props}>{children}</AccordionBtn>
}
export default AccBtn;
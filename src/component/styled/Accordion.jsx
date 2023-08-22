import styled from 'styled-components';

const AccordionWrap = styled.div`
  position:relative;
`

function Accordion({children, ...props}){
  return <AccordionWrap {...props}>{children}</AccordionWrap>
}
export default Accordion;

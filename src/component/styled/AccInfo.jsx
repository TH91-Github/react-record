import styled from 'styled-components';

const AccordionInfo = styled.div`
  position:relative;
`

function AccInfo({children, ...props}){
  return <AccordionInfo {...props}>{children}</AccordionInfo>
}
export default AccInfo;

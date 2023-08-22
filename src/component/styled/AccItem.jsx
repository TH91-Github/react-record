import styled from 'styled-components';

const AccordionItem = styled.div`
  position:relative;
`

function AccItem({children, ...props}){
  return <AccordionItem {...props}>{children}</AccordionItem>
}
export default AccItem;

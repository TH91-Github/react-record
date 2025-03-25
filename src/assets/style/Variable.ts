/*
onlyPc: 1140 ~
pc: 768 ~ 
tab: 768 ~ 1139
mo: ~ 767
onlyMo: ~ 449
*/
export const breakpoints = {
  maxPc: 1920,
  pc : 1440,
  tab : 1140,
  mo : 768,
  onlyMo: 450,
}

export const media = {
  minPc:`@media screen and (min-width:${breakpoints.pc + 'px'})`,
  onlyPc : `@media screen and (min-width:${breakpoints.tab + 'px'})`,
  pc: `@media screen and (min-width:${breakpoints.mo + 'px'})`,
  tab: `@media screen and (min-width:${breakpoints.mo + 'px'}) and (max-width: ${breakpoints.tab-1 + 'px'})`,
  tabMo: `@media screen and (max-width:${breakpoints.tab-1 + 'px'})`,
  mo: `@media screen and (max-width:${breakpoints.mo-1 + 'px'})`,
  onlyMo: `@media screen and (max-width:${breakpoints.onlyMo-1 + 'px'})`,
} 

export const colors = {
  red: '#e8392c',
  green: '#0C9463',
  yellow: '#FFB000',
  black:'#050b21',
  mSlateBlue:'#6a67e5',  // medium -> m
  blue:'#395acc',
  darkNavy:"#03053a",
  text:'#42464d',
  desc:'#495057',
  subText:'#8d9095',
  lineColor: "#dbdbdb",
}
export const bgColor = {
  sideWite:'#F1F3F5',
}
export const bgOpacity = { 
  white: `background: rgba(255,255,255,.7)`,
}
export const shadow = {
  base:'box-shadow: rgba(17,19,32,0.2) 1px 1px 6px;',
  test:'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;'
}

export const ellipsisStyle = (lineClamp:number, fontSize:number) => {
  const lineHeight = fontSize ? fontSize : 20 ;
  const lineNum = lineClamp ?? 1;
  return `
    overflow: hidden;
    display:-webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lineNum};
    line-height: ${lineHeight}px;
    text-overflow: ellipsis;
    max-height: ${lineHeight * lineNum }px;
  `;
};

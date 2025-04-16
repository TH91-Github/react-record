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
  tablet : 1140,
  mo : 768,
  smallMo: 450,
}

export const media = {
  // ~ 1920
  maxPc:`@media screen and (max-width:${breakpoints.maxPc}px)`,
  // 1440 ~
  pc:`@media screen and (min-width:${breakpoints.pc}px)`,
  // 1140 ~ 1439
  smailPc : `@media screen and (min-width:${breakpoints.tablet}px) and (max-width:${breakpoints.pc-1}px)`,
  // 768 ~
  tabletPc: `@media screen and (min-width:${breakpoints.mo}px})`,
  // 768 ~ 1139
  tablet: `@media screen and (min-width:${breakpoints.mo}px) and (max-width:${breakpoints.tablet-1}px)`,
  // ~ 1139
  tabletMo: `@media screen and (max-width:${breakpoints.tablet-1}px)`,
  // ~ 767
  mo: `@media screen and (max-width:${breakpoints.mo-1}px)`,
  // ~ 450
  smallMo: `@media screen and (max-width:${breakpoints.smallMo-1}px)`
} 

export const colors = {
  red: '#e8392c',
  green: '#0C9463',
  yellow: '#FFB000',
  black:'#050b21',
  mSlateBlue:'#6a67e5',  // medium -> m
  blue:'#395acc',
  navy: '#333A73',
  darkNavy:'#03053a',
  gray:'#898a8d',
  disabled:'#e7ebee',
  lineBlack:'#111619',
  lineColor: '#dbdbdb',
}
export const textColor = {
  title:'#353844',
  text:'#42464d',
  desc:'#495057',
  subText:'#8d9095',
}
export const bgColor = {
  sideWite:'#F1F3F5',
}
export const bgOpacity = { 
  white: `rgba(255,255,255,.7)`,
}
export const bgShadow = {
  base: 'rgba(17,19,32,0.2) 1px 1px 6px;',
}

export const textShadow ={
  base:'rgb(127, 127, 127,1) 0.7px 1px 1px',
  bgBlack:'rgb(45, 45, 45, 1) 0px 1px 10px',
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

// styled-components전용 공통 
export const fonts = {
  size18:18,
  size: 16,
  size14: 14,
  size12: 12,
  weight: 550,
  bold: 600,
  font: "NanumGothic",
  fontB: "NanumGothicBold",
  fontL: "NanumGothicLight",
}

export const breakpoints = {
  maxPc: 1920,
  pc : 1440,
  table : 1140,
  mo : 768,
  onlyMo: 450,
}

export const media = {
  onlyPc : `@media screen and (min-width:${breakpoints.table + 'px'})`,
  pc: `@media screen and (min-width:${breakpoints.mo-1 + 'px'})`,
  tab: `@media screen and (min-width:${breakpoints.mo + 'px'}) and (max-width: ${breakpoints.table-1 + 'px'})`,
  mo: `@media screen and (max-width:${breakpoints.mo-1 + 'px'})`,
  onlyMo: `@media screen and (max-width:${breakpoints.onlyMo-1 + 'px'})`,
} 

export const colors = {
  // Color 
  baseWhite: "#ffffff",
  baseBlack: "#000000",
  subBlack: "#222222",
  // point
  green:"#3cb062",
  yellow:"#f5b800",
  blue:"#685ef8",
  red:"#e8392c",
  // bg Color 
  bgGreen: "#113536",
  bgWhite: "#f8f9fc",
  // Text Color
  textColor:"#191f28",
  subTextColor:"#868686",
  // Line Color
  lineColor:"#dbdbdb",
}

// transition
export const transitions = {
  base: "all .3s",
}

export const animaion = {
  fadeIn : `fadeIn 2s ease both`
}
export const keyFrames = {
  fadeIn : `@keyframes fadeIn { 0%{opacity:0; transform:translateY(50px);} 100%{opacity:1; transform:translateY(0)} }`
}




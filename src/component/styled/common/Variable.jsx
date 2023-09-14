// assets/scss/var 동일하게.

// styled-components전용 공통 
export const fonts = {
  size : "16px",
  weight: "550",
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
export const colors = {
  // Color 
  whiteColor: "#ffffff",
  blackColor: "#000000",
  subBlack: "#222222",
  // point
  color1:"#3cb062",
  color2:"#f5b800",
  color3:"#685ef8",
  color4:"#e76647",
  // bg Color 
  bgColor1: "#113536",
  titBgColor: "#f8f9fc",
  // Text Color
  textColor:"#191f28",
  subTextColor:"#868686",
  // Line Color
  lineColor:"#dbdbdb",
}

export const media = {
  onlyPc : `@media screen and (min-width:${breakpoints.table + 'px'})`,
  pc: `@media screen and (min-width:${breakpoints.mo-1 + 'px'})`,
  tab: `@media screen and (min-width:${breakpoints.mo + 'px'}) and (max-width: ${breakpoints.table-1 + 'px'})`,
  mo: `@media screen and (max-width:${breakpoints.mo-1 + 'px'})`,
  onlyMo: `@media screen and (max-width:${breakpoints.onlyMo-1 + 'px'})`,
} 


// transition
export const transition = {
  base: "all .3s",
}

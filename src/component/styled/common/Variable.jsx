// assets/scss/var 동일하게.

// styled-components전용 공통 
export const font = {
  size : "16px",
  weight: "550",
}

export const breakpoints = {
  maxPc: 1920,
  pc : 1440,
  table : 1080,
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
  whiteColor: "#ffffff",
  blackColor: "#000000",
  subBlack: "#222222",
  
  // point
  color1:"#3cb062",
  color2:"#f5b800",
  color3:"#685ef8",
  color4:"#e76647",

  // bg Color 
  $bgColor: "#113536",

  // Text Color
  textColor:"#191f28",
  subTextColor:"#868686",

  // Line Color
  lineColor:"#dbdbdb",
}
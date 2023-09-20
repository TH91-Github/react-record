const { breakpoints } = require("component/styled/common/Variable");


export const isMobile = () => { // 모바일 사이즈 체크
  const wininnW = window.innerWidth;
  const scrollbarW = parseInt(wininnW - document.body.clientWidth);
  const winW = parseInt(wininnW - scrollbarW);
  let moChk = false;
  breakpoints.mo <= winW ? moChk = false
  : moChk = true;
  return moChk;
}

export const ranDom = (_max, name) => { // 랜덤 값 (최대 값, 이름지정_랜덤 값) 
  let newId =  Math.floor(_max === undefined
    ? Math.random() * 2000
    : Math.random() * Number(_max + 1)
  );
  if(name !== undefined ) newId = `${name}_${newId}`;
  return newId;
}


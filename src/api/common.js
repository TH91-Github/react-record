const { breakpoints } = require("component/styled/common/Variable");

export const breakPointsStyle =  (pcVal, moVal) => {
  
}

export const ranDom = (_max, name) => { // 랜덤 값 (최대 값, 이름지정_랜덤 값) 
  let newId =  Math.floor(_max === undefined
    ? Math.random() * 2000
    : Math.random() * Number(_max + 1)
  );
  if(name !== undefined ) newId = `${name}_${newId}`;
  return newId;
}

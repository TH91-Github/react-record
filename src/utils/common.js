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

// const scrollEvent = () => { // scroll *공통 빼야하는 요소 2

// }

export function ranDomId(listData, name){ // id 랜덤으로 생성
  const firstName = name ?? "random"
  let listIdData = listData.map((item)=> {
    const idOption = { id : ranDom(9999, firstName)}
    return item.id === undefined ? {...idOption, ...item} : item
  })
  return listIdData; 
}

export const ranDom = (_max, name) => { // 랜덤 값 (최대 값, 이름지정_랜덤 값) 
  let newId =  Math.floor(_max === undefined
    ? Math.random() * 2000
    : Math.random() * Number(_max + 1)
  );
  if(name !== undefined ) newId = `${name}_${newId}`;
  return newId;
}


export function TextBr (text) {  // br 태그 삽입
  if(!text) return;
  const brTag ="<br />";
  // 변경 값을 \n 으로 하고 css : white-spase: pre-wrap; 사용 가능
  const brChange = text.replaceAll(/(<br>|<br\/>|<br \/>|<\/br>|\r|\n)/gi, brTag).split(brTag);
  const newBr = brChange.filter(item => item.length > 0); // 공백 배열 요소 제거
  return newBr.reduce((prevText, currentText) => {
    return <>{prevText} <br />{currentText.trim()}</>
  })
}
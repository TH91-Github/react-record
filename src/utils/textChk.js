export const regExpChk = (val) => {
  //eslint-disable-next-line
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi; // 띄어쓰기 허용 /[ \
  if(regExp.test(val)){
    alert("특수문자를 입력할 수 없습니다")
    val = val.substring( 0 , val.length - 1 );
  }
  return val;
}

// 첫 글자 대소문자 변경
export const TextCase = (text) => {
  let val = text.charAt(0);
  // 첫 글자 기준 대/소문자 구별하여 변환
  val === val.toUpperCase()
  ? val = val.toLowerCase()
  : val = val.toUpperCase()

  return val + text.slice(1)
}


// etc 
export const TextChange = (text) => {
  if(!text) return;
  let textLine = text.replaceAll(/\n/g, "<br />");
  let resultText = textLine.replaceAll("className","class");
  return resultText;
}

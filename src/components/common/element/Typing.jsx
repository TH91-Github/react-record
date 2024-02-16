import { useMemo, useState } from "react";

function Typing({typingData, delay, inputS, removeS, pauseTime, infinite, completion}) { // 텍스트, 입력 속도, 삭제 속도, 삭제되기까지, 반복
  const [once, setOnce] = useState(true);
  const [text, setText] = useState('');
  const textData = useMemo(()=>{
    return typingData ?? ['']
  },[typingData]) 

  const typingOpt = { 
    s : inputS ?? 100, // 입력 속도
    r : removeS ?? 100, // 삭제 속도
    d : pauseTime ?? 500 , // 입력 후 삭제까지 시간
    i : infinite ?? false
  }
  let tNum = 0; // 텍스트 번호
  let arrLength = 0; // 문장 라인 번호  

  const textInput = () => { // 글자 하나씩 입력
    if(tNum < textData[arrLength].length){
      const pushTxt = textData[arrLength].charAt(tNum);
      setText(prev => prev += pushTxt);
      tNum++;
      setTimeout(()=>{
        textInput();
      },typingOpt.s);
    }else{
      typingOpt.i || arrLength < textData.length-1
      ?  setTimeout(()=>{
          textRemove()
        },typingOpt.d)
      : finish()
    }
  } 
  const textRemove = () => { // 글자 하나씩 삭제
    const removeTxt = textData[arrLength].slice(0,tNum);
    if(tNum >= 0) {
      setText(removeTxt)
      tNum--;
      setTimeout(()=>{
        textRemove();
      },typingOpt.r);
    }else{
      nextChk();
    }
  }
  const nextChk = () => { // 다음 문장이 있는지 체크 
    if(arrLength < textData.length-1){
      arrLength++;
      textInput();
    }else{
      if(typingOpt.i){
        arrLength = 0;
        textInput();
      }else{
        finish();
      }
    }
  }
  const finish = () => {
    completion && completion();
  }
  const ini = () =>{
    setOnce(false);
    text.length>0 && setText('');
    setTimeout(()=>{
      textInput();
    },delay ?? 50);
  }
  once && ini();
  return( 
    <>
      {text}
    </>
  )
}
export default Typing;
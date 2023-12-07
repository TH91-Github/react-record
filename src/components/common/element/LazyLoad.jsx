import { useEffect, useRef } from "react";


function LazyLoad ({children, onClass}) { // lazyload El , className 
  const el = useRef(null);

  // 추가 옵션은 제작 하면서 조건 및 추가.

  const updateObserver = (entries, observer) => {
    entries.forEach((entry) => {
      // 교차 지점에 들어오면
      if (entry.isIntersecting) {          
        // console.log(entry.target);         // 해당 컴포넌트를 콘솔로 찍어봄
        //observer.unobserve(entry.target);  // 관찰을 끊는다.
      }
      entry.target.classList.toggle(onClass ? onClass : 'on', entry.isIntersecting);
    });
  }

  useEffect(() => {
    let observer;
    if (el.current) {
      const lazloadEl = [...el.current.children]; // lazyLoad 목록
      observer = new IntersectionObserver((updateObserver),{
        // 옵션 입력 
        threshold: 0.3 //30% 보였을 경우 실행
      });
      lazloadEl.forEach(item => {
        observer.observe(item);
      });  
    }
    return () => { // clean up function
      observer && observer.disconnect()
    }
  },[])
  return (
    <div ref={el}>
      {children}
    </div>
  )
}

export default LazyLoad;
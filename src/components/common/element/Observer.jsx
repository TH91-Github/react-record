import { useCallback, useEffect, useRef } from "react";

function Observer ({children, onClass, maintenance}) { // lazyload El , className , 관찰여부
  const el = useRef(null);
  const updateObserver = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(onClass ? onClass : 'on', entry.isIntersecting);
      if (entry.isIntersecting) { // 교차 상태인지    
        // maintenance 👉 false 경우 observer 끊기
        !(maintenance ?? true) && observer.unobserve(entry.target)
      }
    });
  },[onClass,maintenance]);
  useEffect(() => {
    let observer;
    if (el.current) {
      const lazloadEl = [...el.current.children]; // lazyLoad 목록
      observer = new IntersectionObserver((updateObserver),{
        // 옵션 입력 
        threshold: 0.1 // 20% 보였을 경우 실행
      });
      lazloadEl.forEach(item => {
        observer.observe(item);
      });  
    }
    return () => { // clean up function
      observer && observer.disconnect()
    }
  },[updateObserver])
  return (
    <div ref={el}>
      {children}
    </div>
  )
}

export default Observer;
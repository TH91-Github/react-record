import { useToast } from "hooks/useToast";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const Toast = () => {
  const { toasts } = useToast();
  // const [toasts, setToasts] = useState<ToastItem[]>([]);
  // const toastRef = useRef<ToastItem[]>([]);

  // const addToast = () => {
  //   const id = toastId++;
  //   const newToast: ToastItem = { id, visible: true };

  //   toastRef.current = [...toastRef.current, newToast];
  //   setToasts(toastRef.current);

  //   // 2초 후 사라지게
  //   setTimeout(() => {
  //     toastRef.current = toastRef.current.map((t) =>
  //       t.id === id ? { ...t, visible: false } : t
  //     );
  //     setToasts([...toastRef.current]);

  //     setTimeout(() => {
  //       toastRef.current = toastRef.current.filter((t) => t.id !== id);
  //       setToasts([...toastRef.current]);
  //     }, 500);
  //   }, 2000);
  // };

  console.log(toasts)
  return( 
    createPortal(
      <StyleWrap className="toast test">
        {toasts.map(({ id, visible }) => (
          <div key={id} className={`toast ${visible ? 'show' : 'hide'}`}>
            복사 완료! + {id}
          </div>
        ))}
      </StyleWrap>,
      document.body
    )
  )
}

const StyleWrap = styled.div`
position: fixed; 
bottom:0;
left:50%;

.toast-container {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.toast {
  background: #333;
  color: #fff;
  padding: 8px 16px;
  margin-top: 6px;
  border-radius: 8px;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.toast.hide {
  opacity: 0;
  transform: translateY(20px);
}

`;
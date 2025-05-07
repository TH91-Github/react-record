import { PopupViewPage } from "pages/guide/components/view/PopupViewPage";
import { useEffect, useMemo } from "react";
import { NotViewComponent } from "./NotViewComponent";

interface LoadViewPropsType {
  id: string;
  onNotFound?: () => void;
}

export const LoadView = ({id, onNotFound}:LoadViewPropsType) => {
  // ✅ 일치하는 컴포넌트 로드 
  const componentLoad: { [key: string]: React.ReactNode } = useMemo(() => ({
    popup: <PopupViewPage />,
  }), []);

  // 일치하지 않는 경우 NotView 컴포넌트 
  const resultComponent = componentLoad[id] || <NotViewComponent />;

  useEffect(() => {
    if (!componentLoad[id] && onNotFound) {
      onNotFound();
    }
  }, [id, componentLoad, onNotFound]);

  return <>{resultComponent}</>;
}

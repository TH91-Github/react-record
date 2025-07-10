import { ModalViewPage } from "pages/guide/components/view/ModalViewPage";
import { useEffect, useMemo } from "react";
import { NotViewComponent } from "./NotViewComponent";
import { TabButtonViewPage } from "pages/guide/components/view/TabButtonViewPage";
import { CarouselViewPage } from "pages/guide/components/view/CarouselViewPage";
import { ToastViewPage } from "pages/guide/components/view/ToastViewPage";
import { AccordionViewPage } from "pages/guide/components/view/AccordionViewPage";

interface LoadViewPropsType {
  id: string;
  onNotFound?: () => void;
}

export const LoadView = ({id, onNotFound}:LoadViewPropsType) => {
  // ✅ 일치하는 컴포넌트 로드 
  const componentLoad: { [key: string]: React.ReactNode } = useMemo(() => ({
    modal: <ModalViewPage />,
    toast: <ToastViewPage />,
    carousel: <CarouselViewPage />,
    'tab-button': <TabButtonViewPage />,
    accordion: <AccordionViewPage />,
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

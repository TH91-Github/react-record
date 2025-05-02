import { PopupViewPage } from "pages/guide/components/view/PopupViewPage";
import { useEffect, useMemo } from "react";
import { NotViewComponent } from "./NotViewComponent";

interface LoadViewPropsType {
  id: string;
  onNotFound?: () => void;
}

export const LoadView = ({id, onNotFound}:LoadViewPropsType) => {
  const componentLoad: { [key: string]: React.ReactNode } = useMemo(() => ({
    popup: <PopupViewPage />,
  }), []);

  const resultComponent = componentLoad[id] || <NotViewComponent />;

  useEffect(() => {
    if (!componentLoad[id] && onNotFound) {
      onNotFound();
    }
  }, [id, componentLoad, onNotFound]);

  return <>{resultComponent}</>;
}

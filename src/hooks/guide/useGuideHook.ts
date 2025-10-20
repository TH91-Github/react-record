// 📍 guide에서만 사용하는 hook

import { useLocationPath } from "hooks/useLocationPath";
import { useMatchItem } from "hooks/useMatchItem";
import { GUIDE_LIST } from "routes/pages/guide/GuideRouter";

export const useGuideLocation = () => {
  const { locationItem, currentPath } = useLocationPath(GUIDE_LIST, 'id');
  const { matchItem } = useMatchItem({
    data: locationItem?.children ?? [],
    idKey: 'id',
    findVal: currentPath
  });
  // 🔽 data : {...} or undefined 
  return { locationData: locationItem, guideData : matchItem};
};

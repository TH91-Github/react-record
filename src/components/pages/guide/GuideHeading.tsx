import { formatText } from "utils/character";

interface GuideHeadingPropsType {
  category: string;
  children?: React.ReactNode;
}
export const GuideHeading = ({category, children}:GuideHeadingPropsType) => {

  return (
    <div className="headding">
      <h2 className="name-tag">{formatText(category)}</h2>
      {children && children}
    </div>
  )
}

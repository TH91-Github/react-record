interface GuideHeadingPropsType {
  category: string;
  children?: React.ReactNode;
}
export const GuideHeading = ({category, children}:GuideHeadingPropsType) => {
  return (
    <div className="headding">
      <h2 className="name-tag">{category}</h2>
      {children && children}
    </div>
  )
}

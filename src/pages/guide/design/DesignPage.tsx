import { GuidePageHeading } from "components/pages/guide/GuidePageHeading";
import { Outlet } from "react-router-dom";

export const DesignPage = () => {

  return (
    <div className="design-guide">
      <GuidePageHeading />
      <div className="content-wrap">
        <Outlet />  
      </div>    
    </div>
  )
}
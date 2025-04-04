import { GuideHeading } from "components/pages/guide/GuideHeading";
import { Outlet } from "react-router-dom";

export const DesignPage = () => {

  return (
    <div className="design-guide">
      <GuideHeading />
      <div className="content-wrap">
        <Outlet />  
      </div>    
    </div>
  )
}
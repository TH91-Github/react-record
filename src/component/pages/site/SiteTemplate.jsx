import { Outlet } from "react-router-dom";

function SiteTemplate(){
  return (
    <div className="site">
      SiteTemplate
      <Outlet />
    </div>
  )
}


export default SiteTemplate;
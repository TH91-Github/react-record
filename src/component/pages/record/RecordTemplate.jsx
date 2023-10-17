import { Outlet } from "react-router-dom";

// scss
import "assets/scss/components/Record.scss";

function RecordTemplate () {
  return (
    <div className="record">
      <Outlet />
    </div>
  )
}
export default RecordTemplate;
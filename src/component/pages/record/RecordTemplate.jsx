import { Outlet } from "react-router-dom";

// scss
import "assets/scss/components/Record.scss";

// record router data 저장 후 props 또는 store 계획.

function RecordTemplate () {
  return (
    <div className="record">
      <Outlet />
    </div>
  )
}
export default RecordTemplate;
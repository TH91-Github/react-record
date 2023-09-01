import { Outlet } from "react-router-dom";

import "../../../assets/components/Record.scss";

function RecordTemplate () {
  return (
    <div className="record">
      <Outlet />
    </div>
  )
}
export default RecordTemplate;
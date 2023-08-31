import { Outlet } from "react-router-dom";

function RecordTemplate () {
  return (
    <div className="record">
      <Outlet />
    </div>
  )
}
export default RecordTemplate;
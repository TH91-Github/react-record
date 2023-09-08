import { Outlet } from "react-router-dom";

import Ing from "component/common/Ing";

// scss
import "assets/scss/components/Record.scss";


function RecordTemplate () {
  return (
    <div className="record">
      <Ing>⚠️작업중🚧</Ing>
      <Outlet />
    </div>
  )
}
export default RecordTemplate;
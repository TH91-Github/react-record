import { Outlet } from "react-router-dom";

import Ing from "component/styled/common/Ing";

// scss
import "assets/scss/components/Record.scss";


function RecordTemplate () {
  return (
    <div className="record">
      <Outlet />
      <Ing>⚠️작업중🚧</Ing>
    </div>
  )
}
export default RecordTemplate;
import { guideStyle } from "assets/style/guide/guideStyle";
import { GuideHeading } from "components/pages/guide/GuideHeading";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

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
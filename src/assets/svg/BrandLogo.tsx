import React from "react";
import { SvgPropsType } from "./Common";

// magnifying-glass, 검색
export const SvgTistory = React.memo(({$fill='currentColor'}:SvgPropsType) => (
  <svg viewBox="0 0 24 24" fill={$fill}>
    <path d="M0 3a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0-9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m9 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/>
  </svg>
));
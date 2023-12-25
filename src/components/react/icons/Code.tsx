import * as React from "react";
import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="code_svg__feather code_svg__feather-code"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgCode);
export default ForwardRef;

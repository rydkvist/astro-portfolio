import * as React from "react";
import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="user_svg__feather user_svg__feather-user"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx={12} cy={7} r={4} />
  </svg>
);
const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;

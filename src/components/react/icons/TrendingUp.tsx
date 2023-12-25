import * as React from "react";
import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";
const SvgTrendingUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="trending-up_svg__feather trending-up_svg__feather-trending-up"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="m23 6-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrendingUp);
export default ForwardRef;

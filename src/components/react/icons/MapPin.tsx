import * as React from "react";
import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";
const SvgMapPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="map-pin_svg__feather map-pin_svg__feather-map-pin"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0" />
    <circle cx={12} cy={10} r={3} />
  </svg>
);
const ForwardRef = forwardRef(SvgMapPin);
export default ForwardRef;

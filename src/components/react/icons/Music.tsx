import * as React from "react";
import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="music_svg__feather music_svg__feather-music"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx={6} cy={18} r={3} />
    <circle cx={18} cy={16} r={3} />
  </svg>
);
const ForwardRef = forwardRef(SvgMusic);
export default ForwardRef;

import * as React from "react";
import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="check_svg__feather check_svg__feather-check" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20 6 9 17l-5-5" /></svg>;
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;
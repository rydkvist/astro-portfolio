import React from "react";
import * as Icons from "./icons";

type WithoutIconSufix<T> = T extends `${infer P}Icon` ? P : never;
export type IconName = WithoutIconSufix<keyof typeof Icons>;

export interface IconProps extends Omit<React.SVGProps<SVGElement>, "ref"> {
  name: IconName;
  size?: number;
  title?: string;
  color?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
  { name, size = 20, color, title = name, ...props },
  forwardedRef,
) {
  const iconName = `${name}Icon` as const;
  const Component = Icons[iconName];

  if (!Component) {
    if (import.meta.env.DEV) {
      throw new Error(`Unknown icon "${iconName}"`);
    } else {
      return null;
    }
  }

  return (
    <Component
      ref={forwardedRef}
      width={size}
      height={size}
      color={color}
      name={title}
      {...props}
    />
  );
});

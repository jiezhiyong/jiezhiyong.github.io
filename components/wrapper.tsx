import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  classnames?: string;
};

export function Wrapper({ children, classnames }: Props) {
  return (
    <div className={twMerge(classnames, "relative mx-auto max-w-[89rem] px-4")}>
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function PageContainer({
  children,
  className,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

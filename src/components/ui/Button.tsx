import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-zinc-200 shadow-[0_0_30px_rgba(255,255,255,0.12)]",
  secondary:
    "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]",
  ghost: "text-white/70 hover:bg-white/[0.06] hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const buttonVariants = ({ variant = "default", size = "default", className = "" }: any) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";
  
  const variants: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md",
    destructive: "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-200",
    outline: "border border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 shadow-sm",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-500",
    link: "text-blue-600 underline-offset-4 hover:underline",
  };

  const sizes: Record<string, string> = {
    default: "h-11 px-5 py-2",
    sm: "h-9 rounded-md px-3 text-xs",
    lg: "h-12 rounded-xl px-8 text-base",
    icon: "h-10 w-10 rounded-full",
  };

  return cn(baseStyles, variants[variant], sizes[size], className);
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

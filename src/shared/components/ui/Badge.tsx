import * as React from "react";
import { cn } from "@/lib/utils";
import { tokens } from "@/shared/styles/tokens";
import type { MoneyDirection } from "@/shared/utils/moneyDirection";

export type BadgeVariant = "indigo" | "purple" | "success" | "warning" | "danger" | "neutral";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
}

// Single place every list page's status/type pill should go through - see
// src/shared/styles/tokens.ts:badge for the color source. Before this existed the
// app had 15 independent inline implementations of the same pill.
export function Badge({ variant = "neutral", icon, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1 whitespace-nowrap", tokens.badge[variant], className)}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}

const directionToVariant: Record<MoneyDirection, BadgeVariant> = {
  in: "success",
  out: "danger",
};

/** Badge pre-wired to the green-in/red-out convention - see shared/utils/moneyDirection.ts. */
export function DirectionBadge({ direction, children, ...props }: Omit<BadgeProps, "variant"> & { direction: MoneyDirection }) {
  return (
    <Badge variant={directionToVariant[direction]} {...props}>
      {children}
    </Badge>
  );
}

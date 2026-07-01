"use client";

import { useReveal } from "@/hooks/useReveal";
import type { ElementType, ReactNode } from "react";

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  const { ref } = useReveal<HTMLDivElement>();

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

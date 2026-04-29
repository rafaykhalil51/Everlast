"use client";

import { ReactNode } from "react";

export default function Marquee({
  children,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
        style={{ minWidth: "200%" }}
      >
        <div className="flex items-center gap-16 pr-16">{children}</div>
        <div className="flex items-center gap-16 pr-16" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

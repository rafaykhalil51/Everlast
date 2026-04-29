"use client";

import { CountUp } from "countup.js";
import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export default function Counter({
  end,
  duration = 2.4,
  suffix = "",
  prefix = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started || !ref.current) return;
    const el = ref.current;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const inst = new CountUp(el, end, {
              duration,
              suffix,
              prefix,
              useEasing: true,
              useGrouping: true,
            });
            if (!inst.error) inst.start();
            setStarted(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration, suffix, prefix, started]);

  return <span ref={ref} className={className}>0</span>;
}

"use client";

import { motion, type Variants } from "framer-motion";
import { stagger, wordReveal } from "@/lib/animations";
import { ReactNode } from "react";

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  children?: ReactNode;
};

export default function AnimatedText({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  as = "h2",
}: Props) {
  const Tag = motion[as] as typeof motion.h2;
  const words = text.split(" ");
  const containerVariants: Variants = stagger(delay);

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={containerVariants}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`inline-block overflow-hidden align-baseline ${wordClassName}`}
        >
          <motion.span
            variants={wordReveal}
            className="inline-block will-change-transform"
          >
            {word}
            {i < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

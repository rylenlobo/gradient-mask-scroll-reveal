"use client";
import React, { useRef, ReactElement, isValidElement } from "react";
import { useScroll } from "motion/react";
import type { ItemProps } from "./gradient-lines-filter";

interface GradientLinesContainerProps {
  children: ReactElement<ItemProps> | ReactElement<ItemProps>[];
}

export default function GradientLinesContainer({
  children
}: GradientLinesContainerProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const breakpoint = 1 / React.Children.count(children);

  return (
    <div ref={ref} className="relative h-[600dvh]">
      <div className="sticky top-0 h-dvh overflow-hidden">
        {React.Children.map(children, (child) => {
          if (isValidElement(child)) {
            return React.cloneElement(child, {
              scrollYProgress,
              breakpoint
            });
          }
          return child;
        })}
      </div>
    </div>
  );
}

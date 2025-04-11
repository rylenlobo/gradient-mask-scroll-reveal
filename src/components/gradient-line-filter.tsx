"use client";

import { easeIn } from "motion";
import {
  cubicBezier,
  MotionValue,
  useMotionValueEvent,
  useTransform
} from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface ItemProps {
  imgSrc: string;
  index: number;
  breakpoint: number;
  scrollYProgess: MotionValue<number>;
}

export default function Item({
  imgSrc,
  index,
  breakpoint,
  scrollYProgess
}: ItemProps) {
  const [progress, setProgress] = useState<number>(0);

  const start = index * breakpoint;
  const end = (index + 1) * breakpoint;

  const easedProgress = useTransform(scrollYProgess, [start, end], [0, 1], {
    ease: cubicBezier(0.65, 0.05, 0.25, 1.0)
  });

  useMotionValueEvent(easedProgress, "change", (latest) => {
    setProgress(latest);
  });

  const maskTemplate = `linear-gradient(-90deg,
  black 0% ${3.33 * progress}%,
  transparent ${3.33 * progress}% 3.33%,
  black 3.33% ${6.66 * progress}%,
  transparent ${6.66 * progress}% 6.66%,
  black 6.66% ${10 * progress}%,
  transparent ${10 * progress}% 10%,
  black 10% ${13.33 * progress}%,
  transparent ${13.33 * progress}% 13.33%,
  black 13.33% ${16.66 * progress}%,
  transparent ${16.66 * progress}% 16.66%,
  black 16.66% ${20 * progress}%,
  transparent ${20 * progress}% 20%,
  black 20% ${23.33 * progress}%,
  transparent ${23.33 * progress}% 23.33%,
  black 23.33% ${26.66 * progress}%,
  transparent ${26.66 * progress}% 26.66%,
  black 26.66% ${30 * progress}%,
  transparent ${30 * progress}% 30%,
  black 30% ${33.33 * progress}%,
  transparent ${33.33 * progress}% 33.33%,
  black 33.33% ${36.66 * progress}%,
  transparent ${36.66 * progress}% 36.66%,
  black 36.66% ${40 * progress}%,
  transparent ${40 * progress}% 40%,
  black 40% ${43.33 * progress}%,
  transparent ${43.33 * progress}% 43.33%,
  black 43.33% ${46.66 * progress}%,
  transparent ${46.66 * progress}% 46.66%,
  black 46.66% ${50 * progress}%,
  transparent ${50 * progress}% 50%,
  black 50% ${53.33 * progress}%,
  transparent ${53.33 * progress}% 53.33%,
  black 53.33% ${56.66 * progress}%,
  transparent ${56.66 * progress}% 56.66%,
  black 56.66% ${60 * progress}%,
  transparent ${60 * progress}% 60%,
  black 60% ${63.33 * progress}%,
  transparent ${63.33 * progress}% 63.33%,
  black 63.33% ${66.66 * progress}%,
  transparent ${66.66 * progress}% 66.66%,
  black 66.66% ${70 * progress}%,
  transparent ${70 * progress}% 70%,
  black 70% ${73.33 * progress}%,
  transparent ${73.33 * progress}% 73.33%,
  black 73.33% ${76.66 * progress}%,
  transparent ${76.66 * progress}% 76.66%,
  black 76.66% ${80 * progress}%,
  transparent ${80 * progress}% 80%,
  black 80% ${83.33 * progress}%,
  transparent ${83.33 * progress}% 83.33%,
  black 83.33% ${86.66 * progress}%,
  transparent ${86.66 * progress}% 86.66%,
  black 86.66% ${90 * progress}%,
  transparent ${90 * progress}% 90%,
  black 90% ${93.33 * progress}%,
  transparent ${93.33 * progress}% 93.33%,
  black 93.33% ${96.66 * progress}%,
  transparent ${96.66 * progress}% 96.66%,
  black 96.66% ${100 * progress}%,
  transparent ${100 * progress}% 100%
)`;

  return (
    <div
      className="absolute inset-0 h-dvh bg-neutral-950"
      style={{
        WebkitMaskImage: index === 0 ? "none" : maskTemplate,
        maskImage: index === 0 ? "none" : maskTemplate,
        zIndex: index + 1
      }}
    >
      <Image
        className="w-full h-full object-cover  lg:p-5 "
        src={imgSrc}
        alt={`Image ${index}`}
        fill
      />
    </div>
  );
}

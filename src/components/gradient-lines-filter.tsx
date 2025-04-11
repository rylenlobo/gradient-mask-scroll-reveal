import {
  cubicBezier,
  MotionValue,
  useMotionValueEvent,
  useTransform,
  motion,
  useSpring,
  easeInOut
} from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface ItemProps {
  imgSrc: string;
  index: number;
  breakpoint: number;
  scrollYProgess: MotionValue<number>;
}

function generateMask(progress: number, stripeCount = 20) {
  const stripeHeight = 100 / stripeCount;
  const overlap = 0.4; // 0.0 = no overlap, 1.0 = full overlap
  const segments: string[] = [];

  for (let i = 0; i < stripeCount; i++) {
    const start = i * stripeHeight;

    // Each stripe starts a bit later and ends a bit later
    const delay = (1 - overlap) * (i / stripeCount);
    const stripeProgress = (progress - delay) / overlap;

    // Clamp between 0 and 1
    const clampedProgress = Math.max(0, Math.min(1, stripeProgress));
    const end = start + stripeHeight * clampedProgress;

    segments.push(
      `black ${start.toFixed(2)}% ${end.toFixed(2)}%`,
      `transparent ${end.toFixed(2)}% ${(start + stripeHeight).toFixed(2)}%`
    );
  }

  return `linear-gradient(0deg, ${segments.join(", ")})`;
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
    ease: easeInOut
  });

  const scale = useTransform(scrollYProgess, [0, 1], [1.2, 1], {
    ease: easeInOut
  });

  useMotionValueEvent(easedProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <motion.div
      className="absolute inset-0 h-dvh bg-neutral-950 overflow-hidden"
      style={{
        WebkitMaskImage: index === 0 ? "none" : generateMask(progress),
        maskImage: index === 0 ? "none" : generateMask(progress),
        zIndex: index + 1,
        scale
      }}
    >
      <Image
        className="w-full h-full object-cover"
        src={imgSrc}
        alt={`Image ${index}`}
        fill
      />
    </motion.div>
  );
}

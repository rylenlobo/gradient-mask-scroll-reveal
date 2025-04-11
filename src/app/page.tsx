"use client";

import Item from "@/components/gradient-line-filter";
import { useScroll, useTransform } from "motion/react";

import { useRef } from "react";

const source = [
  {
    img: "/img-1.jpg"
  },
  {
    img: "/img-4.jpg"
  }
];

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress: scroll } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const transformedScroll = useTransform(scroll, [0, 1], [1, 0]);

  return (
    <section>
      <div className="h-dvh bg-neutral-950" />
      <div ref={ref} className="relative min-h-[300dvh] ">
        <div className="sticky top-0 h-dvh">
          {source.map((item, index) => (
            <Item
              key={index}
              breakpoint={1 / source.length}
              scrollYProgess={scroll}
              imgSrc={item.img}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="h-dvh bg-neutral-950" />
    </section>
  );
}

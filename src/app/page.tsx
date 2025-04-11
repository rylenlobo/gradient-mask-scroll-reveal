"use client";

import Item from "@/components/gradient-lines-filter";
import { useScroll } from "motion/react";

import { useRef } from "react";

const source = [
  {
    id: 1,
    img: "/img-1.jpg"
  },
  {
    id: 2,
    img: "/img-2.jpg"
  },
  {
    id: 3,
    img: "/img-3.jpg"
  },
  {
    id: 4,
    img: "/img-4.jpg"
  }
];

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress: scroll } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <section>
      <div className="h-dvh bg-neutral-950" />
      <div ref={ref} className="relative h-[300dvh] ">
        <div className="sticky top-0 h-dvh overflow-hidden">
          {source.map((item, index) => (
            <Item
              key={item.id}
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

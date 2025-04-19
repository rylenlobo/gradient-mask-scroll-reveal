import GradientLinesContainer from "@/components/gradient-lines-container";
import GradientLineItem from "@/components/gradient-lines-filter";

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
  return (
    <section>
      <div className="h-dvh bg-neutral-950" />

      <GradientLinesContainer>
        {source.map((item, index) => (
          <GradientLineItem key={item.id} index={index} img={item.img} />
        ))}
      </GradientLinesContainer>

      <div className="h-dvh bg-neutral-950" />
    </section>
  );
}

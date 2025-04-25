"use client";
import ShinyText from "@/components/animated/ShinyText";
import GradientLinesContainer from "@/components/gradient-scroll-transition/gradient-lines-container";
import GradientLineItem from "@/components/gradient-scroll-transition/gradient-lines-filter";
import { CircleChevronDown, Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const source = [
  {
    id: 1,
    img: "/images/img-1.jpg"
  },

  {
    id: 2,
    img: "/images/img-2.jpg"
  },

  {
    id: 3,
    img: "/images/img-3.jpg"
  },
  {
    id: 4,
    img: "/images/img-4.jpg"
  },
  {
    id: 5,
    img: "/images/img-5.jpg"
  }
];

export default function Home() {
  return (
    <>
      {/* Section - 1 */}
      <section className="relative h-dvh overflow-hidden">
        {/* Video */}
        <motion.div
          className="mask-b-from-5% absolute inset-0 z-30 will-change-transform"
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: "tween",
            ease: "easeOut"
          }}
        >
          <video
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
            autoPlay
          >
            <source
              src="https://res.cloudinary.com/dybm2eah3/video/upload/v1745561797/Japan/Japan-mobile_ediohm.mp4"
              type="video/mp4"
              media="(max-width: 640px)"
            />
            <source
              src="https://res.cloudinary.com/dybm2eah3/video/upload/v1745561864/Japan/Japan-laptop_u7vric.mp4"
              type="video/mp4"
              media="(min-width: 1025px)"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <div className=" md:px-8 md:pr-3.5 pb-16  md:pb-28  absolute inset-0 text-shadow-md  flex flex-col md:flex-row items-start md:items-end gap-4 justify-end  mb-5 md:m-0 md:justify-between text-[#ebe2c4] z-40">
          <div className="flex flex-col gap-4 md:gap-6 items-start justify-center">
            <div className="pl-4">
              <h1 className="flex items-center gap-4 text-[1.9rem] sm:text-3xl md:text-5xl lg:text-6xl  tracking-wide leading-tight font-basis-grotesque">
                Made with{" "}
                <div className=" relative inline-block w-16 h-8 md:w-28 md:h-12 rounded-full overflow-hidden hover:animate-shake  shrink-0">
                  <Image
                    src="https://res.cloudinary.com/dybm2eah3/image/upload/v1745561732/Japan/pill-1_jzsw9i.jpg"
                    fill={true}
                    alt="Japan theme with code"
                    className="object-cover"
                  />
                </div>{" "}
                Code, <br />
              </h1>
              <h1 className="flex items-center gap-4 text-[1.9rem] sm:text-3xl md:text-5xl lg:text-6xl  tracking-wide leading-tight font-basis-grotesque">
                Inspired By Japan
                <div className=" relative inline-block w-16 h-8 md:w-28 md:h-12 rounded-full overflow-hidden hover:animate-shake shrink-0">
                  <Image
                    src="https://res.cloudinary.com/dybm2eah3/image/upload/v1745561731/Japan/pill-2_z2sljl.jpg"
                    fill={true}
                    alt="Japan theme with code"
                    className="object-cover"
                  />
                </div>{" "}
                <br />
              </h1>
            </div>
            <p className="pl-4 text-xs text-pretty md:text-base tracking-widest leading-loose md:leading-relaxed uppercase font-swarabi-mincho max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
              A Frontend Dev’s Ode to Culture, Aesthetics, and the Art of
              Experience Design Bridging pixels and people, where every line of
              code echoes intention, emotion, and elegance.
            </p>
          </div>
          <div className="pl-4 flex-row md:flex-col gap-4 flex">
            <Link
              href="https://www.instagram.com/rylenlobo.dev"
              aria-label="Visit Rylen Lobo's Instagram profile"
              target="_blank"
            >
              <div className="flex justify-center items-center border border-[#ebe2c4] p-2 md:p-3 rounded-full hover:bg-[#ebe2c4] hover:text-[#161616] transition-colors">
                <Instagram className="size-5 md:size-6" aria-hidden="true" />
              </div>
            </Link>
            <Link
              href="https://www.github.com/rylenlobo"
              target="_blank"
              aria-label="Visit Rylen Lobo's Github profile"
            >
              <div className="flex justify-center items-center border border-[#ebe2c4] p-2 md:p-3 rounded-full hover:bg-[#ebe2c4] hover:text-[#161616] transition-colors">
                <Github className="size-5 md:size-6" aria-hidden="true" />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rylenlobo"
              target="_blank"
              aria-label="Visit Rylen Lobo's LinkedIn profile"
            >
              <div className="flex justify-center items-center border border-[#ebe2c4] p-2 md:p-3 rounded-full hover:bg-[#ebe2c4] hover:text-[#161616] transition-colors">
                <Linkedin className="size-5 md:size-6" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </div>

        <div className="text-[#ebe2c4] absolute bottom-0 w-full p-5 md:px-12 md:pr-4  z-40">
          <motion.div
            initial={{ scaleX: 0, originX: "center" }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "circOut" }}
            className="h-[0.5px] bg-[#ebe2c4]"
          />
          <div className="flex gap-3 justify-center md:justify-start  items-center mt-4 text-xs md:text-sm">
            <CircleChevronDown className="size-5 md:size-6" />
            <ShinyText className="uppercase text-sm md:text-base">
              Scroll to explore
            </ShinyText>
          </div>
        </div>

        <motion.div
          className="absolute h-dvh w-dvw bg-[#161616] z-50 "
          initial={{ opacity: 1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 0, zIndex: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: "tween",
            ease: "easeOut"
          }}
        ></motion.div>
      </section>

      {/* Section - 2 */}
      {/* <section className="h-dvh flex items-center justify-evenly">
        <div>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 900"
            width={500}
            height={500}
          >
            <path
              transform="translate(449,4)"
              d="m0 0h2l2 23 1 24 6 2 7 5-1 4-4 3-9 1 1 15 12 4 2 2v4l-13 6v6l15 4 9 5 1 1v7l3 1 1 6-7 2 2 5 15 15 11 9 10 9 20 15 20 14 21 13 18 10 25 12 24 8 18 4 9 1h16l16-2 11-4h2l-2 4-7 11-13 13-15 9-28 13-34 12-33 10-15 5h-3v21l32 4h6v-8h7l1 3v7l8 3-1 3-6 2-2 4 6 3v7l1 1 17 1-2 4-7 3v10l16 8 17 4 29 4 24 2h45l17-3-2 6-6 10-8 9-11 7-11 5-22 7-26 6-36 6-26 3-10 10h-5v45l7 1 25 1h18v-10l5-1 2 1-1 11 13 1 1 5-1 1h-11l-1 10 6 1-2 4h-2l-2 4-30-2-38-2-61-2-163-7 1 3 111 4 41 2 60 2 56 3 28 1h12l9 1-1 4-4 2h-4v13l3 3 30 11 28 8 21 4 22 2h44l16-1-2 5-8 11-10 10-10 6-9 3-26 4h-4l1 15 10 10 12 8-1 2-12-2 1 4 5 2 8 5 15 5h9v2l-13 4h-13l-8-2 3 4 14 5 8 2 1 2-20 2 3 2 9 3h20l7-1-4 4-12 6-10 2h-7l1 2 13 4 11 2h26l-3 3-14 8-13 3h-14l-2-1 3 3 12 3 10 2h26l8-1v2l-14 9-9 4-13 2 1 2 14 3 8 1h25v3l-15 9-14 5-12 2h-16l3 4 12 2-1 2-20-1-6-1h-9l5 3 4 2-2 2-11-2-11-4-6-4-5-1-2 9v11l16 7 28 13 26 13 23 13 11 7v1l-72 6-57 4-110 6-52 2-71 2h-148l-103-3-90-5-55-4-82-7-17-1 3-3 25-14 27-14 16-8 32-15 1-2v-11l-4-6-7-7-3 1-5 5-7 4-10 3-4-1 4-4 2-1-8 1-5 1h-23l-5-2 4-2 12-3 7-3h-12l-18-1-12-2-1-3 7-1v-2l-18-6-9-5-5-4 1-2 15 2h21l27-3h3v-2l-13-1-19-4-16-8-10-8 3-1 10 2 21 1 14-2 6-2-16-3-12-5-10-7 3-1 12 2h9l17-3 7-2-2-2-24-5-13-5-1-2h8l6 1 21-3 16-5 7-3 1-2-8 2h-16l-10-3v-1l13-2 15-5 11-6 3-1 1-4-4 2h-16v-2l11-4 8-6 9-13 4-6h3l8 12 8 8 8 4 7 1 1 2-5 1h-15v3l6 2 15 6 16 4 7 2-2 2-11 2-22 1 11 4 19 4h19l9-2-4 4-11 5-18 4-5 1 4 1 14 1h19l12-2-5 5-9 6-14 5-7 2v3l42-1-1-9v-63l-16-4-10-4-6-4-14-3-47-4-30-4-15-5-9-6-8-7-7-10-5-9 25 3 17 1h14l21-2 23-4 24-7 31-12 12-5h2l-5-15-6-4v-1l45-1 31-1v-3l-34 1h-17l-6-1 2-6 1-2 1-9h-6l-8-4-1-3 15-1 1-7 2-2h4v9h18l36-3v-37l-7-2v-5l1-2v-6l-6 1-39-5-37-8-27-8-20-8-14-8-9-9-8-13v-2l18 3 14 1h22l32-2 38-5 21-4 3-1 1-23-7 2 1-5 4-4h7v2l7-2 1-4v-8l-1-4-7-3v-2l7-2v-9l4-1 1 1 1 10 28-4 18-4v-9l-1-2-56-20-39-16-20-9-14-8-10-8-8-9-5-9 1-3 20 6 8 2h18l20-5 18-6 24-10 19-10 16-9 23-15 12-9 16-13 20-18 18-18 2-4-8-3 1-4 4-3v-7l10-5 15-4v-6l-12-6-1-4 4-3 10-2v-17l-9-1-3-2v-5l12-7 3-38z"
              fill="none"
              stroke="#ebe2c4"
            />
            <path
              transform="translate(346,363)"
              d="m0 0h5l21 21 11 7 11 5 18 6 20 4 40 5 40 4 67 5 40 2 40 1 37-2 24-3 20-4 12-4 10-5h3l-2 5-7 8-7 6-10 4-16 2-14 1-29 1h-43l-50-2-98-7-38-4-29-5-21-5-22-8-25-13-5 1-15 15-13 9-15 8-3 1 10-1 19-5 12-5 10-6 10-8 2 1-4 6-10 9-21 11-21 6-26 4-9 1-20 1h-32l-29-2-26-4-12-4-10-7-5-4-5-7v-2l5 1 14 6 21 6 30 5 23 2h30l22-3 17-6 18-12 13-11 6-8 8-16z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(764,630)"
              d="m0 0h12l1 10-7 8-8 8-9 6-5 3-1 2h7l5-2-1 6-12 5-5 1 5 5 7 1 3 1v3l-16 4-13 1 10 5 13 2 1 4-2 1h-22-3l9 7 10 3-1 5-10 1h-21l3 3 7 4 6 2-1 5-5 2-10 1h-24l-1-54v-30l7-8 4-2 13-1 13-7 3-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(293,553)"
              d="m0 0 4 1 11 10 14 10 17 10 20 9 15 5 17 4 26 4 24 2 51 3 130 4h102l39-2 29-3 25-5 13-5 7-4h2l-1 4-9 11-10 7-15 3-24 3-30 2-44 1-90-2-99-3-83-3-25-2-26-4-23-6-19-7-16-8-14-8-10-9-5-11-3-8z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(507,666)"
              d="m0 0h81l1 1v36l-1 17h-81l-1-1v-52z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(416,665)"
              d="m0 0h64l10 1v54h-74z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(513,465)"
              d="m0 0 82 4 1 43-36-1-43-2-5-1v-38z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(605,668)"
              d="m0 0h66l1 1v50l-1 1h-67v-51z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(420,461)"
              d="m0 0 66 3 12 1 1 2v40l-1 1-34-1-44-2-1-1v-41z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(264,668)"
              d="m0 0h28l1 1v51l-39 1-3-1v-3l-4 4h-14l-1-1v-50l1-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(376,540)"
              d="m0 0h37l59 2 45 2 41 1 20 1 2 1 1 13-1 1h-18l-118-4-54-2-14-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(364,204)"
              d="m0 0 11 6 17 10 19 7 22 5 38 6 70 8 55 5 45 2h23l20-2 21-6-2 6-7 7-9 4-3 1h-41l-66-5-70-7-50-6-33-5-27-6-17-6-8-5-5-6-3-7z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(292,564)"
              d="m0 0h3l4 9v8l-7 13-11 12-11 9-10 5-14 4-15 2-13 1-34 1h-20l-29-1-39-4-12-3-11-7-11-10-1-4 10 3 13 5 21 5 20 3 26 2h63l21-2 17-5 13-7 8-6 1-2h2l2-5 6-9 7-16z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(170,798)"
              d="m0 0h20l95 3 41 2 32 1 1 2v7l-6 7-11 9-10 8-13 10-14 12-11 9-5 3h-7l2-4 8-8 13-10 11-10 14-11 14-12 2-2-14-1-150-5-11-1-2-3v-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(175,754)"
              d="m0 0h36l146 2v13h-41l-141-2-1-1v-10z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(713,754)"
              d="m0 0h12l4 2v9l-2 1-73 1-101 1-1-1v-11l36-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(379,756)"
              d="m0 0h157v11l-17 1-106 1h-40l-1-2v-8l1-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(340,666)"
              d="m0 0h30v53l-1 1h-29z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(583,547)"
              d="m0 0h29l55 2 14 1v15l-42-1-56-2-1-1v-9z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(380,463)"
              d="m0 0h9v40l-1 1h-10l-2-5-4 1-2 4-13 2h-5l-1-2v-36l1-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(363,221)"
              d="m0 0h2l2 8-3 6-7 6-11 5-19 6-21 5-30 5-25 2h-28l-12-2-9-6-6-7-1-4 11 4 17 4 9 1h32l26-3 26-5 26-8 14-7 4-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(330,469)"
              d="m0 0h10v38l-1 1-28 3h-6l-1-1v-38z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(437,129)"
              d="m0 0h5l-1 7-4 12-11 24-10 18-10 15-9 12-3 2-16-9v-4l13-12 13-15 11-15 10-16 10-18z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(303,668)"
              d="m0 0h20l1 1v50l-1 1h-20l-1-1v-50z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(733,741)"
              d="m0 0h6l1 1v53l-1 2-3 1 9 8 14 10 12 9 17 13 14 11 6 5v3l-9-2-57-42-9-6-1-6 1-2-1-3v-46z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(418,743)"
              d="m0 0h118v6l-75 1h-88l-1-1v-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(358,540)"
              d="m0 0h11v14l-1 1-45 4h-17l-5-6-5-4 1-3 36-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(275,548)"
              d="m0 0h9l1 1-1 13-1 1-22 1h-39l-2-3-1-11 38-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(721,800)"
              d="m0 0h6l1 5-2 1-19 1-153 2-2-1v-4l70-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(418,726)"
              d="m0 0 72 1 1 1v9l-1 1-12 1h-59l-3-1v-11z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(376,355)"
              d="m0 0 25 1 51 4 1 1 1 10-4 1-71-5-3-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(550,725)"
              d="m0 0 38 1v11l-7 1h-17l-12-1-1-4v-4h-3v5l-2 2h-5l-2-6v-2h-3v8l-2 2h-27l-1-1v-10l2-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(520,804)"
              d="m0 0h15l1 5-7 1-41 1-69 1h-45l-3-1 1-4 88-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(339,363)"
              d="m0 0h2l-1 9-3 6-16 4-36 7h-6v-11l9-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(440,295)"
              d="m0 0 34 3 1 1 1 20h-16l-20-2-1-1v-20z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(553,742)"
              d="m0 0h103l1 5-7 2h-97l-1-1v-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(485,300)"
              d="m0 0h12l19 2 1 1v20l-21-1-10-1-1-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(516,365)"
              d="m0 0 21 1 30 2 6 1v11l-24-1-26-2-7-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(456,361)"
              d="m0 0h11l44 3 1 1 1 10-4 1-44-3-9-1-1-1v-9z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(605,725)"
              d="m0 0h50l1 1v10l-1 1h-50l-1-1v-10z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(376,344)"
              d="m0 0h15l54 4 7 1 1 6-1 1h-20l-37-3-18-1-1-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(162,801)"
              d="m0 0h3v7l-10 8-16 11-12 9-17 12-8 6-4 2h-6l2-4 15-12 17-12 19-14 15-11z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(546,811)"
              d="m0 0 7 1 19 19 7 8 9 10v2l3 1 7 8 5 4 1 4-6 1-8-7-8-8-7-8-20-20-9-11z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(576,369)"
              d="m0 0 43 3 1 1v10h-18l-25-2-2-1v-10z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(255,725)"
              d="m0 0h37l1 1v11h-40l-1-1v-7l1-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(541,742)"
              d="m0 0h5l1 1 1 64-1 1h-6l-1-1v-64z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(358,206)"
              d="m0 0h2v13l-3 5h-2v2l-9 6-19 7-10 3-3-1 7-6 20-14 11-10z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(549,517)"
              d="m0 0 43 2 4 2v8h-19l-23-1-6-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(368,345)"
              d="m0 0 4 1v5l-6 2-41 9-30 7-15 3-1-4 15-4 28-7h6l8-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(364,745)"
              d="m0 0h4v63l-6-1-1-2v-46l2-13z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(516,354)"
              d="m0 0h10l46 3 1 6-1 2-40-2-13-1-3-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(455,350)"
              d="m0 0h15l41 3 2 2-1 5h-20l-36-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(458,514)"
              d="m0 0h24l15 1 2 1 1 8-1 1h-15l-24-1-2-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(350,616)"
              d="m0 0 8 1 4 4 5 13 8 13 1 9-3 1-6-5-8-11-7-14-2-7z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(328,627)"
              d="m0 0h8v3l-3 1-60 4-36 1v-4l60-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(419,293)"
              d="m0 0 15 1 3 2v20h-11l-7-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(391,300)"
              d="m0 0h5l1 1v17l-16 5-4-1v-18l9-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(301,743)"
              d="m0 0h54l3 1v5l-1 1h-49l-7-1-1-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(518,303)"
              d="m0 0h10l8 1 1 4-1 16h-13l-5-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(420,512)"
              d="m0 0h20l13 1 1 10h-25l-9-1-1-1v-8z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(371,305)"
              d="m0 0h5v19l-14 4h-4v-17l3-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(512,516)"
              d="m0 0h21l11 1v10h-27l-5-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(337,613)"
              d="m0 0 7 2 5 12 8 16 10 11 3 5-4 1-9-7-7-8-7-12-6-17z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(332,515)"
              d="m0 0h7l1 1v7l-10 2-19 2h-7v-9l1-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(688,741)"
              d="m0 0h40l1 1v6h-42l-1-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(167,752)"
              d="m0 0 4 1v30l-1 11-3 2h-3v-43z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(254,742)"
              d="m0 0h37l3 1 1 4-1 2h-40l-2-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(362,529)"
              d="m0 0h5v3l-21 4-37 4-17 1v-4l32-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(303,725)"
              d="m0 0h20l1 1v11l-6 1-16-1v-11z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(373,330)"
              d="m0 0 1 3-9 4-4 4-15 4-11 3h-3v-8l26-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(576,358)"
              d="m0 0 23 1 11 1 2 2v5l-4 1-27-2-5-1-1-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(141,784)"
              d="m0 0h7l12 5-1 3-24 9h-2v-7l4-7z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(610,520)"
              d="m0 0h11l14 1 1 1 1 8h-25l-3-1v-8z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(289,519)"
              d="m0 0 4 1 1 7-6 2-10 1h-10v-9z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(376,233)"
              d="m0 0 9 6 10 8 6 4 10 8 7 7 2 4-1 4-5-3-9-10-10-9-10-8-7-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(454,339)"
              d="m0 0 58 3 26 3v2h-17l-53-4-13-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(639,521)"
              d="m0 0h11l10 1 1 2v7l-1 1h-10l-11-1-1-1v-8z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(255,521)"
              d="m0 0h6l1 4v5l-2 1-21 1-1-1v-9z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(341,726)"
              d="m0 0h17l1 1v9l-2 2h-15l-2-1v-10z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(177,743)"
              d="m0 0h41l-1 5h-40l-1-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(627,441)"
              d="m0 0h4l-1 6-5 4-7 10-5 4-3 1-1-1v-13h10l2-1v-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(319,343)"
              d="m0 0h6v5l-10 3-15 3-4-1v-6l1-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(368,511)"
              d="m0 0 3 1v8l-2 1-17 1-1-7 1-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(367,432)"
              d="m0 0h11l10 6 3 4-17 1-8-7-1-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(565,344)"
              d="m0 0 13 1 26 4v2l-19 1-17-1-3-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(401,323)"
              d="m0 0h6l1 5-4 2-17 2-7-1 2-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(249,445)"
              d="m0 0 10 1 18 5 6 3 3 4-8-1-23-7-6-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(660,725)"
              d="m0 0h11l1 2v9l-1 1h-11l-1-1v-9z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(233,726)"
              d="m0 0h14v10h-15v-9z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(746,792)"
              d="m0 0h21l1 1v9l-7-1-15-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(222,743)"
              d="m0 0h25l1 4-3 2h-18l-5-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(367,356)"
              d="m0 0h5v9l-5 2h-7l-4-4v-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(280,445)"
              d="m0 0 9 1 10 7-1 3h-8l-11-7-1-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(711,631)"
              d="m0 0h11l-4 5-10 5h-8l2-5 4-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(390,427)"
              d="m0 0h17l-1 4-3 8-5-1-7-8z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(377,511)"
              d="m0 0h12l1 1v7l-1 1h-10l-2-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(215,632)"
              d="m0 0h5l7 8 2 5v3h-5l-10-14z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(403,335)"
              d="m0 0 39 2 4 1v2h-11l-32-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(382,260)"
              d="m0 0 4 1 6 9 1 5-6-1-7-8 1-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(347,436)"
              d="m0 0h9l8 5-1 3-11 1-5-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(281,616)"
              d="m0 0h8v3l-6 4-15 3 1-3 10-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(562,277)"
              d="m0 0h7l1 3-6 8-7-1-1-2 4-7z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(149,745)"
              d="m0 0h10l1 1v9l-5 1-6-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(473,269)"
              d="m0 0h10l-1 4-5 6h-7v-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(342,273)"
              d="m0 0h5l10 8v3l-8-1-7-4-1-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(505,273)"
              d="m0 0h8l-1 5-5 5-7-1 1-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(534,276)"
              d="m0 0h8v3l-5 6-4 1-5-1 1-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(168,728)"
              d="m0 0 3 1v18l-2 1-3-3v-14z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(590,280)"
              d="m0 0h6v4l-6 6h-6l-1-2 5-7z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(293,609)"
              d="m0 0 6 1 6 4 2 4h-8l-6-3-1-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(325,439)"
              d="m0 0 8 1 8 6-1 2h-9l-6-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(659,742)"
              d="m0 0h13l1 5-1 1h-12l-1-1z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(445,266)"
              d="m0 0 7 1v4l-4 4h-7v-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(554,320)"
              d="m0 0 4 1v13l-5 1-1-2 1-12z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(305,282)"
              d="m0 0 6 1 7 6v2l-5 1-9-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(303,444)"
              d="m0 0 10 2 5 3v2l-9 1-7-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(362,268)"
              d="m0 0h5l8 10v1l-7-1-6-5-1-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(470,625)"
              d="m0 0h6l1 1v8l-1 1-7-1v-8z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(326,277)"
              d="m0 0 5 3 5 5v3l-7-1-6-5 1-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(579,628)"
              d="m0 0 4 1v6l-4 4-5-1 1-7z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(365,726)"
              d="m0 0 5 1v10l-5 1-1-1v-10z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(680,631)"
              d="m0 0h5l1 4-4 5-4 1-2-2 1-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(506,626)"
              d="m0 0h5l1 1v8l-5 1-2-2v-7z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(320,615)"
              d="m0 0 6 1 6 5 2 4-6-1-8-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(654,443)"
              d="m0 0 5 1v4l-7 4h-4l2-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(564,437)"
              d="m0 0h4l-1 7-2 2h-7l2-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(734,727)"
              d="m0 0h5l1 2v6l-1 1h-6l-1-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(191,632)"
              d="m0 0h6l2 5-2 3-5-1-3-2v-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(540,628)"
              d="m0 0h7v7l-5 1-4-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(288,284)"
              d="m0 0 7 1 3 4v2h-6l-7-4v-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(614,629)"
              d="m0 0 4 2-1 6-1 2h-7l2-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(397,621)"
              d="m0 0 5 1 1 6-1 3h-5l-1-1v-7z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(745,748)"
              d="m0 0h7l2 2-7 5-5-1 1-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(434,624)"
              d="m0 0h7l2 3-2 4-3 1-4-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(310,608)"
              d="m0 0 5 2 1 7-3 2-3-2-1-8z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(595,440)"
              d="m0 0 5 1-1 5-4 2-4-1v-3z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(468,431)"
              d="m0 0h4l-1 7-1 1-7-1 2-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(530,436)"
              d="m0 0h5l1 4-2 3-5 1-2-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(435,428)"
              d="m0 0 4 1-1 5-4 3-5-1 3-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(645,631)"
              d="m0 0h5l1 5-2 3h-5v-6z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(499,433)"
              d="m0 0h4l-1 7-5 1-2-1 1-4z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(291,460)"
              d="m0 0 5 1v7h-4l-2-2v-5z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
            <path
              transform="translate(217,728)"
              d="m0 0h2v7l-5 1-1-4 4-2z"
              fill="none"
              stroke="#ebe2c4"
              strokeWidth={1}
            />
          </svg>
        </div>
        <div>
          <svg
            width={450}
            height={450}
            viewBox="0 0 241 257"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={0.3}
          >
            <path
              d="M12.25 1l1.5.25L19.5 3l6 1.5L32.25 6 44.5 8l11.25 1.25L65 10l17.25.75 36 .25h13.5l40.5-.5 14-.25 10.5-.5 11.25-1L220.25 7 229 5.25 238 3l6.5-2-.5 2.5-2 5-4 6-4.5 4.5-2.5 2-2 1.75-1.25 2.5-1 3.5-1.25.75-2 .5-7.25.5-16.5.25-.75 3-1.75 2v6.75l.25 4.25.25 1.75L200 48l4.25-1.75 1.75-.5h2.25l.25.25v2l-.5 2h17.25l.25.25.25 11.5-.75 1-.75.25-12 .25-3.5.25 1.25 1.25 1.5 1.25 1-.5 2.75-.25v1h-2l-.75.75v.5l2 .25 1.25 2-.25 1-.25 1.25.5 1.5h2.75l.5.25.25 1.5-.75.25-2.5-1.25-.5 1.25-1.5 1.75-2.25 1-3 .5 1 1.75 1.25.5 1-.5.75.25-1 1.25-.25.5h2.75l-.25 1.25-2-.25h-.25l-.25 1.25-2.25-1.25v1.75l.25 1.25 1 .75 1.25.25.5-1 1-1.75 1 .25 1.5.5H217l.25-1.75.5-1.5H223l.75-.75 2.25.25 1.75-.25-.25 1 .25.75 1.25.5.25 1-2.5.25 1 1.25 2 1.25-.25 1-.25 1.5 2.75.25h.75l2 .25.25.75-.25 1.25h2l.25 1-1 .5h-.75l.5 1 3.5.5v-.75h.5l.25-1h.5l-.25 1-.25.75h2v1l-2.75.5.25 1 2 1.25v.75h-2.25l-1.75-.75-1.25-.25-.5 1h-.5v-1.5h.5V98l-1-.25-.25.75-1.5.5-1.25.25-1 1.5-1.25.25-1 .5.75 2.25 1.25 1.5 3 1.25.75 1-.25.5-2 .25-1 .75-1.75.25.5 1-.75.25-.25 1.25-.5-1V110l-2.75.75-.75.25-.5 1.75-.5.5-1.5-.25-.25 1-1.75-.5v-.5l-1.5-.25.25-1.25.5-1h-1.75l-1-.75v-.5h-2l-2 1H212l-.25-1-1.5.25-.25-.5h-1v.5l.75.5v.5h-1.5v-.75l-1 .75.25 1.25.25.5H210l.5-.25-.5 1.25v.75l1.25 1.25 2.25.25.5.75-1 1 .5 1 1.25.25 1 .25-.75 1.75-.25.75 1.25.75v.5h-.75l-.5 1.5-.75-.25-.75-1-.25.25v1.75h-.75l-.5-2.5-1.5.5-.5.75-2.25-.5-1.75-.75-1.5 1-.75 1.25-1.5.5h-1l.25 4.75.25.75 1.75.25 1.5-.25.75 1.25h1.25l.5-.75h1l-.25 1.5 1.75-.25 1.25.5.75 2.5 1.75 1.5h.5l-.25-2.75 1 .25.5 1.25 1 .75-1.5 1 1.5 2.5.25 1.75-1.25.5-.75-1.25h-.75l-.5.75-1.25.25-1.25-1.25-1-.25.25 1.25-1 .25-1.5-.75-1.5-.25.25 1.5H204l-.25-1.25-.75-.25.25 1.5-1.5.5v4.75h4l1.5-.25-.75.75-.5.25v.75l4 1 2-.25 2.5-1.25 3-2.75.75-1.5L217 144l-3.25-.5v-.25h2.75l2.25.25.25-.5v-2l-.5-2v-1.75l2-1.25.5-.25h-2.75L217 136l1-.75h.75l-1.5-3.25-.5-3 1.75-2 2.75-2.25 1-.75h.5v-.5l1 .25 2.75 3L228 129l.5 1v2.25l-.75 1.25-1.5 1.25-.25.75 1.25.5 1 1H225l-3 .5-.5.5h7.5l1.25-.25.25 1-.75 1.75.25 1.25 2.75 2.25 3.75 2.75 2.75 1.75 2.25.75 6.5.25 1 1v2.25l-.5 1-.25-.75v-2.5l-.75.25-1.25 4.75L243 157l-5.25 1.25-1.5.5-.5 3.5v8.5l.25 4.75 1 1.25.5.5-2.5 2-3 .75-3.25.25h-11l-2.75-.5-2.75-1.5-2.5-2.25-1.75-1.25h-.75l-.25-.5-1.5.25-1 1 2.25.5.5-1 .75 1.5.25 3.75-1.25-.75-1.25-1v-.5h-.5l-1-1.25v-.5H203l-.5.5-.25-2.25-.25-8.5-.5-8.5-.5-2.5h-.5v7.25l.5 9 .75 20.25.5 10 .25 8.5h1v-6.5l-.5-11.25-.25-3.75-.25-9.75.5.75 1.75 2.5 2.5 2.25 3.25 2 1.25.5h.75l.25-3.5 1-1.5.5-.25H225l5.5-.25 3.5-.5 7.5-1.75.25-.25-1-.75 2.25.25 1 .5.25 1-.25 5.75-1.25 1.25-6.25 1-2.5 2.5-1 .5-1.25-.25h-9l-.5.25 2.75.5 6.25.25-.5 1-.75 1.25-.25 4.5 2-.75h5l1.5 1.75.5 1.5 2.75.75 1.25.75-.25-1.5-.25-.75 1-.25 1.5.75h.5v-.5h.75l.5 1.25 2 1.25h1.75l.25 2-.75.5-.75.25v.75h.5l.25 2.5.75 1h2.75l-.5 1-1.25.5.75 1.75 2.25 2.75.25.5h-.5l-.25.75-1.75.75-.5.75-2.25.5-.75 1.25-.75.75-1-.25-1.25-.5v1.75l-1.5.5h-3.75l-1.25-.25.5 1v.75h-1.25v.5l-1 .5-2-.5.5 1.5 1 .75-1 .25-.75-.75-.75.25.5.5-.25 1.25h-1.25l-1.25-1-.75.25-.5 1.5-.5.75v2l.5 2.75 1.25 2 1 1.25 4 3 2.5 2 2 2 .5 1.25.25 2V251l-.75 1.75-1.5 1L236 255l-4 .75-2.75.25h-9l-4.75-.75-6-1.25-3.25-1.25-2.5-2.25-1-2.25.25-.5 1.5 1.75.5.25v-3l.75-2 1 .5 2.75 2.25 2.25 2.25.25 1.75 1.25-1.25.5-1v-.5h-1.5l-1.5-1.5v-.5l1.25.5 3.75 1.25 2.75.5 4.75.25L228 249l6.25-1.25 4-1.5 2.25-1V245l-2.25.25-7 2-3.25.75-3.25.25h-4.5l-3.5-.5-4-1.25-2-1-2.25-1.75-2.25-2.5-.75-1.25h-1l-1.5 2.75-.5 1.75-.5-.75-1-1-1-.5-1.75.25-.5.5h-1.5l-3.75-2.25-.25-.75-20.75-.25-40.75-.25h-5.5l-23 .25H62.5L62 241l-3.25 1.25H57.5l.25-1.25-1.25 1-1.75-.5-1.25-.5-.25 1.75v4.5l-1 2.5-2 2.25-3 1.75-3.5 1.25-3.5.75-2 .25h-10l-4.75-.5-5.25-1-3-1-1.25-1-.5-1.5v-4l.75-2.5 4.75-4.75 4.5-3.25 1-1.25.75-3.5-.25-2-.75-2.5L24 227h-1.5l-1 .25-1.5-1-.25-1.25 1.25-.5.25-1H18.5l-2-.5H16l.25-1.75-2 .75H12.5l-.5-.75-.75-.25-.75-1H9.25l-1-.75-1.5-.75-1.5-.5-.75-.75-2.5-1-1-1.5v-1l1.25-.75H3l.25 1 1.25-.5.25-1h-.5L4 211v-2l1.25-.75h.5l-.25-1.5-.25-1 1.25-.5L6 203l1-.25.75.75-.25-1.5 1.25-.75 2-.5.25-.75 2 .25 1-.75 1 .25.75 1.25.75.25.75-.75 1.5-.5 1-2.75.5-1.75 1-.25v2l2.75.5.5 1.25 1.25-1 .25-.5V195l-1-2.5-.25-.75.5-.25 6.25-.25 2.75-.5-5.75-.25h-5.25l-1 .25L20 188.5l-2-1-5-1-1.25-1.25v-5.5l.5-1.25 1.75-.75 5.25-1.25h.5l.25-3v-11.25l-.5-4-1-.25-4.25-.25-3.75-.75-1.5-1-.5-3.5-.75-1.5-1.25-.5.5-1h4l3.5-.25 3-1.25 1.25-.5-1.25 1.25-.75 1 2.5-1 2.25-1.5 1.5-1.5-.25-.75-1 .75-.5-.25 1.25-1 1.25-1.25 2.25-1.5.25-1.25-1-2 .5-1 2.5-1.5 1.5-.75-2-2.5-.75-1.5.25-2.25 1.75-2.25 2-2 1.75-1.25 4 3 1.75 2.25.25.5v2l-2 4 2.5.5 1.75.75h1.5l1.25-1 .25-1.75 1 .25.25.75L45 136h1l.75-.5.75-2.5 1.25-.75 2 .25v-1.25l-.5-.25h1l1 .75 1.75-1 .75-.5 1.25.25.75-.25.25-.5.25-2.5-.5-2.5-1-.25-1 .5v-2.5l-1.5-.25-1.75.75-2.25.25-1-1.25h-.75l-.5 1.5-1.75-.25-1 .75h-.75l-.25-1.5-.5-.5 1-.25-.25-1.25-.75-1.75L44 118h1.75l-.5-1.25-.75-1 .75-.5L48 115l.5-1.5 1.25-.75 1.75-1.25.25-1.5-2.75.25-.25-1.5-1.25.25-.5.75-1.25-.25-.75-.25-2.75-.25.25 1-1.25 1-.5 1.5-2.5.5v.5l-1.25.25-.25-.75-1.75-.25-.75-1-.25-1.25-4-1v.5h-.5l-.25-.75-2-1-.5-.75-1.5.5-.25-1.25 1.25-1 3.25-1.25.5-.25-.25-1.75.5-.75 1 .25.5-.5v-.5l-3.25.25-.5-1.5-1 .5-.25.5h-.5l.25-2-1.5-.5-1.25-.25-.5.25.5 1.25-1-.5-1.5.25-.5.5h-3l-.5-.25V99l2.5-1.25-.25-1-2.25-.25-.25-.75 2.5-.5-1-1.5.25-.5.75.5.75 1.5h.5L21.5 93l1-.5V92L21 91l-.5-.75 1.25-.25 1 .5.75 2 1.25.5.25-1-.75-.75v-.5H25l-.25-.75.75-.75.25 1.25 1-.5.75-1 .25.75h.5v.5l1-.25-.25-2.25 1.5-.75-.5-.75v-.75l.75.25.5.75 1-1.5h.5v-.75l-2.75 1h-.5l.25-1.25 2-2 .5-.75 1.5.25 1.25-.25 1.75 1 2.75.25.25-.75 1-.25.75 2.25.75 1.5h2.5L46 86l.25.25 3.5.25-.25-1.5v-2l-1 1-1.75.25-.5-.5V83l-.75.25-.25.5L44 83.5v-1l1.25-.25 1.5.25-.5-1.75V80l1.75.75 1.25-.25-.25-1-2.25-1-2.25-.75.25-1.5-1.75-.5-.25-1.25-2 .75h-1l.25-1.5.25-.25 2.75-.25v-3.5l.25-.5h.5l.5-1.25 2.25-.75-.25-.75-.5-.25-2.5-.25.25-.75h2l1.75.75v.5h.5l.5-1 1.75-2-1.75-.25L33 63l-.75-1.5h16l13.25.25-.5 7-1 12.75-.75 16.5-.75 20.75-.5 13-1 15.75-4 .75 1 1.25 2 1.75.5.5-.25 15.5-.75 16.5-1 21v5.75l.25 1h2l.5-.75.25-1.25.75-.25h2L60 208l-.25-.5v-3.25l.75-8.75 1-15.25 1-16.75.5-10.75.5-9.25.5-12.5.5-9 .25-9.25.75-15.25.5-14.75.5-10.25.25-9 .75-15 .25-9 .5-6.25.25-.25 4-.5.25-.5H65.5l-2 .75-1 1-.25 5.5-.25 11.5-.75.25-28.5-.25-.5.5-.25-1 1.5-.25h17.25l-1-4.25.75-.25 3.5.75 6 3 .75.25v-3.75l.25-2v-8.5l-.25-2 1.25-1.5 3.25-1.25 1.75-.25h5.5v-.75l-4-.5v-3.75h7.75v-.5l9-.25h97.25l.25.5-2 1.5-1 2v3.75l1.5-.25 2.5-1.25 2.5-.5 8-.25.25-.5-6.5-.5-.75-.25-.25-2.5.75-.75 1.25-.25h5l2 .75.25 1.25-.25 1.5 1 1.25.25 1.25 1.25-.25v-4l-1.25-1.25-1.5-.75v-.5l20.5-.5 8.25-.5 2.5-.5.75-.75.75-1.25.75-3.5v-.75l-1 2.25-1.5 3-13 .5-6.75.25-13.75.25-22.25.25h-69L64.75 23l-16.5-.25-15.75-.5-1.75-.5-2.5-5.5v-.5h-.5L30 23l3 .5 7.5.5 22.75.5.25.5-2.25 1.25-.75.75-.25.75v2.5l-.25.25H41l-5.25-.5-3.5-1.25L31 27l-1-2.25L29 23l-4.25-2.75L22 17.5l-3.75-5L16 9l-2-4-1.75-4z"
              stroke="#ebe2c4"
            />
            <path
              d="M80 30.5h29.5l9.75.25v4h-1.75l.5 1.5 1.25.5.25 2.5-.25 5.75-1.75.25.25 1.5H119V50l-1.25.25H97.5l-9-.25-1.5-.25-.25-3-1.75-.5h-2l-2.75 1-2.5 1.25-1.5.25-.25-.25v2.25l.25-.25h41.25v1l-1.25.25-3.5.25h-24.5l-8-.25L76 51.5l-.5 9.25 1.25-.25 4.5-.25L102 60h33l48.75.25-.5-10.5-.25-8.25v-7.25l1-1.25 1.75-1 1.5-.25h4l2.5.25.25 1-4.5.25.25.5.25 26 1 33.5.5 9.75.5 12.75.75 13.5 1.25 27.5.75 14.75.75 18.5.25 8.5v8.25l-2 .75.75.75v-.5l1.25-.5.25.25v2h-1.75l-.75-1h-.5l-.5 1.25-.5-.25.25-1 .75-1-1.75.25-1.25-1.5V205l.75-1-.5-1.25.75-1-1.25-.25-1.25-23-.75-17.5-.5-11-.5-13.75-.5-11.75-.5-14.5-1-23-1-21.25-.25-4h-96l-11-.25-1.25-.25v6l-.5 15.25L74 97.75l-.5 13-.75 16L72 140l-.5 13.75-.5 8-.5 14.25-.5 9.5-.25 8.25 1.5-1.25.75-.25-.25 2-1.25 1-2.25.75.25-11.5.75-22.5 1.25-25 1.25-24.75.75-21.75 1.25-30 .5-14 .5-9 .5-1.5 1-.5.5-1.25 2-1.5 1-2 .25-.25zM32.25 61.5h16l13.25.25-.5 7-1 12.75-.75 16.5-.75 20.75-.5 13-.75 12.5-.25 1.5h-.25l-.25-4.5L55 141l-.5 1-3.5.25.75-.5.75-.25.25-.75h-2l-.25.75-1.25-.25L49 140l-1.25 1-3-.25-1.5.25.5-2.5-2-.25-.75.25-.75 1-.5-.25 1-1.25-.25-1-.5-.5h2.5l1.25-1 .25-1.75 1 .25.25.75L45 136h1l.75-.5.75-2.5 1.25-.75 2 .25v-1.25l-.5-.25h1l1 .75 1.75-1 .75-.5 1.25.25.75-.25.25-.5.25-2.5-.5-2.5-1-.25-1 .5v-2.5l-1.5-.25-1.75.75-2.25.25-1-1.25h-.75l-.5 1.5-1.75-.25-1 .75h-.75l-.25-1.5-.5-.5 1-.25-.25-1.25-.75-1.75L44 118h1.75l-.5-1.25-.75-1 .75-.5L48 115l.5-1.5 1.25-.75 1.75-1.25.25-1.5-2.75.25-.25-1.5-1.25.25-.5.75-1.25-.25-.75-.25-2.75-.25.25 1-1.25 1-.5 1.5-2.5.5v.5l-1.25.25-.25-.75-1.75-.25-.75-1-.25-1.25-4-1v.5h-.5l-.25-.75-2-1-.5-.75-1.5.5-.25-1.25 1.25-1 3.25-1.25.5-.25-.25-1.75.5-.75 1 .25.5-.5v-.5l-3.25.25-.5-1.5-1 .5-.25.5h-.5l.25-2-1.5-.5-1.25-.25-.5.25.5 1.25-1-.5-1.5.25-.5.5h-3l-.5-.25V99l2.5-1.25-.25-1-2.25-.25-.25-.75 2.5-.5-1-1.5.25-.5.75.5.75 1.5h.5L21.5 93l1-.5V92L21 91l-.5-.75 1.25-.25 1 .5.75 2 1.25.5.25-1-.75-.75v-.5H25l-.25-.75.75-.75.25 1.25 1-.5.75-1 .25.75h.5v.5l1-.25-.25-2.25 1.5-.75-.5-.75v-.75l.75.25.5.75 1-1.5h.5v-.75l-2.75 1h-.5l.25-1.25 2-2 .5-.75 1.5.25 1.25-.25 1.75 1 2.75.25.25-.75 1-.25.75 2.25.75 1.5h2.5L46 86l.25.25 3.5.25-.25-1.5v-2l-1 1-1.75.25-.5-.5V83l-.75.25-.25.5L44 83.5v-1l1.25-.25 1.5.25-.5-1.75V80l1.75.75 1.25-.25-.25-1-2.25-1-2.25-.75.25-1.5-1.75-.5-.25-1.25-2 .75h-1l.25-1.5.25-.25 2.75-.25v-3.5l.25-.5h.5l.5-1.25 2.25-.75-.25-.75-.5-.25-2.5-.25.25-.75h2l1.75.75v.5h.5l.5-1 1.75-2-1.75-.25L33 63l-.75-1.5z"
              stroke="#ebe2c4"
            />
            <path
              d="M65.5 31.75h5.75l1.5.25-.25.75-4 .5-.5 6.25-.5 14.75-.5 9.25-.5 14.75-.5 10-.5 15.25-.5 9.25-.25 9.25-.75 14.25-.5 12-.5 8.25-.5 11.25-1 16.5-1 14.75-.5 5.25v3.25l.5 1-.25 1H57.5v1.25l-.75 1h-1.5l-.75-.75-.25-.5v-5.75l1.5-30.75.25-6.75.25-15.5L54.5 150l-1.5-1.25v-.5l3.25-.75H57v-3.25l1-17.5.75-22.25.75-18.75 1-14.25.75-8.5.25-1.25h-29l-.25.5-.5-.5-.25-11H26v-8h8v7l16.25.25v.25H32l.25.75 1-.5 28.5.25.25-11.5.25-5.5 1.25-1.25 2-.75zM125.25 239.25H134l37.5.25 20.75.25.5 1 3.5 2h1.5l1-.75 1.75.25 1.5 1 .5.75.75-2.25 1.25-2 1.25.25 2 2.75 2.25 2 2.25 1.25 2.75 1 3 .75 2.25.25h4.5l4.5-.5 7.5-2 2.25-.75h1.5v.75l-4.75 2-4.75 1.25-3 .5-5.25.25-4.25-.25-4.5-1-2.5-1-.75-.5 1.5 1.75 1.5.25.25.75-1.5 2h-.5l-.75-2-2.5-2.5-2.25-1.75-.75-.25-.5 1.75-.25 3-1-.5-1-1.25-.25.5H101.5l-48.5.25v-7.25l.5-.75 1.25.5 1.75.5 1.5-1-.5 1.5 4.5-1.5.5-1 41.75-.25 21-.25zM127.5 26h8l3.75.25.25.25.25 8.25.5 1.25.5.25-.5-1.75-.25-.25V33l1.25.5h.5l.25-2.75 5.5-.25H166l12.5.25 1 .5.5 2.25 1.25 1.25L182 36l.5 1.5.25 5.25v6l-1.5-.25-4.5-2-.75-.25h-2.25l-1.75.5-.25 3-.25.25-18.5.25h-9l-2.25-.25-.25-7-.25 2-2-.25-1-.25-.25-.5-.25-16.25-16.25-.25-1-.25.25-1 6.75-.25zM80 30.5h29.5l9.75.25v4h-1.75l.5 1.5 1.25.5.25 2.5-.25 5.75-1.75.25.25 1.5H119V50l-1.25.25H97.5l-9-.25-1.5-.25-.25-3-1.75-.5h-2l-2.75 1-2.5 1.25-1.5.25v-5.5l.25-8.75 2.25-1.75 1-2 .25-.25zM91 199h19.75l.5.5v1L113 199h29.5l2.5.5 2 1.75 1.75 2.5.25 1.25-5.5.25H112l-1-.5-.25-.5-1 1L80 205l.25-1.25 2-3.25 1.25-1.25L91 199zM100.5 206.75h69.25l3 .25.25 1-.25.25-5.25.25-17 .25-.75-.25v.5l3.5.25 3.25.75.25.75h-4.5v.5H174l2.75.75v.75h-68L99 212.5v-2l.5-2.25 1-1.5zM77.5 231h49l1.75 1 1 2.75.25 2.25-.5.5-14.25.25h-31l-23-.25-1.25-.5.25-.75L91.5 236l-1.25-.25h-3L87 235l.25-.5 2-.5 4.25-.5-30.75-.5.25-1 4.25-.5 3-.25 7.25-.25zM239.75 8.75H241L239.75 10l-4.5 1.75-7 1.75-6.25 1-10.25.75-23 .75-14.5.25h-32L70 16l-22.5-.5-7.75-.5-7.25-.75-7.75-1.5-5.25-1.5-1.5-1L17.5 9l2.5.75 7 1.75 5.25 1 10.75 1 5 .25 36 .75h34.75l30-.25h35.75L206 14l6.75-.25 7.5-.75 5.75-.75 6.75-1.5 7-2zM129.25 222.5l14 .25.5.75.5 5.5-1.75.25H94.25L93 229l.25-1.5L95 224l1.5-1.25 32.75-.25z"
              stroke="#ebe2c4"
            />
            <path
              d="M76.25 35h.25v8.25l-.25 5.25H76v2.25l.25-.25h41.25v1l-1.25.25-3.5.25h-24.5l-8-.25L76 51.5l-.5 9.25 2.75-.25v.25l5 .25.5.5H76.5l-1.25-.25v6l-.5 15.25L74 97.75l-.5 13-.75 16L72 140l-.5 13.75-.5 8-.5 14.25-.5 9.5-.25 8.25 1.5-1.25.75-.25-.25 2-1.25 1-2.25.75.25-11.5.75-22.5 1.25-25 1.25-24.75.75-21.75 1.25-30 .5-14 .5-9 .5-1.5 1-.5V35zM21.75 237.75l.5.25-1.25 2-1.75 2.25-1 1.25.25.75 2 1 5.75 1.5 4.25.5h5l6-1 4-2 2.5-2v.75l-2.75 2.25-4 2-3.5.75-5 .25-5.5-.5-6.25-1.5-4-1.25h-1.25l.75.5 3.5 1.75 3.75 1 4.5.75h8.5l4.25-.75 3.25-1.25H45l-.25.75-1.25 1-1.25.5.75 2.25.5-.25.5-1.5 4-4 1.5-1.25.75.25.5 4.5.5.5 1.25-2 .5-1 .25.5-1 2.5-2 2.25-3 1.75-3.5 1.25-3.5.75-2 .25h-10l-4.75-.5-5.25-1-3-1-1.25-1-.5-1.5v-4l.75-2.5 4.75-4.75 2.75-2zM233.25 237.75l1 .5 3 2.25 2.5 2 2 2 .5 1.25.25 2V251l-.75 1.75-1.5 1L236 255l-4 .75-2.75.25h-9l-4.75-.75-6-1.25-3.25-1.25-2.5-2.25-1-2.25.25-.5 1.5 1.75.5.25v-3l.75-2 1 .5 2.75 2.25 2.25 2.25.25 1.75 1.25-1.25.5-1v-.5h-1.5l-1.5-1.5v-.5l1.25.5 3.75 1.25 2.75.5 4.75.25L228 249l6.25-1.25 4-1.5 2.25-1V245l-2.25.25-7 2-3.25.75-3.25.25h-4.5l-3.5-.5-4-1.25-2-1-2.25-1.75-.5-.75 1 .5 2.25 1.5 3 1.25 5 1H226l6.25-1 4-1.5 1.25-.75h.5l-1.25-1.25-1.75-2-1.5-2.5-.25-.5zM105.5 186.75h51.25l2.25.75 2.5 1.5.75.75v1l2.5-.25.25.75-7.75.25H147l-1.25-.75-.75-.5v1l-1.75.25H106l-4-.25h-4.75l-2.75-1-.25-1 2.5-.5 1.5.5v-.75l3-1.5 4.25-.25zM97.25 214l18.25.5H127l1 1v2.25l-.25 2.25-.75.75-22 .25-.75.25v-.5l-6.5.25h-8.5l-11-.5-2-.25.25-1 14.25-.25H95l-4.25-.25v-.5l2.5-1L97 217v-.5H81.75l-2.5-.25v-.75l2.5-.5 6.25-.5 9.25-.5zM195.75 37.75h.5l.75 12 .25 1.75.5 8.75h25.75l.25-8.25H200l-2.25-.25-.25-1 .25-.25H225v11l-16.75.25h-9.5l-.75-.5v6.5l.75 15.75.5 12.75.5 11 .75 21.25.25 3.5.25 11.25V148l.75.25-.25 1.25-1 1.25-1 .75h-.75l-.75-2 .25-1.25 1.75-.5-.5-2.75-.75-20.5-.75-19-.25-6.75-.75-12.5-.75-15-.75-22.75V38.25l.25-.5zM175.25 222.25l2.25.25v1h-2.25l.25.75L178 226l1 .5 2.25-.25L183 226l1.25 1.25 2 1.5v.5H183l-.75-.75-1.25.75h-35l-.75-.5-.5-4.5.5-1.5.5-.25h21.75l7.75-.25zM139 231h9.25l15.5.25 1 1.25 1 3 .25 2-8 .25h-26.75l-1.5-2L129 233v-1.5l1.5-.25 8.5-.25zM61.25 51.5h.5v4.25L61.5 60l-.25.25H34.5l-.75-.25v-8L60 51.75l1.25-.25zM160.25 214.25l2.75.25 1.25 1 2 4.25v.75h-38v-3.25l.75-1.75.75-1 30.5-.25zM200.25 154.75l.75.25.5 1 .25 1.5.5 8.5.25 8.5.25 1.75 1-.25 1.25 1.25.25.75h.5l1.25 1.25 1 .75-.25-3.5-.5-1.25-.5 1-2.5-.5.75-1.25 1-.5 1.25.25 1.5.75 3.25 2.75 2.5 1.5 1.25.5 2 .25h11l4.75-.5 2-.75 2-1.75 1.25.25 2 .5v.5l1.25.5-.5.5-8.5 2-2.5.25-5.5.25h-10.75l-1 1-.25.5-.25 3.5-1 .25-3-1.5-3-2.25-1.75-1.75-1.25-2 .25 9 .5 8.25.25 6.75v6.5l-1.25.25-.25-.25-.5-15-.5-9.75-.5-14-.5-9v-7.5z"
              stroke="#ebe2c4"
            />
            <path
              d="M215.25 193l2.25.25 2 1.25.25 1.25v30.75l-.5 5.25-.5 3.75-.25.25-1.75-.25-1.5-1.25-.5-3L215 195l.25-2zM39.75 192.75h.75l.25.5v41l-1.5 1.25-2 .25-.75-4.75-.25-4.5v-21.75l.25-9.25h-5v-1l6.25-1 2-.75zM102.25 182h50.25l4.25 2.25.5 1.25-59.5.25-.5-.25.25-.75 1.25-.25h12l.25-.75-1.75-.25-7-.25-.25-1 .25-.25zM36.5 135.5l1.5.25v.5l2 .25 1 .75-.25 1-.5 1 .75-1 1.5-.25 1.25.5-.25 2.25 1.75-.25 2.5.25.75-.75h.5l.5 1.25h1l.75-.75H53l-.5 1.25-.75.25h2.75l.25-1 .75-.25 1 .5.25 1.5v3l-.5 1.25-2 .75-2 .25-3-.5-4-2 2.5 1.5 2.25 1v1l-1.5.75-2 .5h-1.75l-3-1.25-2.25-1.75-2.25-2v-1l1.5-.5L37 144l-.5-.5-.25-2.25 1-3-.5-1-1.5-.75v-.5l1.25-.5zM167 231h5.25l16.75.25v.75l-1.25 1.25-.25 1 3.25 2.5v.75h-23.5l-1.25-2.75-.25-1v-2.25l1.25-.5zM129.75 192.75h31.5l3 .25.5.25v.5l-1.5.25h-15.5v.5l3 .25 1.75.25-.25.75H149l.5.25 4.25.25 14 .25.75 1-5 .25h-33l-1-1.5-.25-.75v-2.25l.5-.5zM23.75 237l1 .25-.25 1-1.5.75-1 2-.75 1.75-.5.5v.75l2.75 1 3 .75h9.75L41 245l2.75-1 2.5-1.75 2.5-2.5 1-.25 1 .25.5-.75 1.75-.25.25 1-1 1-1.75-.25-2.25 2.25h-.5l-2.25 1.75-4 2-6 1h-5l-5.25-.75-5.25-1.5-2-1.25.5-1.25 2-2.25 1.25-2.25 1-.75 1-.5zM221.25 160.25H223l.75.5 1.25.25.25-.75h4.5l.75 1 .25 1-.25.25H229v.5l1.25.5.25.25v3.75l-.5.5-2 .25h-2.75l-.5-.5-1.5.5h-4.75l5.25.25.5.25v2l-1 .5 1 .5v2l-.75.5h-4.75l-1-.5-.25-.5-.5.25-.25-1.25-.5.25v-7.25l.25-2 .25-.5 1 .25.5-.25h5.5l.5.75h.5l.5-1H218l.25-1.75 3-.5zM216.75 135.5l1 .25 1.75-.25h1.75l-.75.75-1.75 1V139l.5 2v2l-.5.75-2.5-.25 2 .75-.5 1.5-2 2-2.5 1.75-2 .75-2.5-.25-2.75-.75-.25-1 1-.75-1 .25h-3.25l-.75-.25-.25-4.75.5-.5 1-.25v-1.25l1 .25v1h2l-.25-1.25.75-.25 2.25.75.5.25.5-.25v-1l1.25.25 1 1 1.25-.25.5-.75 1 .25.5 1.25 1-.5-.25-1.75-1.25-2V137l1.25-.75-.25-.5 1-.25zM82.75 222.5H94.5l.25 1-1.5 3.5-2 2-.5.25H69.5l-4.75-.25 1-1.75L67.5 226l2.25.5H74l.5-.5 3.75-.5.75-.5-3.5-1.75v-.5l7.25-.25zM147 199h22l1 .25.75 1.25.25 2.25-.75 1.5-.75.5-2 .25-4.75.25H151.5l-1.25-.5-1.75-2.25-1.75-2.75.25-.75zM105 177.75h36.25l.75 1.75v1.25l-1.75.5H115.5l-13.25-.5-1-.25.5-1 1.5-1.5 1.75-.25zM47.75 174.25l.5.25-.5 5.5 1.5-1 1.75-2 .75-1.25 1 .25v3.5l-1.5 2.5-2.5 2.5-2.5 1.5-2.25 1-.75-.25-.25-3-.75-1.5-.5-.5H27l-4-.25-4.75-1-4-1.25-.25-1 3.75-1 1.25.25 2.25 1.5 2 .75L25 180h11.5l4.25-.25 2-1 2.5-2.25 1.25-1.25 1.25-1zM81.25 206.75h17l.75.25.25 1.25-.75 3-.75 1.25-4.75.25H83l-2.5-.5-2-1-.25-1 1-1.75-.75-.25V208l2.5-.25.25-1zM106.75 192.75h20.5l.5.25 1.25 3.25v1.25l-.5.25h-22.25l-.25-.25v-3.25l.75-1.5zM76.25 35h.25v8.25l-.25 5.25H76v2.25l.25-.25h41.25v1l-1.25.25-3.5.25h-24.5l-8-.25L76 51.5l-.5 9.25 2.75-.25v.25l5 .25.5.5H76.5l-1.25-.25-.75-1.75H74v-7.25L74.5 41l.25-3.5.5-1.5 1-.5V35z"
              stroke="#ebe2c4"
            />
            <path
              d="M21.75 237.75l.5.25-1.25 2-1.75 2.25-1 1.25.25.75 2 1 5.75 1.5 4.25.5h5l6-1 4-2 2.5-2v.75l-2.75 2.25-4 2-3.5.75-5 .25-5.5-.5-6.25-1.5-4-1.25h-1.25l.75.5 3.5 1.75 3.75 1 4.5.75h8.5l4.25-.75 3.25-1.25H45l-.25.75-1.25 1-1.25.5.75 2.25.5-.25.5-1.5 4-4 1.5-1.25.75.25.5 4.5.5.5 1.25-2 .5-1 .25.5-1 2.5-2 2.25-3 1.75-3.5 1.25-3.5.75-2 .25h-10l-4.75-.5-5.25-1-3-1-1.25-1-.5-1.5v-4l.75-2.5 4.75-4.75 2.75-2zM206.75 157l3 .25.5 1.25 4 .25.75.5.25 1.75v10l-.5 6.75-1.5-.75-1.75-1.5-1.25-1.75-.25-8.25v-6.25l-.25.25H208l-2-1.5.25-.75.5-.25zM26.5 160.25H30l.75.5 2.75-.5h3l1.25.75.25 1.25-.5.25H32v.5l1.25-.25H38l.25.75v4.5l-.25.25h-5.25l-1.75-.5-.5.25H26l-.5-.25v-4.25l.5-.5-.75-.5V161l.25-.5 1-.25zM74.25 54h.25l.25 5.5.25-2h.25v9.75l-.5 15.25L74 97.75l-.5 13-.25 4.25-.5 4h-1v-6.75l.75-21.75 1.25-30 .25-1 .25-5.5zM197.75 50.5H225v11l-16.75.25h-9.5l-.75-.5-.25 5.25h-.25v-6.25h26l.25-8.25H200l-2.25-.25-.25-1 .25-.25zM204.5 239.75l1.25.25 2 2.75 2.25 2 2.25 1.25 2.75 1 3 .75 2.25.25h4.5l4.5-.5 7.5-2 2.25-.75h1.5v.75l-4.75 2-4.75 1.25-3 .5-5.25.25-4.25-.25-4.5-1-2.5-1-.75-.5 1.5 1.75 1.5.25.25.75-1.5 2h-.5l-.75-2-2.5-2.5-2.25-1.75-.75-.25-.5 1.75-.25 3-1-.5-1-1.25-.5.25-.25-1.25v-2.5l.75-2.5 1.5-2.25zM45.25 157.75l.5.25v13.25l-.25 2.25-1 1.5-2.25 2.25-1 .5L41 177v-18l1-.75 1.25.25.25 1 .5-1.25 1.25-.5zM197.25 80.25h.25v2l-.25.5h.5V84h.5v6.5l.25.25V101l.25 1.75h.25v3.5h-.25V110l.5.25.25-3h.25l.75 21.25.25 3.5.25 11.25V148l.75.25-.25 1.25-1 1.25-1 .75h-.75l-.75-2 .25-1.25 1.75-.5-.5-2.75-.75-20.5-.75-19-.25-6.75-.75-12.5V81l.25-.75zM165.75 214.5h7.75l4.75.25.5 1-1.25.75-1 .25v.5l1.5.75h1.75l.5 1.25 1.5-.25 1.5.5.25.75-1 .25h-15.25l-1.5-2.25-1.25-2.75v-.75l1.25-.25zM200.25 154.75l.75.25.5 1 .25 1.5.5 8.5.25 8.5.25 4.25.25 9.75.5 8.25.25 6.75v6.5l-1.25.25-.25-.25-.5-15-.5-9.75-.5-14-.5-9v-7.5zM105.25 174H133l.75 1.25v1.5l-.25.25H107l-4.5-.25v-.5l7.25-.5 2.25-.25.5-.75H107l-2-.25.25-.5zM127.5 26h8l3.75.25.25.25.25 8.25.5 1.25.5.25V35h.25v1.75h.5l.25-.5.25 1V44l-.5-1-.25 2-2-.25-1-.25-.25-.5-.25-16.25-16.25-.25-1-.25.25-1 6.75-.25zM27.25 194.25h.5l.5 2.5.25 3v14l-.5 8.5-.25 10.25.25 2.5.25.25 1.25-.25 2.75.5 2.75.25v.75l-1.25.5h-2.5l-2.75-.75.5 1.5-1-.25-1-1-.75-1.75-.25-2 .25-9.25.5-9 .25-19.75.25-.5zM228 194.75l.75.25v15.75l.5 10 .75 11.75-.75 2-1.75 1.5-2 .75-1.5.25h-3.5l.25-1 5-1 1.5-.75 1-1.25.25-.5V230l-.75-6.75-.5-6.5-.25-7v-6.25l.25-6.25.5-2.25.25-.25z"
              stroke="#ebe2c4"
            />
            <path
              d="M122.25 29h14.5l.25.25-.25 18.5-1 .25-.25-6.75V31.5l.25-1h-12.5V51l-.75.5-.25-.5V29zM141.75 50.5h41v1L178 52h-36l-.5-.75.25-.75zM23.75 237l1 .25-.25 1-1.5.75-1 2-.75 1.75-.5.5v.75l2.75 1 3 .75h9.75L41 245l2.75-1 2.5-1.75 2.5-2.5 1-.25 1 .25.5-.75 1.75-.25.25 1-1 1-1.75-.25-2.25 2.25h-.5l-2.25 1.75-4 2-6 1h-5l-5.25-.75-5.25-1.5-2-1.25.5-1.25 2-2.25 1.25-2.25 1-.75 1-.5zM97.75 192.5l6.5.25.75.75.5 2.25v1.5l-.75.5H97l-9-.25-1.75-1.25.25-1.25 1.25-.75h.5l.5 1.75 5.25-.25 3.75-.75h.75l-.75-1.25-.5-1 .5-.25zM231.25 237.25l1.5.25 1.25 1 1.5 2.5 1.5 1.75 1 .75v.5l-3.5 1.75-3.5 1-5 .75h-6.75l-5-1-3-1.25-2.25-1.5-1.25-1.25-1.5-2.25v-.5l1.25.5 2.25 2.25 2.75 1.75 3.25 1 3.5.5h10.25l4.75-1.25 1-.5-.5-1-.75-1-1.5-3.25-1.25-.75v-.75zM216.75 162.75l1.5.5.25 5 5.25.25.5.25v2l-1 .5 1 .5v2l-.75.5h-4.75l-1-.5-.25-.5-.5.25-.25-1.25-.5.25v-7.25l.25-2 .25-.5z"
              stroke="#ebe2c4"
            />
          </svg>
        </div>
      </section> */}

      {/* Section - 3 */}
      <section>
        <GradientLinesContainer>
          {source.map((item, index) => (
            <GradientLineItem key={item.id} index={index} img={item.img} />
          ))}
        </GradientLinesContainer>

        <div className="h-dvh bg-neutral-950" />
      </section>
    </>
  );
}

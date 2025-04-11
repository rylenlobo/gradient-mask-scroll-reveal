import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export function LenisScroll({ children }: { children: ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

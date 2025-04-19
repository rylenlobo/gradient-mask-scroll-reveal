import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export function LenisScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

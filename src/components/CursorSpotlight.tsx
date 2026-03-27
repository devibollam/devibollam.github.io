import { useEffect, useRef } from "react";

type Props = {
  enabled?: boolean;
};

export default function CursorSpotlight({ enabled = true }: Props) {
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef<{ x: number; y: number } | null>(null);
  const trailRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const mediaReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mediaTouch = window.matchMedia("(pointer: coarse)");
    if (mediaReduce.matches || mediaTouch.matches) return;

    const root = document.documentElement;

    const onMove = (e: PointerEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!trailRef.current) trailRef.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      const target = targetRef.current;
      const trail = trailRef.current;

      if (target && trail) {
        trail.x += (target.x - trail.x) * 0.16;
        trail.y += (target.y - trail.y) * 0.16;

        root.style.setProperty("--spot-x", `${target.x}px`);
        root.style.setProperty("--spot-y", `${target.y}px`);
        root.style.setProperty("--spot-tx", `${trail.x}px`);
        root.style.setProperty("--spot-ty", `${trail.y}px`);
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    const startX = Math.round(window.innerWidth * 0.55);
    const startY = Math.round(window.innerHeight * 0.35);
    targetRef.current = { x: startX, y: startY };
    trailRef.current = { x: startX, y: startY };
    root.style.setProperty("--spot-x", `${startX}px`);
    root.style.setProperty("--spot-y", `${startY}px`);
    root.style.setProperty("--spot-tx", `${startX}px`);
    root.style.setProperty("--spot-ty", `${startY}px`);

    window.addEventListener("pointermove", onMove, { passive: true });
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 mix-blend-screen"
        style={{
          background: [
            "radial-gradient(560px circle at var(--spot-x) var(--spot-y), rgba(34,197,94,0.16), rgba(59,130,246,0.10) 30%, rgba(0,0,0,0) 66%)",
            "radial-gradient(380px circle at var(--spot-tx) var(--spot-ty), rgba(56,189,248,0.16), rgba(0,0,0,0) 70%)",
          ].join(","),
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-55 spot-ambient"
      />
    </>
  );
}


import { useEffect, useRef } from "react";

type Props = {
  enabled?: boolean;
};

export default function CursorSpotlight({ enabled = true }: Props) {
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;

    const update = () => {
      rafRef.current = null;
      if (!lastRef.current) return;
      root.style.setProperty("--spot-x", `${lastRef.current.x}px`);
      root.style.setProperty("--spot-y", `${lastRef.current.y}px`);
    };

    const onMove = (e: PointerEvent) => {
      lastRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    // Set a safe initial position (center-ish).
    root.style.setProperty("--spot-x", `${Math.round(window.innerWidth * 0.55)}px`);
    root.style.setProperty("--spot-y", `${Math.round(window.innerHeight * 0.35)}px`);

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(59,130,246,0.14), rgba(34,197,94,0.06) 35%, rgba(0,0,0,0) 70%)",
      }}
    />
  );
}


import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * 3D scroll-rotating cutout image.
 * - Scroll DOWN → spins RIGHT (clockwise, Y-axis)
 * - Scroll UP   → spins LEFT  (counter-clockwise, Y-axis)
 *
 * Best used with transparent PNG images (person cutouts).
 */
export default function Scroll3DRotateImage({
  src,
  alt = "",
  className = "",
  maxRotation = 25,       // subtle is better for people
  perspective = 1200,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Y-axis rotation (main spin)
  const rotateY = useTransform(
    scrollYProgress,
    [0, 1],
    [-maxRotation, maxRotation]
  );

  // X-axis tilt — subtle leaning gives more dimension
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [8, 0, -8]
  );

  // Vertical float as you scroll
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Depth shadow that follows rotation
  const shadowX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [30, 0, -30]
  );
  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 0.2, 0.5]
  );

  // Smooth springs
  const smoothRotateY = useSpring(rotateY, { stiffness: 60, damping: 18 });
  const smoothRotateX = useSpring(rotateX, { stiffness: 60, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 });

  return (
    <div
      ref={ref}
      style={{ perspective: `${perspective}px` }}
      className="relative inline-block"
    >
      {/* Depth shadow — moves opposite to rotation for 3D illusion */}
      <motion.div
        style={{
          x: shadowX,
          opacity: shadowOpacity,
          rotateY: smoothRotateY,
        }}
        className="absolute inset-0 -z-10 rounded-3xl bg-accent/40 blur-3xl"
      />

      {/* The cutout image itself */}
      <motion.img
        src={src}
        alt={alt}
        style={{
          rotateY: smoothRotateY,
          rotateX: smoothRotateX,
          y: smoothY,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          backfaceVisibility: "hidden",
        }}
        className={className}
        draggable={false}
      />
    </div>
  );
}
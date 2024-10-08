import confetti from "canvas-confetti";

export const getBubbleEffect = ({
  origin,
}: {
  origin: { x: number; y: number };
}) => {
  return confetti({
    particleCount: 10,
    spread: 360,
    origin: origin,
    gravity: -0.1,
    // @ts-ignore
    flat: true,
    decay: 0.9,
    startVelocity: 10,
    shapes: ["circle"],
    colors: ["#ECFFCE"],
  });
};

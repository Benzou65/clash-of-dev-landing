import confetti from "canvas-confetti";

export const getWeaponEffect = ({
  origin,
  emoji,
  angle,
}: {
  origin: { x: number; y: number };
  emoji: Array<"swords" | "palette" | "brush" | "dagger" | "shield">;
  angle: number;
}) => {
  const swords = confetti.shapeFromText({ text: "⚔️", scalar: 15 });
  const palette = confetti.shapeFromText({ text: "🎨", scalar: 15 });
  const brush = confetti.shapeFromText({ text: "🖌️", scalar: 15 });
  const dagger = confetti.shapeFromText({ text: "🗡️", scalar: 15 });
  const shield = confetti.shapeFromText({ text: "🛡️", scalar: 15 });

  const emojiObject = {
    swords,
    palette,
    brush,
    dagger,
    shield,
  };

  return confetti({
    spread: 20,
    ticks: 200,
    gravity: 0,
    decay: 0.9,
    startVelocity: 90,
    shapes: emoji.map((emoji) => emojiObject[emoji]),
    angle: angle,
    origin: origin,
    particleCount: 5,
    // @ts-ignore
    flat: true,
    scalar: 5,
  });
};

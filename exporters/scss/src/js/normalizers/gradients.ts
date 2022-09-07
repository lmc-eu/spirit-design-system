type AngleShape = {
  x: number;
  y: number;
};

export function normalizeGradientAngle(from: AngleShape, to: AngleShape): number {
  const deltaY = to.y - from.y;
  const deltaX = to.x - from.x;
  const radians = Math.atan2(deltaY, deltaX);
  let result = (radians * 180) / Math.PI;
  result += 90;

  return (result < 0 ? 360 + result : result) % 360;
}

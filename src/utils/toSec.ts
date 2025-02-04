export const toSec = (time: number) => {
  const a = Math.floor(time / 1000) % 60;
  return a;
};

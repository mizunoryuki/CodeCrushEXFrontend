export const toMin = (time: number) => {
  const a = Math.floor(time / 1000 / 60) % 60;
  return a;
};

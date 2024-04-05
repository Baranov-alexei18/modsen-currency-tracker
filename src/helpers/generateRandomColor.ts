export const generateRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 3; i += 1) {
    color += letters[Math.floor(Math.random() * 8)];
  }
  return color;
};

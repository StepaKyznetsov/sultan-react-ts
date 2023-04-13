export const decrement = (
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>
): void => {
  if (counter === 1) return;
  setCounter(counter - 1);
};

export const increment = (
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>
): void => {
  setCounter(counter + 1);
};

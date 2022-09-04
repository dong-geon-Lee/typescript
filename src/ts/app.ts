export const add = (numbers: number[]) => {
  return numbers.reduce((cur, acc) => {
    return cur + acc;
  });
};

const addedNumbers = add([5, 1, 2, 3]);

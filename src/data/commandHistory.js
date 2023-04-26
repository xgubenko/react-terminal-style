const commandHistory = [];
let commandIdx = 0;

export const increaseIdx = () => {
  commandIdx++;
};

export const reduceIdx = () => {
  commandIdx--;
};

export const getIdx = () => {
  return commandIdx;
};

export const setIdx = (value) => (commandIdx = value);

export default commandHistory;

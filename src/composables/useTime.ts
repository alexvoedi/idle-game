export const useTime = () => {
  const toTimeString = (timestamp = 0) => {
    const date = new Date(timestamp);

    return date.toLocaleTimeString();
  };

  const toDateString = (timestamp = 0) => {
    const date = new Date(timestamp);

    return date.toLocaleDateString();
  };

  return {
    toTimeString,
    toDateString,
  };
};

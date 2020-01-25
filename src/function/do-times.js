const doTimes = (n, fn) => {
  return Array.from(Array(n), (_, i) => fn(i));
};

export default doTimes;

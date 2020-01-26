const doTimes = (n, fn) => {
  return Array.from(Array(n), (_, i) => fn(i));
};

const formatDecimal = num => num.toFixed(2);

export { doTimes, formatDecimal };

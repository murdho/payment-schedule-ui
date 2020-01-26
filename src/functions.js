// doTimes executes the function specified number of times.
const doTimes = (n, fn) => {
  return Array.from(Array(n), (_, i) => fn(i));
};

// formatDecimal formats a number to 2 decimal places.
const formatDecimal = num => num.toFixed(2);

export { doTimes, formatDecimal };

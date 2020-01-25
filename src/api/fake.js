import doTimes from "../function/do-times";

const delay = result => {
  return new Promise(resolve => setTimeout(() => resolve(result), 1000));
};

const fakeAPI = {
  calculate: ({ loanAmount, periodMonths }) => {
    console.log("Calculate: ", { loanAmount, periodMonths });
    return delay({ rows: doTimes(periodMonths + 1, n => ({ n: n })) });
  }
};

export default fakeAPI;

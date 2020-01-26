import doTimes from "../function/do-times";

// const ARTIFICIAL_DELAY = 1000;
const ARTIFICIAL_DELAY = 0;

const fakeAPI = {
  calculate: ({ productID, amount, period, paymentDay }) => {
    const product = productByID(productID);
    const interestRatePrc = product.interestRate / 100;
    const balanceWithInterest = amount * (1 + interestRatePrc);
    const balanceSubtrahend = balanceWithInterest / period;

    const today = new Date();
    const firstPaymentMonth =
      today.getDay() < paymentDay ? today.getMonth() + 1 : today.getMonth() + 2;

    const firstPaymentDate = new Date(
      today.getFullYear(),
      firstPaymentMonth,
      paymentDay
    );

    return delay({
      rows: doTimes(period + 1, n => {
        let date;
        if (n === 0) {
          date = today;
        } else {
          date = new Date(firstPaymentDate.getTime());
          date.setMonth(firstPaymentDate.getMonth() + n - 1);
        }

        const balance = balanceWithInterest - balanceSubtrahend * n;
        const principal = Math.random() * 100;
        const interest = Math.random() * 10;
        const additionalFees = Math.random();
        const monthlyPayment = principal + interest + additionalFees;

        return {
          n: n,
          date: date.toLocaleDateString("fi-FI"),
          balance: balance,
          principal: principal,
          interest: interest,
          additionalFees: additionalFees,
          monthlyPayment: monthlyPayment
        };
      })
    });
  },

  products: () => {
    return delay(products);
  }
};

const products = {
  products: [
    {
      id: "ae592251-eaaa-404c-b13a-f20f82f5ac68",
      name: "Small loan",
      periods: [3, 6, 9, 12, 18, 24, 36, 48, 60],
      paymentDays: [5, 10, 15, 20],
      minAmount: 250,
      maxAmount: 10000,
      interestRate: 20
    },

    {
      id: "604e9aef-84a2-4909-a98e-53c747842e8e",
      name: "Car loan",
      periods: [6, 12, 24, 36, 48, 60],
      paymentDays: [1, 5, 15],
      minAmount: 1000,
      maxAmount: 25000,
      interestRate: 10
    }
  ]
};

const productByID = productID => {
  for (let product of products.products) {
    if (product.id === productID) {
      return product;
    }
  }
};

const delay = result => {
  return new Promise(resolve =>
    setTimeout(() => resolve(result), ARTIFICIAL_DELAY)
  );
};

export default fakeAPI;

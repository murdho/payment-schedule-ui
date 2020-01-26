import { doTimes } from "../functions";
import CONFIG from "../config";

const ARTIFICIAL_DELAY = 500;
// const ARTIFICIAL_DELAY = 0;

const fakeAPI = {
  calculate: ({ productID, amount, period, paymentDay }) => {
    const product = productByID(productID);
    if (!product) {
      return delayReject(`Product with ID ${productID} not found`);
    }

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

    const calculateRow = n => {
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
        date: date.toLocaleDateString(CONFIG.locale),
        balance: balance,
        principal: principal,
        interest: interest,
        additionalFees: additionalFees,
        monthlyPayment: monthlyPayment
      };
    };

    return delayResolve({
      rows: doTimes(period + 1, calculateRow)
    });
  },

  products: () => {
    return delayResolve(products);
  }
};

const products = {
  products: [
    {
      id: "ae592251-eaaa-404c-b13a-f20f82f5ac68",
      name: "Smaller loan",
      periods: [3, 6, 9, 12, 18, 24, 36, 48, 60],
      paymentDays: [5, 10, 15, 20],
      minAmount: 250,
      maxAmount: 10000,
      interestRate: 20
    },

    {
      id: "604e9aef-84a2-4909-a98e-53c747842e8e",
      name: "Bigger loan",
      periods: [6, 12, 24, 36, 48, 60, 72],
      paymentDays: [1, 5, 15],
      minAmount: 5000,
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

const delayResolve = value => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ARTIFICIAL_DELAY);
  });
};

const delayReject = reason => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(reason), ARTIFICIAL_DELAY);
  });
};

export default fakeAPI;

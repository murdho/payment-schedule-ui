import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { paymentScheduleAPI } from "./payment-schedule-api";
import CONFIG from "./config";

const CalculatorInput = ({ calculate }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productError, setProductError] = useState(null);
  const [activeProductID, setActiveProductID] = useState("");
  const [activeProduct, setActiveProduct] = useState({
    minAmount: 0,
    maxAmount: 0,
    periods: [],
    paymentDays: []
  });

  const [amount, setAmount] = useState(0);
  const [period, setPeriod] = useState(0);
  const [paymentDay, setPaymentDay] = useState(0);

  useEffect(() => {
    // TODO: report the error to tracker.
    // eslint-disable-next-line no-console
    if (productError) console.error(productError);
  }, [productError]);

  useEffect(() => {
    for (let product of products) {
      if (product.id === activeProductID) {
        setActiveProduct(product);
        break;
      }
    }
  }, [activeProductID]);

  useEffect(() => {
    setPeriod(activeProduct.periods[0]);
    setPaymentDay(activeProduct.paymentDays[0]);
  }, [activeProduct]);

  useEffect(() => {
    if (activeProductID && amount && period && paymentDay) {
      calculate({ productID: activeProductID, amount, period, paymentDay });
    }
  }, [activeProductID, amount, period, paymentDay]);

  useEffect(() => {
    paymentScheduleAPI
      .products()
      .then(({ products }) => {
        setProducts(products);

        if (products.length) {
          setActiveProductID(products[0].id);
          setActiveProduct(products[0]);
          setAmount(Math.round(products[0].maxAmount / 2));
        }
      })
      .catch(reason => setProductError(reason))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Form>
      {productError ? (
        <Alert variant="danger">
          There was an error loading the product list. Please refresh the page.
        </Alert>
      ) : null}

      <Form.Group>
        <Form.Label htmlFor="product">
          Product {loading ? <Spinner animation="border" size="sm" /> : null}
        </Form.Label>
        <Form.Control
          as="select"
          name="product"
          disabled={!products.length}
          value={activeProductID}
          onChange={e => setActiveProductID(e.target.value)}
          onBlur={e => setActiveProductID(e.target.value)}
        >
          {!products.length ? (
            <option />
          ) : (
            products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name} with interest rate {product.interestRate}%
              </option>
            ))
          )}
        </Form.Control>
        <Form.Text className="text-muted">
          Choose a financing product you fancy.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="amount">Amount</Form.Label>
        <InputGroup>
          <Form.Control
            type="number"
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            isInvalid={
              amount < activeProduct.minAmount ||
              amount > activeProduct.maxAmount
            }
          />
          <InputGroup.Append>
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Form.Text className="text-muted">
          Enter an amount between{" "}
          {activeProduct.minAmount.toLocaleString(CONFIG.locale)} and{" "}
          {activeProduct.maxAmount.toLocaleString(CONFIG.locale)}.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="period">Period</Form.Label>
        <Form.Control
          as="select"
          name="period"
          disabled={!activeProduct.periods.length}
          value={period}
          onChange={e => setPeriod(parseInt(e.target.value))}
          onBlur={e => setPeriod(parseInt(e.target.value))}
        >
          {!activeProduct.periods.length ? (
            <option />
          ) : (
            activeProduct.periods.map(period => (
              <option key={period} value={period}>
                {period} months
              </option>
            ))
          )}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="paymentDay">Payment Day</Form.Label>
        <Form.Control
          as="select"
          name="paymentDay"
          disabled={!activeProduct.paymentDays.length}
          value={paymentDay}
          onChange={e => setPaymentDay(parseInt(e.target.value))}
          onBlur={e => setPaymentDay(parseInt(e.target.value))}
        >
          {!activeProduct.paymentDays.length ? (
            <option />
          ) : (
            activeProduct.paymentDays.map(paymentDay => (
              <option key={paymentDay} value={paymentDay}>
                {paymentDay}
              </option>
            ))
          )}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default CalculatorInput;

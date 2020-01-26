import { paymentScheduleAPI } from "./payment-schedule-api";
import fakeAPI from "./payment-schedule-api/fake-api";

test("paymentScheduleAPI", () => {
  expect(paymentScheduleAPI).toStrictEqual(fakeAPI);
});

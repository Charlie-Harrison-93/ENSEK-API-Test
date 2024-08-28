import {test} from '@playwright/test';
import {OrderSteps} from "../../steps/orderSteps";

const orderSteps = new OrderSteps();

test('Checking how many orders were created before the current date', {
    tag: ['@smoke', '@orders'],
  }, async () => {
    await orderSteps.WhenIRequestAllOrders();
    const numberOfOrders = await orderSteps.ThenICanSeeAllOrdersCreatedBeforeToday()
    console.log(`The number of orders created before the current date is ${numberOfOrders}`)
  });
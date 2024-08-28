import {test} from '@playwright/test';
import {BuySteps} from "../../Steps/buySteps";
import {ResetSteps} from "../../Steps/resetSteps";
import {OrderSteps} from "../../Steps/orderSteps";

const buySteps = new BuySteps();
const resetSteps = new ResetSteps();
const orderSteps = new OrderSteps();

test.beforeEach(async () => {
    await resetSteps.GivenIHaveResetTheStockQuantities();
  });

test('Buying Electicity Energy Type	Creates an Order', {
    tag: ['@smoke', '@order'],
  }, async () => {
    await buySteps.whenIBuyElectricityWithAQuantityOf(1);
    const orderId = await buySteps.andIRecieveAnOrderId();
    await orderSteps.WhenIRequestAllOrders();
    await orderSteps.ThenICanSeeTheOrderIHavePlaced(orderId)
  });

  test('Buying Gas Energy Type	Creates an Order', {
    tag: ['@smoke', '@order'],
  }, async () => {
    await buySteps.whenIBuyGasWithAQuantityOf(1);
    const orderId = await buySteps.andIRecieveAnOrderId();
    await orderSteps.WhenIRequestAllOrders();
    await orderSteps.ThenICanSeeTheOrderIHavePlaced(orderId)
  });

  test('Buying Nuclear Energy Type Creates an Order', {
    tag: ['@smoke', '@order'],
  }, async () => {
    await buySteps.whenIBuyNuclearWithAQuantityOf(1);
    const orderId = await buySteps.andIRecieveAnOrderId();
    await orderSteps.WhenIRequestAllOrders();
    await orderSteps.ThenICanSeeTheOrderIHavePlaced(orderId)
  });

  test('Buying Oil Energy Type	Creates an Order', {
    tag: ['@smoke', '@order'],
  }, async () => {
    await buySteps.whenIBuyOilWithAQuantityOf(1);
    const orderId = await buySteps.andIRecieveAnOrderId();
    await orderSteps.WhenIRequestAllOrders();
    await orderSteps.ThenICanSeeTheOrderIHavePlaced(orderId)
  });
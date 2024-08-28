import {test} from '@playwright/test';
import {BuySteps} from "../../steps/buySteps";
import {ResetSteps} from "../../steps/resetSteps";
import {OrderSteps} from "../../steps/orderSteps";
import {EnergySteps} from "../../steps/energySteps";
import {EnergyTypes} from "../../enum/energyTypes";

const buySteps = new BuySteps();
const resetSteps = new ResetSteps();
const orderSteps = new OrderSteps();
const energySteps = new EnergySteps();

test.beforeEach(async () => {
    await resetSteps.GivenIHaveResetTheStockQuantities();
  });

test('Buying Electicity Energy Type	Creates an Order', {
    tag: ['@smoke', '@order'],
  }, async () => {
    await energySteps.GivenThereAreQuantityOfUnitsAvailableFor(EnergyTypes.Electric)
    await buySteps.whenIBuyElectricityWithAQuantityOf(1);
    const orderId = await buySteps.andIRecieveAnOrderId();
    await orderSteps.WhenIRequestAllOrders();
    await orderSteps.ThenICanSeeTheOrderIHavePlaced(orderId)
  });

  test('Buying Gas Energy Type	Creates an Order', {
    tag: ['@smoke', '@order'],
  }, async () => {
    await energySteps.GivenThereAreNotQuantityOfUnitsAvailableFor(EnergyTypes.Gas)
    await buySteps.whenIBuyGasWithAQuantityOf(1);
    const orderId = await buySteps.andIRecieveAnOrderId();
    await orderSteps.WhenIRequestAllOrders();
    await orderSteps.ThenICanSeeTheOrderIHavePlaced(orderId)
  });

  test('Buying Nuclear Energy Type Creates an Order', {
    tag: ['@smoke', '@order'],
  }, async () => {
    await energySteps.GivenThereAreNotQuantityOfUnitsAvailableFor(EnergyTypes.Nuclear)
    await buySteps.whenIBuyNuclearWithAQuantityOf(1);
    await buySteps.ThenIRecieveMessage('There is no nuclear fuel to purchase!');  
  });

  test('Buying Oil Energy Type	Creates an Order', {
    tag: ['@smoke', '@order'],
  }, async () => {
    await energySteps.GivenThereAreQuantityOfUnitsAvailableFor(EnergyTypes.Oil)
    await buySteps.whenIBuyOilWithAQuantityOf(1);
    const orderId = await buySteps.andIRecieveAnOrderId();
    await orderSteps.WhenIRequestAllOrders();
    await orderSteps.ThenICanSeeTheOrderIHavePlaced(orderId)
  });
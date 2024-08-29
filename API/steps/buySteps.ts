import {expect} from '@playwright/test';
import {BuyAction} from "../actions/buyAction";
import {EnergyAction} from "../actions/energyAction";
import {EnergyTypes} from "../enum/energyTypes";

export class BuySteps {
    readonly buyAction = new BuyAction();
    readonly energyAction = new EnergyAction();
    private buyMessage: string;

    async whenIBuyElectricityWithAQuantityOf(quantity: number): Promise<string>  {
        const electricId = await this.energyAction.getEnergyId(EnergyTypes.Electric);
        this.buyMessage = await this.buyAction.putBuyBody(electricId, quantity);
        return this.buyMessage;
    }

    async whenIBuyGasWithAQuantityOf(quantity: number): Promise<string>  {
        const gasId = await this.energyAction.getEnergyId(EnergyTypes.Gas);
        this.buyMessage = await this.buyAction.putBuyBody(gasId, quantity);
        return this.buyMessage;
    }

    async whenIBuyNuclearWithAQuantityOf(quantity: number): Promise<string>  {
        const nuclearId = await this.energyAction.getEnergyId(EnergyTypes.Nuclear);
        this.buyMessage = await this.buyAction.putBuyBody(nuclearId, quantity);
        return this.buyMessage;
    }

    async whenIBuyOilWithAQuantityOf(quantity: number): Promise<string>  {
        const oilId = await this.energyAction.getEnergyId(EnergyTypes.Oil);
        this.buyMessage = await this.buyAction.putBuyBody(oilId, quantity);
        return this.buyMessage;
    }

    async ThenIRecieveMessage(expectedMessage: string): Promise<void>  {
        expect(expectedMessage).toBe(this.buyMessage);
    }
    
    async andIRecieveAnOrderId(): Promise<string>  {
        let message = this.buyMessage;
        const guidPattern = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;
        const orderId = message.match(guidPattern).toString();
        return orderId;
    }
}
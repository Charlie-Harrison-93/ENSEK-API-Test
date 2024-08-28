import { BuyResponse } from "API/models/buy/buyResponse";
import {BuyAction} from "../actions/buyAction";
import {EnergyAction} from "../actions/energyAction";
import {EnergyTypes} from "../enum/energyTypes";

export class BuySteps {
    readonly buyAction = new BuyAction();
    readonly energyAction = new EnergyAction();
    private buyMessage: BuyResponse;

    async whenIBuyElectricityWithAQuantityOf(quantity: number): Promise<string>  {
        const electricId = await this.energyAction.getEnergyId(EnergyTypes.Electric);
        this.buyMessage.message = await this.buyAction.putBuyBody(electricId, quantity);
        return this.buyMessage.message;
    }

    async whenIBuyGasWithAQuantityOf(quantity: number): Promise<string>  {
        const gasId = await this.energyAction.getEnergyId(EnergyTypes.Gas);
        this.buyMessage.message = await this.buyAction.putBuyBody(gasId, quantity);
        return this.buyMessage.message;
    }

    async whenIBuyNuclearWithAQuantityOf(quantity: number): Promise<string>  {
        const nuclearId = await this.energyAction.getEnergyId(EnergyTypes.Nuclear);
        this.buyMessage.message = await this.buyAction.putBuyBody(nuclearId, quantity);
        return this.buyMessage.message;
    }

    async whenIBuyOilWithAQuantityOf(quantity: number): Promise<string>  {
        const oilId = await this.energyAction.getEnergyId(EnergyTypes.Oil);
        this.buyMessage.message = await this.buyAction.putBuyBody(oilId, quantity);
        return this.buyMessage.message;
    }
    
    async andIRecieveAnOrderId(): Promise<string>  {
        let message = this.buyMessage.message;
        const guidPattern = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;
        const orderId = message.match(guidPattern).toString();
        return orderId;
    }
}
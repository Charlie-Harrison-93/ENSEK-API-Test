import {APIResponse} from '@playwright/test';
import {BuyController} from "../controllers/buyController";
import {BuyResponse} from "../models/buy/buyResponse";

export class BuyAction {
    readonly buyController = new BuyController();

    async putBuy(id: number, quantity: number): Promise<APIResponse>  {
        return await this.buyController.putBuy(id, quantity);
    }

    async putBuyBody(id: number, quantity: number): Promise<string>  {
        let buyResponse = await this.putBuy(id, quantity);
        let buyBody: BuyResponse = await buyResponse.json()
        return buyBody.message;
    }
}
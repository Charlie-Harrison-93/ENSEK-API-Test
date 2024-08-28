import {APIResponse} from '@playwright/test';
import { BaseApiContext } from 'API/baseApiContext';

const baseApiContext = new BaseApiContext();

export class BuyController {
    readonly buyPath = "ENSEK/buy";

    async putBuy(id: number, quantity: number): Promise<APIResponse> {
      const context = await baseApiContext.getContext();
      return await context.put(`/${this.buyPath}/${id}/${quantity}`); 
    }
}
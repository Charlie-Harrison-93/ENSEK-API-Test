import {APIResponse} from '@playwright/test';
import { BaseApiContext } from 'API/baseApiContext';

const baseApiContext = new BaseApiContext();

export class OrdersController {
    readonly ordersPath = "orders";

    async getAllOrders(): Promise<APIResponse> {
      const context = await baseApiContext.getContext();
      return await context.get(`${this.ordersPath}`); 
    }

    async getOrder(orderId: string): Promise<APIResponse> {
      const context = await baseApiContext.getContext();
      return await context.get(`${this.ordersPath}/${orderId}`); 
    }
}
import {APIResponse} from '@playwright/test';
import {OrdersController} from "../controllers/ordersController";

export class OrderAction {
    readonly ordersController = new OrdersController();

    async getAllOrders(): Promise<APIResponse>  {
        return await this.ordersController.getAllOrders();
    }

    async getOrderWithId(orderId:string): Promise<APIResponse>  {
        return await this.ordersController.getOrder(orderId);
    }
}
import {APIResponse} from '@playwright/test';
import {OrderAction} from "../actions/orderAction";
import { Orders } from 'API/models/orders/ordersResponse';

export class OrderSteps {
    readonly orderAction = new OrderAction();
    private allOrders: Orders;

    async WhenIRequestAllOrders(): Promise<void>  {
        const allOrdersResponse = await this.orderAction.getAllOrders();
        this.allOrders = await allOrdersResponse.json()
    }

    async ThenICanSeeTheOrderIHavePlaced(orderId: string): Promise<void>  {
        const order = this.allOrders.find( order => order.id == orderId)
        expect(order.id).toBe(orderId);
    }


    async ThenICanSeeAllOrdersCreatedBeforeToday(): Promise<number>  {
        const startOfDay = new Date(new Date().setHours(0, 0, 0, 0))
        const orderBeforeToday = this.allOrders.filter(order => order.time < startOfDay);
        return orderBeforeToday.length
    }

    
}
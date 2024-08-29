import {APIResponse, expect} from '@playwright/test';
import {OrderAction} from "../actions/orderAction";
import { Orders } from 'API/models/orders/ordersResponse';

export class OrderSteps {
    readonly orderAction = new OrderAction();
    private allOrders: Orders;

    async WhenIRequestAllOrders(): Promise<void>  {
        const allOrdersResponse = await this.orderAction.getAllOrders();
        this.allOrders = await allOrdersResponse.json();
    }

    async ThenICanSeeTheOrderIHavePlaced(expectedOrderId: string): Promise<void>  {
        const orderIds: string[] = this.allOrders.map(order => order.id ?? order.Id);
        expect(orderIds, 'order has not been created').toContain(expectedOrderId);
    }
    
    async ThenICanSeeAllOrdersCreatedBeforeToday(): Promise<number>  {
        const startOfDay = new Date(new Date().setHours(0, 0, 0, 0));
        const ordersWithDate = this.allOrders.map(order => ({ order,
            time: new Date(order.time)
        }));
        const orderBeforeToday = ordersWithDate.filter(order => order.time < startOfDay);
        return orderBeforeToday.length;
    }
}
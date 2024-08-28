import {APIResponse} from '@playwright/test';
import {ResetController} from "../controllers/resetController";

export class ResetAction {
    readonly resetController = new ResetController();

    async postResetOfStockQuantities(): Promise<APIResponse>  {
        return await this.resetController.postReset();
    }
}
import {ResetAction} from "../actions/resetAction";

export class ResetSteps {
    readonly resetAction = new ResetAction();

    async GivenIHaveResetTheStockQuantities(): Promise<void>  {
        await this.resetAction.postResetOfStockQuantities();
    }
}
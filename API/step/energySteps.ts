import {expect} from '@playwright/test';
import {EnergyAction} from "../actions/energyAction";
import {EnergyTypes} from "../enum/energyTypes";

export class EnergySteps {
    readonly energyAction = new EnergyAction();

    // are available
    async GivenThereAreQuantityOfUnitsAvailableFor(energyType: EnergyTypes): Promise<void>  {
        const qtyAvailable = await this.energyAction.getEnergyQty(energyType);
        expect(qtyAvailable, `the test should have Quantity Of Units Available`).toBeGreaterThan(0)
    }

    // not available
    async GivenThereAreNotQuantityOfUnitsAvailableFor(energyType: EnergyTypes): Promise<void>  {
        const qtyAvailable = await this.energyAction.getEnergyQty(energyType);
        expect(qtyAvailable, 'the test should NOT have Quantity Of Units Available').toBe(0)
    }
}
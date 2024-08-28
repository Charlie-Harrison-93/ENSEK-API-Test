import {APIResponse} from '@playwright/test';
import { BaseApiContext } from 'API/baseApiContext';

const baseApiContext = new BaseApiContext();

export class EnergyController {
    readonly energyPath = "energy";

    async getEnergy(): Promise<APIResponse> {
      const context = await baseApiContext.getContext();
      return await context.get(`${this.energyPath}`); 
    }
}
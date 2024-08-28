import {APIResponse} from '@playwright/test';
import { BaseApiContext } from 'API/baseApiContext';

const baseApiContext = new BaseApiContext();

export class ResetController {
    readonly resetPath = "ENSEK/reset";

    async postReset(): Promise<APIResponse> {
      const context = await baseApiContext.getContext();
      return await context.post(`${this.resetPath}`); 
    }
}
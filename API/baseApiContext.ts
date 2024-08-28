import {APIRequestContext, request} from '@playwright/test';
import testConfig from "../testConfig";

export class BaseApiContext {

    async getContext(): Promise<APIRequestContext> {
        return await request.newContext({
            baseURL: testConfig.apiUri,
        });
    }
}

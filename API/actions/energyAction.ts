import {APIResponse} from '@playwright/test';
import {EnergyController} from "../controllers/energyController";
import {Energy} from "../models/energy/energyResponse";
import {EnergyTypes} from "../enum/energyTypes";


export class EnergyAction {
    readonly energyController = new EnergyController();

    async getEnergy(): Promise<APIResponse> {
        return await this.energyController.getEnergy();
    }

    async getEnergyBody(): Promise<Energy> {
        let energyReponse = await this.getEnergy();
        let energyBody: Energy = await energyReponse.json();
        return energyBody;
    }

    async getEnergyId(energyType: EnergyTypes): Promise<number>{
        let energyBody = await this.getEnergyBody();
        
        switch(energyType){
            case EnergyTypes.Electric: {
                return energyBody.electric.energy_id
            }
            case EnergyTypes.Gas: {
                return energyBody.gas.energy_id
            }
            case EnergyTypes.Nuclear: {
                return energyBody.nuclear.energy_id
            }
            case EnergyTypes.Oil: {
                return energyBody.oil.energy_id
            }   
        }
    }
}
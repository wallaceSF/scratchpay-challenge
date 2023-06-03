import * as superagent from "superagent";

import {IClinicService} from "./interface/IClinicService";
import {IClinic} from "../models/IClinic";
import {VetClinicClient} from "../models/clients/VetClinicClient";

export class VetClinicService implements IClinicService {

    public static _endPoint: string = 'https://storage.googleapis.com/scratchpay-code-challenge';

    getClinic(): Promise<IClinic[] | null> {
        
        let promise = superagent.get(`${VetClinicService._endPoint}/vet-clinics.json`);
        
        return promise.then(response => {
            let clinicList: IClinic[] = [];
            
            response.body.forEach((vetClinic: VetClinicClient): void => {
                let clinic: IClinic = {
                    name: vetClinic.clinicName,
                    state: vetClinic.stateCode,
                    availability: {
                        from: vetClinic.opening.from,
                        to: vetClinic.opening.to
                    }
                };
                
                clinicList.push(clinic);
            });
            
            return clinicList;
        });
    }
}

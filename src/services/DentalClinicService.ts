import * as superagent from "superagent";

import {IClinicService} from "./interface/IClinicService";
import {IClinic} from "../models/IClinic";
import {DentalClinicClient} from "../models/clients/DentalClinicClient";

export class DentalClinicService implements IClinicService {

    public _endPoint: string = 'https://storage.googleapis.com/scratchpay-code-challenge';

    getClinic(): Promise<IClinic[] | null> {
        let promise = superagent.get(`${this._endPoint}/dental-clinics.json`);

        return promise.then(response => {
            let clinicList: IClinic[] = [];

            response.body.forEach((vetClinic: DentalClinicClient): void => {
                let clinic: IClinic = {
                    name: vetClinic.name,
                    state: vetClinic.stateName,
                    availability: {
                        from: vetClinic.availability.from,
                        to: vetClinic.availability.to
                    }
                };

                clinicList.push(clinic);
            });
            
            return clinicList;
        });
    }
}

import {IClinic} from "../models/IClinic";
import {VetClinicService} from "./VetClinicService";
import {DentalClinicService} from "./DentalClinicService";
import {ClinicRequest} from "../models/request/ClinicRequest";

export class ClinicService {
    private _vetClinicService: VetClinicService;
    private _dentalClinicService: DentalClinicService;

    constructor(vetClinicService: VetClinicService, dentalClinicService: DentalClinicService) {
        this._vetClinicService = vetClinicService;
        this._dentalClinicService = dentalClinicService;
    }
    
    public findClinicByFilter = async (clinicRequest: ClinicRequest): Promise<IClinic[] | null> => {

        let vetClinic = this._vetClinicService.getClinic();
        let dentalClinic = this._dentalClinicService.getClinic();

        return await Promise.all([vetClinic, dentalClinic])
            .then((clinicMultiList: IClinic[][]) => {
                let clinicList: IClinic[] = [...clinicMultiList[0], ...clinicMultiList[1]];

                return clinicList.filter((clinic: IClinic) => {
                    return clinic.name == clinicRequest.name ||
                        clinic.availability.from == clinicRequest.from ||
                        clinic.availability.to == clinicRequest.to ||
                        clinicRequest.state.includes(clinic.state);
                });
            });
    };
}

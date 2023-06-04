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
    
    private filterByRequest(clinicList: IClinic[], clinicRequest: ClinicRequest) {
        let clinicListFiltered: IClinic[] = clinicList.filter(
            (clinic: IClinic) =>
                (clinic.name == clinicRequest.name || clinicRequest.name == undefined) &&
                (clinic.availability.from == clinicRequest.from || clinicRequest.from == undefined) &&
                (clinic.availability.to == clinicRequest.to || clinicRequest.to == undefined)
        );

        let clinicLastFilterRemoveState = clinicListFiltered;

        if (clinicRequest.state != undefined) {
            clinicLastFilterRemoveState = [];

            clinicListFiltered.forEach(clinic => {
                if (clinicRequest.state.includes(clinic.state)) {
                    clinicLastFilterRemoveState.push(clinic);
                }
            });
        }
        
        return clinicLastFilterRemoveState;
    }

    public findClinicByFilter = async (clinicRequest: ClinicRequest): Promise<IClinic[] | null> => {
        let vetClinic = this._vetClinicService.getClinic();
        let dentalClinic = this._dentalClinicService.getClinic();

        return await Promise.all([vetClinic, dentalClinic])
            .then((clinicMultiList: IClinic[][]) => {
                let clinicList: IClinic[] = [...clinicMultiList[0], ...clinicMultiList[1]];
                
                return this.filterByRequest(clinicList, clinicRequest);
            });
    };
}

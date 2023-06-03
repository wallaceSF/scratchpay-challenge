import {IClinic} from "../../models/IClinic";

export interface IClinicService {
    getClinic(): Promise<IClinic[] | null>;
}

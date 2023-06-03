import {ClinicService} from "../services/ClinicService";
import {VetClinicService} from "../services/VetClinicService";
import {DentalClinicService} from "../services/DentalClinicService";

export class ClinicServiceFactory {
    public static createClinicService(): ClinicService {
        
        return new ClinicService(
            new VetClinicService(),
            new DentalClinicService()
        );
    }
}

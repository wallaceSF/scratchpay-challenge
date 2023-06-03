import {ClinicController} from "../controllers/ClinicController";

export class ClinicControllerFactory {
    
    public static createClinicController(): ClinicController
    {
        return new ClinicController();
    }
}

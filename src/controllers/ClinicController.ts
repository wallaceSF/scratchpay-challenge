import { Request, Response } from 'express';

import {ClinicService} from "../services/ClinicService";
import {ClinicRequest} from "../models/request/ClinicRequest";

export class ClinicController {

    public _clinicService: ClinicService;

    constructor(clinicService: ClinicService) {
        this._clinicService = clinicService;
    }

    public find(request: Request, response: Response) {
        
        let clinicRequest = request.query as ClinicRequest;
        let promise = this._clinicService.findClinicByFilter(clinicRequest);
        
        if(promise === null){
            response.status(404).json({message:'clinic not found'});
            return;
        }

        promise.then((clinic) => {
            return response.status(200).send(clinic);
        }).catch((error) => {
            return response.status(500).send(error);
        });
    }
}

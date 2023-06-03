import { Request, Response } from 'express';

export class ClinicController {
    public find(request: Request, response: Response) {
        return response.status(200).send([]);
    }
}

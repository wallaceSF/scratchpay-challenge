import {Request, Response} from "express";

import * as core from "express-serve-static-core";
import {ClinicControllerFactory} from "../factories/ClinicControllerFactory";

export class RouteClinic {
    private _app: core.Express;

    constructor(app: core.Express) {
        this._app = app;
    }
    
    public routes(): void {
        this._app.get('/', (req: Request, res: Response) => {
            res.status(200).send({
                apk: Date.now()
            })
        });

        this._app.route('/clinic')
            .get((req: Request, res: Response) => {
                ClinicControllerFactory.createClinicController().find(req, res);
            });
    }
}

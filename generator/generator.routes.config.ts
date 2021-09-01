import express from 'express';
import {traverse} from "../bypassingTheTree/bypassTree";
import {translate} from "../generalist/generalist";
import {transform} from "../translate/transform/transform";

export class PatientsRoutes {

    configureRoutes(app: express.Application) {

        app.route(`/generate`)
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(traverse(req.body, transform))
            });
        return app;
        
    }
}
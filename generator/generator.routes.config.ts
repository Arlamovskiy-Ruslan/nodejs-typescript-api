import express from 'express';
import {traverse} from "../bypassingTheTree/bypassTree";
import {translator} from "../generalist/generalist";

export class PatientsRoutes {

    configureRoutes(app: express.Application) {

        app.route(`/generate`)
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(traverse(req.body, translator))
            });
        return app;
        
    }
}
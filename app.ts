import express from 'express';
import * as http from 'http';
import cors from 'cors';
import {PatientsRoutes} from './generator/generator.routes.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;

app.use(express.json());
app.use(cors());

server.listen(port, () => {
    new PatientsRoutes().configureRoutes(app)
    console.log(`Server running at http://localhost:${port}`);
});
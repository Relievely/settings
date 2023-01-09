import cors from "cors";
import {Express} from "express";
import expressPinoLogger from "express-pino-logger";
import bodyParser from "body-parser";
import multer, {Multer} from "multer";
import {userdata} from "./routes/userdata";
import pretty from "pino-pretty";
import pino from "pino";

const form: Multer = multer();

export const routes = (app: Express) => {
    app.use(cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    }));

    const loggerMiddleware = expressPinoLogger({
        logger: pino(pretty({
            colorize: true
        }))
    });

    app.use(loggerMiddleware)
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(form.any())
    app.use(userdata);
}
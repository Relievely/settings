import {routes} from "./routes";
import * as dotenv from "dotenv";
import * as fs from "fs";

const express = require("express");

export const app = express();

if(fs.existsSync(".env")) {
    const config = dotenv.config({path: '.env'});

    if (config.error) {
        throw config.error;
    }
} else {
    console.warn("No environment file detected!");
}

routes(app);
import {Express} from "express";
import {logger} from "./middleware/logger";
import {insertUsernameController} from "./middleware/controller/database";

export const routes = (app: Express) => {
    app
        .post("/username", insertUsernameController)
        .get("/good", logger, (req, res) => res.status(200).json({success: 'Well done this route is working perfectly'}))
        .get("/bad", (req, res) => res.status(500).json({error: 'Too bad this route does mean something does not work correctly'}))
}
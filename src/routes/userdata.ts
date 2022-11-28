import {Router} from "express";
import {
    getPersonaController,
    getUsernameController,
    setPersonaController,
    setUsernameController
} from "../middleware/controller/database";

export const userdata = Router();

userdata
    .put("/username/:name", setUsernameController)
    .get("/username", getUsernameController)
    .put("/persona/:name", setPersonaController)
    .get("/persona", getPersonaController)
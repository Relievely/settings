import {Request, Response} from "express";
import {getPersonaAdapter, getUsernameAdapter, setPersonaAdapter, setUsernameAdapter} from "../adapter/database";
import {ResponseObject} from "../../interfaces";
import {responseError} from "../../helpers";

export const setUsernameController = (req: Request, res: Response<ResponseObject<boolean>>) => {

    console.log("Set Username");

    setUsernameAdapter(req)
        .then((response: ResponseObject<boolean>) => res.status(200).json(response))
        .catch((err: Error) => res.status(500).json(responseError(req, err.message)))
}

export const getUsernameController = (req: Request, res: Response<ResponseObject<string>>) => {
    getUsernameAdapter(req)
        .then((response: ResponseObject<string>) => res.status(200).json(response))
        .catch((err: Error) => res.status(500).json(responseError(req, err.message)))
}

export const setPersonaController = (req: Request, res: Response<ResponseObject<boolean>>) => {
    setPersonaAdapter(req)
        .then((response: ResponseObject<boolean>) => res.status(200).json(response))
        .catch((err: Error) => res.status(500).json(responseError(req, err.message)))
}

export const getPersonaController = (req: Request, res: Response<ResponseObject<string>>) => {
    getPersonaAdapter(req)
        .then((response: ResponseObject<string>) => res.status(200).json(response))
        .catch((err: Error) => res.status(500).json(responseError(req, err.message)))
}
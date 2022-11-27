import {Request, Response} from "express";
import {insertUsernameAdapter} from "../adapter/database";
import {ResponseObject} from "../../interfaces";
import {responseError} from "../../helpers";

export const insertUsernameController = (req: Request, res: Response<ResponseObject<any>>) => {
    insertUsernameAdapter(req)
        .then((response: ResponseObject<any>) => {
            res.status(200).json(response);
        })
        .catch((err: Error) => {
            res.status(500).json(responseError(req, err.message));
        })

}
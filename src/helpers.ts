import {ResponseObject} from "./interfaces";
import {Request} from "express";

export const responseError = <T>(req: Request, err: string): ResponseObject<T> => ({
    url: req.baseUrl,
    route: req.route as object,
    query: req.query,
    params: req.params,
    body: req.body as object,
    accepted: req.accepted,
    error: err
});

export const responseObjectState = <T>(req: Request, state: boolean): ResponseObject<T> => ({
    url: req.url,
    route: req.route as object,
    query: req.query,
    params: req.params,
    body: req.body as object,
    accepted: req.accepted,
    success: state
});

export const responseObjectDatabaseValue = <T>(req: Request, databaseValue: T): ResponseObject<T> => ({
    url: req.url,
    route: req.route as object,
    query: req.query,
    params: req.params,
    body: req.body as object,
    accepted: req.accepted,
    data: {
        length: 1,
        value: databaseValue
    }
});

export const inputDatabaseError = (err: Error) => new Error("Error while executing put function: " + err.message);

export const getDatabaseError = (err: Error) => new Error("Error while executing get function: " + err.message);

export const insufficientParametersError = () => new Error("Error while checking validity of parameters");
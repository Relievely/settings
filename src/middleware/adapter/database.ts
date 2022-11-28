import {Request} from "express";
import {Bytes} from "leveldown";
import {ResponseObject} from "../../interfaces";
import {
    getDatabaseError,
    inputDatabaseError,
    insufficientParametersError, responseObjectDatabaseValue,
    responseObjectState
} from "../../helpers";
import {parametersIncluded, userDB} from "../helpers";

export const setUsernameAdapter = (req: Request): Promise<ResponseObject<boolean>> => {
    return new Promise((resolve, reject) => {
        if (!parametersIncluded<string>(req, "name")) {
            reject(insufficientParametersError)
        }
        userDB.put('username', req.params.name, (err: Error) => {
            if (err) return reject(inputDatabaseError(err)) // some kind of I/O error

            resolve(responseObjectState<boolean>(req, true));
        })
    })
}

export const getUsernameAdapter = (req: Request): Promise<ResponseObject<any>> => {
    return new Promise((resolve, reject) => {
        userDB.get('username', (getErr: Error, value: Bytes) => {
            if (getErr) reject(getDatabaseError(getErr)) // likely the key was not found

            resolve(responseObjectDatabaseValue<string>(req, value.toString()));
        })
    })
}

export const setPersonaAdapter = (req: Request): Promise<ResponseObject<any>> => {
    return new Promise((resolve, reject) => {
        if (!parametersIncluded<string>(req, "name")) {
            reject(insufficientParametersError)
        }
        userDB.put('persona', req.params.name, (setErr: Error) => {
            if (setErr) reject(getDatabaseError(setErr)) // likely the key was not found

            resolve(responseObjectState<boolean>(req, true));
        })
    })
}

export const getPersonaAdapter = (req: Request): Promise<ResponseObject<any>> => {
    return new Promise((resolve, reject) => {
        userDB.get('persona', (getErr: Error, value: Bytes) => {
            if (getErr) reject(getDatabaseError(getErr)) // likely the key was not found

            resolve(responseObjectDatabaseValue<string>(req, value.toString()));
        })
    })
}
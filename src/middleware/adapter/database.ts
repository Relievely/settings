import {Request} from "express";
import {Bytes} from "leveldown";
import {ResponseObject} from "../../interfaces";
import {getDatabaseError, inputDatabaseError, insufficientParametersError, responseObjectDatabaseValue, responseObjectState} from "../../helpers";
import {parametersIncluded, userDB} from "../helpers";

export const setUsernameAdapter = (req: Request): Promise<ResponseObject<boolean>> => {
    return new Promise((resolve, reject) => {
        console.log("Params: ", req.params);
        if (!parametersIncluded<string>(req, "name")) {
            reject(insufficientParametersError)
        }

        const db = userDB();

        db.put('username', req.params.name, (err: Error) => {
            if (err) reject(inputDatabaseError(err));

            db.close()
                .then(() => {
                    resolve(responseObjectState<boolean>(req, true));
                })
                .catch((err) => {
                    reject(inputDatabaseError(err));
                })
        })
    })
}

export const getUsernameAdapter = (req: Request): Promise<ResponseObject<any>> => {
    return new Promise((resolve, reject) => {

        const db = userDB();

        db
            .get('username', (getErr: Error, value: Bytes) => {
                if (getErr) reject(getDatabaseError(getErr)) // likely the key was not found

                if (value === undefined) {
                    reject(inputDatabaseError(new Error("No bytes value returned!")));
                }

                db.close()
                    .then(() => {
                        resolve(responseObjectDatabaseValue<string>(req, value.toString()));
                    })
                    .catch((err) => {
                        reject(inputDatabaseError(err));
                    })
            })
    })
}

export const setPersonaAdapter = (req: Request): Promise<ResponseObject<any>> => {
    return new Promise((resolve, reject) => {
        if (!parametersIncluded<string>(req, "name")) {
            reject(insufficientParametersError)
        }

        const db = userDB();

        db
            .put('persona', req.params.name, (err: Error) => {
                if (err) reject(inputDatabaseError(err));

                db
                    .close()
                    .then(() => {
                        resolve(responseObjectState<boolean>(req, true));
                    })
                    .catch((err) => {
                        reject(inputDatabaseError(err));
                    })
            })
    })
}

export const getPersonaAdapter = (req: Request): Promise<ResponseObject<any>> => {
    return new Promise((resolve, reject) => {
        userDB().get('persona', (getErr: Error, value: Bytes) => {
            if (getErr) reject(getDatabaseError(getErr)) // likely the key was not found

            if (value === undefined) {
                throw new Error("No bytes value returned!");
            }

            resolve(responseObjectDatabaseValue<string>(req, value.toString()));
        })
    })
}
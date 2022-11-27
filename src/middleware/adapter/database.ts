import {Request} from "express";
import leveldown, {Bytes} from "leveldown";
import levelup from "levelup";
import {ResponseObject} from "../../interfaces";
import {getDatabaseError, inputDatabaseError} from "../../helpers";

export const insertUsernameAdapter = (req: Request): Promise<ResponseObject<any>> => {
    return new Promise((resolve, reject) => {
        // instantiate db
        const db = levelup(leveldown('./userStorage'))

        // Enter Name
        db.put('name', req.params.name, (err: Error) => {
            if (err) return reject(inputDatabaseError(err)) // some kind of I/O error

            // 3) Fetch by key
            db.get('name', (getErr: Error, value: Bytes) => {
                if (getErr) reject(getDatabaseError(getErr)) // likely the key was not found

                // Ta da!
                console.log(`name=`, value.toString());
            })
        })
    })
}
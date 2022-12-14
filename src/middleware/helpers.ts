import {Request} from "express";
import levelup from "levelup";
import leveldown from "leveldown";

export const userDB = () => {
    return levelup(leveldown('./userStorage'));
}
export const parametersIncluded = <T>(req: Request, ...params: T[]) => {
    return !params.find((p: T) => req.params[p.toString()] === undefined);
}
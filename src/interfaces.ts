import {ParamsDictionary} from "express-serve-static-core";
import QueryString from "qs";
import {MediaType} from "express";

type ReqBody = any;

export interface ResponseObject<T> {
    url: string,
    route: any,
    query: QueryString.ParsedQs,
    params: ParamsDictionary,
    body: ReqBody,
    accepted: MediaType[],
    status?: string
    success?: boolean,
    data?: {
        length: number
        value: T
    },
    error?: string
}

export interface ResponseError {
    query: string | any
    params: string[] | ParamsDictionary
    sender: string | number
    status?: string
    error: string
}
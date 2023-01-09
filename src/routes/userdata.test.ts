import supertest, {Response} from "supertest";

import {describe, expect, it, beforeAll} from '@jest/globals';
import {app} from "../app";
import {ResponseObject} from "../interfaces";
import {existsSync, mkdirSync} from "fs";

const requestWithSuperTest = supertest(app);

beforeAll(() => {
    if (!existsSync("./userStorage")){
        mkdirSync("./userStorage");
    }
})

describe("Username routes", () => {

    it("should set username value with 'Michael'", async () => {
        await requestWithSuperTest
            .put("/username/Michael")
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response: Response) => {
                console.log((response.body as ResponseObject<boolean>));
                expect((response.body as ResponseObject<boolean>).success).toBeTruthy();
            })
            .catch((err) => {
                console.error("Supertest Error: ", err);
            })
    });

    it("should get username value with 'Michael'", async () => {
        await requestWithSuperTest
            .get("/username")
            .expect(200)
            .expect('Content-Type', /json/)
            .then((getResponse: Response) => {
                expect(getResponse).toBeDefined();
                expect((getResponse.body as ResponseObject<string>).data.value).toBe("Michael");
            })
    });
});

describe("Username routes", () => {

    it("should set persona value with 'Panda'", async () => {
        await requestWithSuperTest
            .put("/persona/Panda")
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response: Response) => {
                console.log((response.body as ResponseObject<boolean>));
                expect((response.body as ResponseObject<boolean>).success).toBeTruthy();
            })
    });

    it("should get persona value with 'Panda'", async () => {
        await requestWithSuperTest
            .get("/persona")
            .expect(200)
            .expect('Content-Type', /json/)
            .then((getResponse: Response) => {
                expect(getResponse).toBeDefined();
                expect((getResponse.body as ResponseObject<string>).data.value).toBe("Panda");
            })
    });
});
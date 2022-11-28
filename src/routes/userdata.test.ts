import supertest, {Response} from "supertest";

import {describe, it, expect} from '@jest/globals';
import {app} from "../app";
import {ResponseObject} from "../interfaces";

describe("Username routes", () => {
    const requestWithSuperTest = supertest(app);

    it("should set username value with 'Michael'", async () => {
        await requestWithSuperTest
            .put("/username/Michael")
            .expect(200)
            .expect('Content-Type', /json/)
            .then(async (response: Response) => {
                expect(response).toBeDefined();
                await requestWithSuperTest
                    .get("/username")
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .then((getResponse: Response) => {
                        expect(getResponse).toBeDefined();
                        expect((getResponse.body as ResponseObject<string>).data.value).toBe("Michael");
                    })
            })
    });
});

describe("Username routes", () => {
    const requestWithSuperTest = supertest(app);

    it("should set persona value with 'Panda'", async () => {
        await requestWithSuperTest
            .put("/persona/Panda")
            .expect(200)
            .expect('Content-Type', /json/)
            .then(async (response: Response) => {
                expect(response).toBeDefined();
                await requestWithSuperTest
                    .get("/persona")
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .then((getResponse: Response) => {
                        expect(getResponse).toBeDefined();
                        expect((getResponse.body as ResponseObject<string>).data.value).toBe("Panda");
                    })
            })
    });
});
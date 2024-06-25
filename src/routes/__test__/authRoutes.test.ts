import request from "supertest";
import app from "../../app";

describe("Signup functionality", () => {
    it("Returns a 201 status on a successful signup.", () => {
        return request(app)
            .post("/api/users/signup")
            .send({
                email: "test@test.com",
                password: "password",
            })
            .expect(201);
    });

    it("Returns a 400 status on a signup with invalid email.", () => {
        return request(app)
            .post("/api/users/signup")
            .send({
                email: "invalidEmail.com",
                password: "password",
            })
            .expect(400);
    });

    it("Returns a 400 status on a signup with invalid password.", () => {
        return request(app)
            .post("/api/users/signup")
            .send({
                email: "test@test.com",
                password: "pas",
            })
            .expect(400);
    });

    it("Returns a 400 status on a signup with missing email and password.", async () => {
        await request(app)
            .post("/api/users/signup")
            .send({
                email: "test@test.com",
            })
            .expect(400);

        await request(app)
            .post("/api/users/signup")
            .send({
                password: "pas",
            })
            .expect(400);
    });

    it("Disallows duplicate emails.", async () => {
        const credentials = {
            email: "test@test.com",
            password: "password",
        };

        await request(app).post("/api/users/signup").send(credentials).expect(201);

        await request(app).post("/api/users/signup").send(credentials).expect(400);
    });

    it("It sets a cookie after a successful signup.", async () => {
        const response = await request(app)
            .post("/api/users/signup")
            .send({
                email: "test@test.com",
                password: "password",
            })
            .expect(201);
        expect(response.get("Set-Cookie")).toBeDefined();
    });
});
describe("Signin functionality", () => {
    it("Fails when an email that doesn't exist is supplied.", () => {
        return request(app)
            .post("/api/users/signin")
            .send({
                email: "test@test.com",
                password: "password",
            })
            .expect(400);
    });
    it("Fails when an incorrect password is supplied.", async () => {
        await request(app)
            .post("/api/users/signup")
            .send({
                email: "test@test.com",
                password: "password",
            })
            .expect(201);

        await request(app)
            .post("/api/users/signin")
            .send({
                email: "test@test.com",
                password: "wrongPassword",
            })
            .expect(400);
    });
    it("Responds with a cookie when given a valid credentials", async () => {
        await request(app)
            .post("/api/users/signup")
            .send({
                email: "test@test.com",
                password: "password",
            })
            .expect(201);

        const response = await request(app)
            .post("/api/users/signin")
            .send({
                email: "test@test.com",
                password: "password",
            })
            .expect(200);
		
		expect(response.get("Set-Cookie")).toBeDefined();
		
    });
});

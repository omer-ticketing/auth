import request from "supertest";
import app from "../../app";

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
    await  request(app)
        .post("/api/users/signup")
        .send({
            email: "test@test.com",
        })
        .expect(400);

    await  request(app)
        .post("/api/users/signup")
        .send({
            password: "pas",
        })
        .expect(400);
});

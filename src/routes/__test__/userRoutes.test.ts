import request from "supertest";
import app from "../../app";
import { getAuthCookie } from "../../test/helpers/signin";

it("Responds with details about the current user", async () => {
	const cookie = await getAuthCookie();

	if (!cookie) {
		throw new Error('Test failed');
	}

	const response = await request(app)
		.get('/api/users/current-user')
		.set('Cookie', cookie)
		.send()
		.expect(200);

	expect(response.body.data.user.email).toEqual('test@test.com');
});

it("Responds with 401 if not authenticated.", () => {
	request(app)
		.get('/api/users/current-user')
		.send()
		.expect(401);
});
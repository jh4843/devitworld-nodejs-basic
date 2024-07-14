import chai, { expect } from "chai";
import "mocha";
import request from "supertest";
import app from "../src/app";

chai.should();
const assert = chai.assert;

describe("Express Application", () => {
  describe("GET /hello", () => {
    it('should return a JSON object with message "Hello, World!" using expect', async () => {
      const res = await request(app).get("/hello");
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("message", "Hello, World!");
    });

    it('should return a JSON object with message "Hello, World!" using should', async () => {
      const res = await request(app).get("/hello");
      res.status.should.equal(200);
      res.body.should.have.property("message").equal("Hello, World!");
    });

    it('should return a JSON object with message "Hello, World!" using assert', async () => {
      const res = await request(app).get("/hello");
      assert.equal(res.status, 200);
      assert.propertyVal(res.body, "message", "Hello, World!");
    });
  });

  describe("POST /echo", () => {
    it("should return a JSON object with the same message using expect", async () => {
      const message = { message: "Hello, Echo!" };
      const res = await request(app).post("/echo").send(message);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("message", "Hello, Echo!");
    });

    it("should return a JSON object with the same message using should", async () => {
      const message = { message: "Hello, Echo!" };
      const res = await request(app).post("/echo").send(message);
      res.status.should.equal(200);
      res.body.should.have.property("message").equal("Hello, Echo!");
    });

    it("should return a JSON object with the same message using assert", async () => {
      const message = { message: "Hello, Echo!" };
      const res = await request(app).post("/echo").send(message);
      assert.equal(res.status, 200);
      assert.propertyVal(res.body, "message", "Hello, Echo!");
    });
  });
});

import * as chai from "chai";
import { Server } from "http";
import request from "supertest";
import app from "../src/app";

const { expect } = chai;

let server: Server;

describe("Express Server", () => {
  before((done) => {
    server = app.listen(50011, () => {
      // 테스트 포트 50011 사용
      console.log("Test server running on port 50011");
      done();
    });
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it("should return Hello, world! on GET /", (done) => {
    request(app)
      .get("/")
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(200);
        expect(res.text).to.equal("Hello, world!");
        done();
      });
  });

  it("should return 201 and data on POST /data", (done) => {
    const testData = { key: "value" };

    request(app)
      .post("/data")
      .send(testData)
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property("message", "Data received");
        expect(res.body).to.have.property("data").that.deep.equals(testData);
        done();
      });
  });
});

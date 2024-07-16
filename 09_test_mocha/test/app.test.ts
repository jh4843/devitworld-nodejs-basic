import * as chai from "chai";
import chaiHttp from "chai-http";
import { Server } from "http";
import app from "../src/app";

chai.use(chaiHttp);
const { expect } = chai;

let server: Server;

describe("Express Server", () => {
  before((done) => {
    server = app.listen(3000, () => {
      console.log("Test server running on port 3000");
      done();
    });
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it("should return Hello, world! on GET /", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hello, world!");
        done();
      });
  });

  it("should return 201 and data on POST /data", (done) => {
    const testData = { key: "value" };

    chai
      .request(app)
      .post("/data")
      .send(testData)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("message", "Data received");
        expect(res.body).to.have.property("data").that.deep.equals(testData);
        done();
      });
  });
});

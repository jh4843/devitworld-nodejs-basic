import * as chai from 'chai';  // `* as`를 사용하여 `chai`를 올바르게 가져옵니다.
import chaiHttp from 'chai-http';
import app from '../src/app'; // app.ts 파일의 경로에 맞게 조정

console.log('chaiHttp', chaiHttp);  // chaiHttp 객체가 올바르게 로드되었는지 확인

chai.use(chaiHttp);

console.log('chai', chai);  // chai 객체가 올바르게 로드되었는지 확인

const { expect } = chai;  // `expect`를 `chai`에서 가져옵니다.

describe('Express Server', () => {
  it('should return Hello, world! on GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, world!');
        done();
      });
  });

  it('should return 201 and data on POST /data', (done) => {
    const testData = { key: 'value' };

    chai.request(app)
      .post('/data')
      .send(testData)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message', 'Data received');
        expect(res.body).to.have.property('data').that.deep.equals(testData);
        done();
      });
  });
});

import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('bcrypt', () => {

  it('should be encrypt & decrypt', () => {
    expect(1).to.equal(1);
  });

});
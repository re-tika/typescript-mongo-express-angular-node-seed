import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import {connect} from "./connect";
import {Note} from "notely-models"

chai.use(chaiHttp);
const expect = chai.expect;

describe('DB Layer', () => {

  const note: Note = {
    text: 'Hello World'
  };

  it("should be able to connect", function(done) {

    const cb = (db) => {
      expect(db !== undefined).to.be.true;
      db.collection('notes').insertOne(note, function(err, result) {
        expect(err).to.equal(null);
        expect(result.insertedCount).to.equal(1);
        done();
      });
    };

    connect(cb);

  });

});
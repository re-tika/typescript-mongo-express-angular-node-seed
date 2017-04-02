import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import {connect, database} from "../src/db/connect";
import {Note} from "../models/notes.model";

chai.use(chaiHttp);
const expect = chai.expect;

describe('DB Layer', () => {

  const note: Note = {
    text: 'Hello World'
  };

  it('should be able to connect', () => {
    connect();
    setTimeout(() => {
      expect(database !== undefined).to.be.true;
      database.collection('notes').insertOne(note, function(err, result) {
        expect(err).to.equal(null);
        expect(result).to.equal(1);
      });
    }, 1000);
  });

});
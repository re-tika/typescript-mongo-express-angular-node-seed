import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import {connectToDatabase} from "./connect";
import {crudRead, crudCreate} from "./crud";

chai.use(chaiHttp);
const expect = chai.expect;

describe('CRUD', () => {

  it("should be able to insert, read, update, delete", function(done) {

    const item = {text: 'hello'};

    //INSERT
    const doInsert = (db) => {

      crudCreate(item, 'items', (err, result) => {
        expect(err).to.equal(null);
        expect(result.insertedCount).to.equal(1);

        const insertedId = result.insertedId;

        crudRead(insertedId, 'items', (err, item) => {

          expect(err).to.equal(null);
          expect(item.text).to.equal("hello");
          done();

        });


      })

    };

    connectToDatabase('local', doInsert);

  });

});
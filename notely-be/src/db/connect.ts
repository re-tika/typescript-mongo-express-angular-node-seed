import * as mongo from 'mongodb'

// Retrieve
const MongoClient = mongo.MongoClient;

const params: MongoParams = {
  host: 'ds145220.mlab.com',
  dbuser: 'notely',
  port: 45220,
  dbpassword: 'jlkajoijjjaksjkfiiq82',
  dbname: 'notely-local'
};

//pre: only accepts passwords without 'weird (semicolon?)' characters...
const mongoUri = (params: MongoParams) => {
  return `mongodb://${params.dbuser}:${params.dbpassword}@${params.host}:${params.port}/${params.dbname}`
};

export let database;

export const connect = () => {

  // Connect to the db
  MongoClient.connect(mongoUri(params), function(err, db) {
    if(!err) {
      console.log("We are connected");
      database = db;
    } else {
      console.log('Error on connecting to MongoDB', err)
    }
  });

};

interface MongoParams {
  host: string;
  dbname: string;
  port: number;
  dbuser: string;
  dbpassword: string;
}

/*
import {Note} from "../../models/notes.model";


var server = new mongodb.Server('localhost', 27017);
var db = new mongodb.Db('mydb', server, {w: 1});


var MongoClient = mongodb.MongoClient;
var config = require('../../secret.js');

console.log(config);

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

export function getNote(id:string, cb:(err, note?: Note) => void) {
  db.collection('notes', (err, notesCollection) => {
    if (err) return cb(err);
    notesCollection.findOne({"_id": new mongodb.ObjectID(id)}, (err, note: Note) => {
      if (err) return cb(err);
      return cb(null, note);
    })
  })
}

export function addNote(note: Note, callback:(err, note?: Note) => void) {
  db.collection('note', (err, notesCollection) => {
    if (err) return callback(err);
    notesCollection.insertOne(note, (err, result) => {
      if (err) return callback(err);
      const note = result.ops[0];
      callback(null, note);
    })
  })
}*/
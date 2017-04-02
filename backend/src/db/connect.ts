import * as mongo from 'mongodb'
import {AppProperties} from "../../../models/app-properties.model";

// Retrieve
const MongoClient = mongo.MongoClient;


//pre: only accepts passwords without 'weird (semicolon?)' characters...
const mongoUri = (appParams: AppProperties) => {
  const params = appParams.db;
  return `mongodb://${params.dbuser}:${params.dbpassword}@${params.host}:${params.port}/${params.dbname}`
};

export let database;

export const connect = (propertiesName: string, callback?) => {

  const props: AppProperties = require(`../../properties/${propertiesName}.properties.json`);

  // Connect to the db
  MongoClient.connect(mongoUri(props), function(err, db) {
    if(!err) {
      database = db;
      callback(db);
    } else {
      console.log('Error on connecting to MongoDB', err)
    }
  });

};

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
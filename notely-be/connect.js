// Load required packages
var express = require('express');
var mongoose = require('mongoose');

var NoteScheme = new mongoose.Schema({
  created: number,
  fileId: string,
  text: string,

});

var KeyScheme = new mongoose.Scheme({
  created: number,
  user: string,
  resource: string,
  role: string
});


// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);
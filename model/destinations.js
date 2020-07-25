const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    id:           Number,
    location:     String,
    site:         String,
    description:  String,
  }
);

// Compile and export our model using the above Schema
module.exports = mongoose.model('destinations', gallerySchema);
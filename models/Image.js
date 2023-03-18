//jshint esversion:9
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    imageId: {
      type: String,
    },
    imageSize: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    uploaderName: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", UserSchema);

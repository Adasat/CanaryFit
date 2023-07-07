const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    type:[{
        type: String,
        required: true
    }],
    muscle: {
        type: String,
        required: true
    }
   
  },{ timestamps: true }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;

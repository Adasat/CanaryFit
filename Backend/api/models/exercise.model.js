const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    type:{
        type: String,
        enum: ['Pull', 'Push', 'Legs', 'Upper', 'Lower', 'FullBody'],
        require: true
    },
    muscle: {
        type: String,
        require: true
    }
   
  },{ timestamps: true }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;

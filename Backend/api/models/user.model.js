const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: "Email address is required",
      
    },
    password: {
      type: String,
      required: true,
    },
   
    height: {
      type: Number,
      required: true,
    },
    
    weightTarget: {
      type: Number,
    },
    actualRoutine: {
      type: ObjectId,
      ref: "Routine"
    },
    favsRoutine: [
      {
        type: ObjectId,
        ref: "Routine",
      },
    ],
    progress: [
      {
      type: ObjectId,
      ref: 'Progress'
    },
  ]
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema)
module.exports = User
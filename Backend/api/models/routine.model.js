const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId;


const routineSchema = new Schema(
  {
    title: {
      type: String, 
      required: true,
    },
    timeEstimate: {
      type: String,
      enum: ['< 40', '40 to 60', '> 60'],
      required: true,
    },
    dayPerWeek: {
      type: String,
      enum: ['2 days or less', '3 to 5 days', '6 days or more'],
      required: true
    },
    routineTarget: {
      type: String,
      enum: ['Lose weight', "Gain weight", "Body definition", "Good shape"],
      default: 'Good shape',
    },
    weightTarget: {
      type: Number
    },
    styleRoutine: {
      type: String,
      enum: ['Pull, Push and Legs', 'Upper and Lower Body', 'By muscles', 'Full Body'],
      default: 'Full body'
    },
    owner: {
      type: ObjectId,
      ref: 'User'
    },
    public: {
      type: Boolean,
      default: true
    },
    exercises: [{
      type: ObjectId,
      ref: 'Exercise'
    }]

  }, 
  { timestamps: true }
)


const Routine = mongoose.model("Routine", routineSchema);
module.exports = Routine;
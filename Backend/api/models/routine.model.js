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
      type: Number,
      required: true,
    },
    dayPerWeek: {
      type: Number,
      required: true
    },
    routineTarget: {
      type: String,
      enum: ['Lower weight', "Gain weight", "Body definition", "Good shape"],
      default: 'Good shape',
    },
    styleRoutine: {
      type: String,
      enum: ['Pull, Push and Legs', 'Upper Body and Lower Body', 'By muscles', 'Full body'],
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
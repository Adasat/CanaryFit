const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const progressSchema = new Schema(
  {
    date: {
      type: Date,
    },
    weightProgress: [
      {
        weight: {
          type: Number,
      },
        bmi: {
          type: Number
        }
      }
      
    ],
    exerciseProgress: [
      {
        exercise: {
          type: ObjectId,
          ref: "Exercise",
        },
        sets: [
          {
            reps: {
              type: Number,
              required: true,
            },
            weightUsed: {
              type: Number,
              required: true,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Progress = mongoose.model("Progress", progressSchema);
module.exports = Progress;

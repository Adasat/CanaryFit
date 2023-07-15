const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const progressSchema = new Schema(
  {
    weightProgress: [
      {
        date: {
          type: Date,
        },
        weight: {
          type: Number,
        },
        bmi: {
          type: Number,
        },
      },
    ],
    exerciseProgress: [
      {
        date: {
          type: Date,
        },
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

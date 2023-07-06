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
        type: Number,
      },
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
              require: true,
            },
            weightUsed: {
              type: Number,
              require: true,
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

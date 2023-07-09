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
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // Validación de formato de email
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (password) {
          // Validación de contraseña con al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(
            password
          );
        },
        message:
          "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
      },
    },
   
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true
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
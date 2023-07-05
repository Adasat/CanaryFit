const { response } = require('express')
const User = require('../models/user.model')

const getAllUsers = (req, res, next) => {
    User.find()
    .then(response => {res.json({response})
    })
    .catch(error => {
        res.json({message: 'An error Ocurred!'})
    })
}
const getOneUser = (req, res, next) => {
    let userId = req.body.userId
    User.findById(userId)
    .then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({message: 'An error Ocurred!'})
    })
}

const createUser = (req, res, next) => {
    let user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      weight: req.body.weight,
      height: req.body.height,
    });
    user.save()
    .then(response => {
        res.json({message: 'User created succesfully'})
    })
    .catch(error => {
        res.json({message: 'An error Ocurred!'})
    })
}

const updateUser = (req, res, next) => {
    let userId = req.body.userId;
    let updateData = {
        weight: req.body.weight,
        height: req.body.height,
    };
    User.findByIdAndUpdate(userId, {$set: updateData})
    .then(() => {
        res.json({message: 'User updated succesfully!'})
    })
    .catch(error => {
        res.json({message: 'An error Ocurred!'})
    })
}


require("dotenv").config();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")



const signUp = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      height: req.body.height,
      weight: req.body.weight,
      weightTarget: req.body.weightTarget,
    });
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "",
    });
    

    res.status(200).json({message: 'Profile created successfully!', 
    token: token,
  id: user.id})
  } catch (error) {
    console.log(error)
    res.status(404).send('An error ocurred!')
  }
};


const logIn = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email}).select('+password')
        const userDetails = {
            token: '',
            id: '',
            firstname: '',
            lastname: ''
        }

        if(user){
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(result){
                    const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn: '1d'})
                    userDetails.token = token
                    userDetails.id = user.id
                    userDetails.firstname = user.firstname
                    userDetails.lastname = user.lastname
                    res.status(200).json({userDetails})
                }else{
                  res.status(400).send('An error ocurred. User or password incorrect')


                }
            })
        } else {
            res.status(400).send('An error ocurred. User or password incorrect')


        }
    } catch (error) {
        res.status(400).send('An error ocurred. User or password incorrect')

        
    }
}

module.exports = {signUp, logIn}
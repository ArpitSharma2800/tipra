const {
  create
} = require("./service");
const jwt = require('jsonwebtoken');
let md5 = require('md5');
const moment = require('moment')
const {
  v4: uuidv4
} = require('uuid');
async function hashPassword(password) {
  return await md5(password);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}


module.exports = {
  serverCheck: (req, res) => {
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    return res.status(200).json({
      success: true,
      message: "Server running ..."
    });
  },
  //signUp
  signup: async (req, res) => {
    const {
      email,
      password,
      username,
      name,
      age,
      gender,
      role
    } = req.body
    const hashedPassword = await hashPassword(password);
    const uuid = uuidv4();
    const data = {
      id: uuid,
      emailAdd: email,
      name: name,
      username: username,
      age: age,
      pwd: hashedPassword,
      lastLogin: moment().format('MMMM Do YYYY, h:mm:ss a'),
      joinDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
      profileImage: "https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png",
      lastActive: moment().format('MMMM Do YYYY, h:mm:ss a'),
      gender: gender,
      role: role,
    }
    const accessToken = jwt.sign({
      userId: uuid,
      role: data.role,
      email: data.emailAdd,
      username: data.username
    }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });
    data.jwttoken = accessToken;
    create(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: err,
        });
      }
      return res.status(200).json({
        success: true,
        message: "SUCCESS MESSAGE"
      });
    });
  },
  //signin
  signin: async (req, res) => {
    try {
      const {
        email,
        password
      } = req.body;

      const user = await User.findOne({
        email
      });
      // console.log(user);
      if (!user) return res.status(404).json({
        success: 0,
        message: 'Email does not exist'
      });
      const validPassword = await validatePassword(password, user.password);
      if (!validPassword) return res.status(503).json({
        success: 0,
        message: 'Password is not correct'
      });
      const accessToken = jwt.sign({
        userId: user._id,
        role: user.role,
        email: user.email
      }, process.env.JWT_SECRET, {
        expiresIn: "1d"
      });
      await User.findByIdAndUpdate(user._id, {
        accessToken
      })
      res.status(200).json({
        data: {
          email: user.email,
          role: user.role,
          _id: user._id
        },
        accessToken
      })
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Error Message",
      });
    }
  },
};
const {
  create,
  signin,
  updateSignIn,
  getUserDetails,
  getSingleDetail
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
  signIn: async (req, res) => {
    const {
      email,
      password
    } = req.body;
    const data = {
      emailAdd: email,
      pwd: password
    }
    signin(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: err,
        });
      }
      if (results[0] == null) {
        return res.status(403).send({
          success: false,
          messgae: "no user found"
        })
      } else {
        // console.log(md5(password) == results[0].pwd);
        if (md5(password) == results[0].pwd) {
          const accessToken = jwt.sign({
            userId: results[0].id,
            role: results[0].role,
            email: results[0].emailAdd,
            username: results[0].username
          }, process.env.JWT_SECRET, {
            expiresIn: "1h"
          });
          const data = {
            lastActive: moment().format('MMMM Do YYYY, h:mm:ss a'),
            lastLogin: moment().format('MMMM Do YYYY, h:mm:ss a'),
            jwttoken: accessToken,
            id: results[0].id
          }
          const result = {
            email: results[0].emailAdd,
            username: results[0].username,
            role: results[0].role,
            id: results[0].id
          }
          updateSignIn(data, (err, results) => {
            if (err) {
              console.log(err);
              return res.status(500).json({
                success: 0,
                message: err,
              });
            }
            return res.status(200).json({
              data: {
                result
              },
              accessToken
            })
          });
        } else {
          var response = {
            message: "Error: Credentials incorrect",
          };
          res.writeHead(404, {
            "Content-Type": "application/json",
          });
          return res.end(JSON.stringify(response));
        }
      }

    });
  },
  //getuser
  getusers: async (req, res) => {
    const data = {
      id: req.user.userId
    }
    // console.log(req.user.userId);
    getUserDetails(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: err,
        });
      }
      return res.status(200).json({
        success: true,
          results
      });
    })
  },
  //particular user
  getSingleUser:async (req,res)=>{
    console.log(req.query.username);
    const data = {
      id: req.user.userId,
      username: req.query.username
    }
    getSingleDetail(data, (err, results) => {
      console.log(results);
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: err,
        });
      }
      if (results[0] == null) {
        return res.status(404).send({
          success: false,
          messgae: "no user found"
        })
      }else{
        return res.status(200).json({
        success: true,
          results
      });
      }
      
    })
  }

};
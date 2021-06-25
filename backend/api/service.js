const pool = require("../config/db");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO user VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.id,
        data.name,
        data.emailAdd,
        data.username,
        data.age,
        data.pwd,
        data.lastLogin,
        data.jwttoken,
        data.profileImage,
        data.joinDate,
        data.lastActive,
        data.gender,
        data.role
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  signin: (data, callBack) => {
    pool.query(
      `SELECT * FROM user WHERE emailAdd = '${data.emailAdd}'`,
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateSignIn: (data, callBack) => {
    pool.query(
      `UPDATE user  SET 
      lastLogin = '${data.lastLogin}',
      jwttoken = '${data.jwttoken}',
      lastActive = '${data.lastActive}'
      WHERE id = '${data.id}'`,
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserDetails: (data, callBack) => {
    console.log(data.id);
    pool.query(
      `SELECT id,name,username,profileImage,joinDate,gender FROM user WHERE id NOT IN(SELECT initiatorId from connection WHERE facerId='${data.id}' AND isblocked=1) AND id NOT IN ('${data.id}')`,
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    )
  }
};
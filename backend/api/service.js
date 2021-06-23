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
  }
};
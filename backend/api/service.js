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
};
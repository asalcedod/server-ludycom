
createUser = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    const query = conn.query("INSERT INTO users set ?", data, (err, user) => {
      if (!err) {
        res.json({ status: "User Saved" });
      } else {
        console.log(err);
      }
    });
  });
};

updateUser = async (req, res) => {
  const newUser = req.body;
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE users SET ? Where ID = ?",
      [newUser, id],
      (err, rows) => {
        if (!err) {
          res.json({ status: "User Updated" });
        } else {
          console.log(err);
        }
      }
    );
  });
};

deleteUser = async (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM users WHERE id = ?", [id], (err, rows, fields) => {
      if (!err) {
        res.json({ status: "User Deleted" });
      } else {
        console.log(err);
      }
    });
  });
};

getUserById = async (req, res) => {
  const { id } = req.params;
  console.log(req)
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM users WHERE id = ?",
      [id],
      (err, rows, fields) => {
        if (!err) {
          res.json(rows[0]);
        } else {
          console.log(err);
        }
      }
    );
  });
};

getUsers = async (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM users", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
};

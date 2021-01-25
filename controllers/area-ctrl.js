createArea = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
      const query = conn.query("INSERT INTO areas set ?", data, (err, Area) => {
        if (!err) {
          res.json({ status: "Area Saved" });
        } else {
          console.log(err);
        }
      });
    });
  };
  
  updateArea = async (req, res) => {
    const newArea = req.body;
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query(
        "UPDATE areas SET ? Where ID = ?",
        [newArea, id],
        (err, rows) => {
          if (!err) {
            res.json({ status: "Area Updated" });
          } else {
            console.log(err);
          }
        }
      );
    });
  };
  
  deleteArea = async (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("DELETE FROM areas WHERE id = ?", [id], (err, rows, fields) => {
        if (!err) {
          res.json({ status: "Area Deleted" });
        } else {
          console.log(err);
        }
      });
    });
  };
  
  getAreaById = async (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query(
        "SELECT * FROM areas WHERE id = ?",
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
  
  getAreas = async (req, res) => {
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM areas", (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
    });
  };
  
  module.exports = {
    createArea,
    updateArea,
    deleteArea,
    getAreas,
    getAreaById,
  };
  
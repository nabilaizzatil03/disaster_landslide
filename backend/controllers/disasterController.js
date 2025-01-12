import db from '../config/database.js';

const addDisaster = (req, res) => {
  const { title, description, image } = req.body;
  const sql = 'INSERT INTO disasters (title, description, image) VALUES (?, ?, ?)';
  console.log('Request received:', req.body); // Log request body
  db.query(sql, [title, description, image], (err, result) => {
    if (err) return res.status(500).send('Error adding disaster');
    res.status(201).send('Disaster added');
  });
};

const getAllDisasters = (req, res) => {
  const sql = 'SELECT * FROM disasters';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send('Error fetching disasters');
    res.json(results);
  });
};

const updateDisaster = (req, res) => {
  const { title, description, image } = req.body;
  const sql = 'UPDATE disasters SET title = ?, description = ?, image = ? WHERE id = ?';

  db.query(sql, [title, description, image, req.params.id], (err, result) => {
    if (err) return res.status(500).send('Error updating disaster');
    res.send('Disaster updated');
  });
};

const deleteDisaster = (req, res) => {
  const sql = 'DELETE FROM disasters WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send('Error deleting disaster');
    res.send('Disaster deleted');
  });
};

const getDisasterById = (req, res) => {
  const sql = 'SELECT * FROM disasters WHERE id = ?';
  console.log('Fetching disaster with ID:', req.params.id); // Log ID
db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).send('Error fetching disaster');
    if (result.length === 0) return res.status(404).send('Disaster not found');
    res.json(result[0]);
  });
};

export { addDisaster, getAllDisasters, getDisasterById, updateDisaster, deleteDisaster };

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { register, login } from './controllers/authController.js';
import { addDisaster, getAllDisasters, updateDisaster, deleteDisaster, getDisasterById } from './controllers/disasterController.js';
import authenticateJWT from './auth/authMiddleware.js';

dotenv.config();

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Auth Routes
app.post('/register', register);
app.post('/login', login);

// Disaster CRUD Routes
app.post('/disasters', authenticateJWT, addDisaster);
app.get('/disasters', authenticateJWT, getAllDisasters);
app.put('/disasters/:id', authenticateJWT, updateDisaster);
app.delete('/disasters/:id', authenticateJWT, deleteDisaster);
app.get('/disasters/:id', authenticateJWT, getDisasterById); // Perbaikan: Ganti router.get dengan app.get

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

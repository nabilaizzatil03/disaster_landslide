import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authenticateJWT = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('Authorization Header:', authHeader); // Debug header token

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).send('Token required or format invalid');
  }

  const token = authHeader.split(' ')[1]; // Ekstrak token setelah "Bearer"

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('Invalid token:', err); // Debug error
      return res.status(403).send('Invalid token');
    }

    req.user = user;
    next();
  });
};

export default authenticateJWT;

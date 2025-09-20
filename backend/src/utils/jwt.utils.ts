import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (id: string): string => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT_SECRET not found in environment variables');
  }
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: '30d', // Token expires in 30 days
  });
};

export default generateToken;

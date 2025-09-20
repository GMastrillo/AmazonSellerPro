import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './api/middlewares/error.middleware';

// Import routes
import authRoutes from './api/routes/auth.routes';
import userRoutes from './api/routes/user.routes';
import courseRoutes from './api/routes/course.routes';

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;

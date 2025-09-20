import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/user.model';

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req: Request, res: Response) => {
  // The user object is attached to the request in the protect middleware
  const user = req.user;

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { getMe };

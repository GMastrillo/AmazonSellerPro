import { Request, Response, NextFunction } from 'express';

interface IError extends Error {
  statusCode?: number;
}

const errorHandler = (err: IError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error: IError = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

export { errorHandler, notFound };

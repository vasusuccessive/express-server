import { checkSchema, validationResult } from 'express-validator/check';
import StatusCodes from './StatusCodes';
import SystemResponse from './SystemResponse';


export const errorHandler = ( isLogging ) => ( err, req, res, next ) => {
  if (res.headersSent) { return next(err) }

  const { message, status, error } = err;

  const result = {
      message: message || 'error',
      status: status || 500,
      error: error || 'undefined',
      timestamp: new Date(),
  }

  

  res.status(result.status).json(result);
};


const validationHandler = ( validator ) => {
  return [
    checkSchema(validator) as any,
    ( req, res, next ) => {
      const errors = validationResult(req);
      next();
    }
  ]
}

export {
  StatusCodes, SystemResponse, validationHandler
};



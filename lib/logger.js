// // lib/logger.js
// import winston from 'winston';
// import path from 'path'

// // Create a Winston logger
// const logger = winston.createLogger({
//   level: 'info', // Change to 'debug' or 'error' as per your need
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.json()
//   ),
//   transports: [
//     // Log to a file for server-side logs (you can specify the location of your log file)
//     new winston.transports.File({
//       filename: path.join(process.cwd(), 'logs/payment-errors.log'),
//       level: 'error', // Log only errors to the file (you can adjust this as needed)
//     }),
//     // You can also log to the console (especially useful in development)
//     new winston.transports.Console({
//       format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
//     }),
//   ],
// });

// export default logger;

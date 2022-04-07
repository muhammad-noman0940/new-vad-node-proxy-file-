'use strict'
const winston = require("winston");
const format = winston.format;
require('winston-daily-rotate-file');

const transportConfig = {
  dirname: `${__dirname}/logs/`,
  datePattern: 'YYYY-MM-DD',
  handleExceptions: true,
  colorize: true,
  json: false,
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
};

const Logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  defaultMeta: { service: 'vad-node-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    //new winston.transports.File({ filename: "error.log", level: "error" }),
    //new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.DailyRotateFile({
      filename: 'error-%DATE%.log',
      level: 'error',
      ...transportConfig,
    })
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
// if (process.env.NODE_ENV !== 'production') {
//   Logger.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }));
// }

module.exports = Logger;

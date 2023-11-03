import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: `${__dirname}/../logs/log-api.log`,
      maxsize: 5120000,
    }),
    new transports.File({
      filename: `${__dirname}/../logs/log-error.log`,
      level: 'error',
    }),
  ],
});

export default logger;

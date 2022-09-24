require("dotenv").config('../.env');
// C:\\Users\\1337\\Desktop\\tm\\Methodize\\server\\.env

module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
};
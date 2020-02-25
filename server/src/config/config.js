module.exports = {
  port: process.env.PORT || 8081,
  // Attempt to use environment variables if defined, otherwase fallback to `tabtracker`
  //    TODO: IMPORTANT — Make sure environment variables are declared and secret when deploying actual server...
  db: {
  database: process.env.DB_NAME || 'tabtracker',
  user: process.env.DB_USER || 'tabtracker',
  password: process.env.DB_PASS || 'tabtracker',
  options: {
    dialect: process.env.DIALECT || 'sqlite',
    host: process.env.HOST || 'localhost',
    storage: './tabtracker.sqlite'
  }
  },
  authentication: {
    // Only the server should ever know the jwt key
  jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}

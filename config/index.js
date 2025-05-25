import dotenv from 'dotenv'
dotenv.config()

export var config

if (process.env.NODE_ENV === 'production') {
  config = {
    dbURL: process.env.DB_URL,
    dbName: process.env.DB_NAME,
  }
  console.log('prod')
} else {
  config = {
    dbURL: process.env.DB_URL,
    dbName: process.env.DB_NAME,
  }

  console.log('dev')
}

config.isGuestMode = true

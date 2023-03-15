const mongoose = require('mongoose')
require('dotenv-flow').config()

const Admin = require('../components/auth/schema')

const connection = mongoose.connect(`${process.env.MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Successfully connected to the database')
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err)
})
module.exports = connection

async function start () {
  try {
    await Admin.create({
      _id: '63a9d9d13e4b07c0c06a297d',
      name: 'admin',
      email: 'admin@gmail.com',
      mobileNumber: '9788254229',
      password: '$2a$08$0mNJ8PxDFDpV61euCvcqH.Us1oix95BFgmYMPdQd7JnVOdxYTe2De',
      status: 'ACTIVE'
    })
  } catch (err) {
    console.log(err)
  } finally {
    mongoose.connection.close()
  }
}

start()

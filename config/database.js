const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const connection = mongoose.connect(`${process.env.MONGO_URI}`, {
  useNewUrlParser: true
}).then(() => {
  console.log('Successfully connected to the database')
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err)
})

module.exports = connection

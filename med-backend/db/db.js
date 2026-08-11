//set up database connection
const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/medTracker'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
})

mongoose.connection.on('error', (e) => {
    console.log(e, ' Moongoose failed to connect')
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected')
})
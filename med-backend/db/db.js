//set up database connection
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/medTracker', {
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
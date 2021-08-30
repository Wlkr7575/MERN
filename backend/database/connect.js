const mongoose = require('mongoose'),

uri = "mongodb+srv://dbUser:node1234@cluster0.pzd9e.mongodb.net/SocialApp?retryWrites=true&w=majority"

const mongoDB = process.env.MONGODB_URI || uri;

const connectDb =async()=>{
    await mongoose.connect(mongoDB,{   
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log('db connected...')
}

module.exports = connectDb;
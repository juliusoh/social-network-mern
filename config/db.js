const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Portfolio:GetJob123@cluster0.92nso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })

    console.log('MongoDB Connected...')
  } catch(err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;
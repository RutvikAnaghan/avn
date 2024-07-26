const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://rutvikanaghan12:yALl8oXT0VVeu4ai@aphelioscluster.e1ea8zq.mongodb.net/');
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: 'config/.env'});

const connectToDB = async () => {
    try {
        console.log(process.env.DB_URI);
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

};

module.exports = connectToDB;
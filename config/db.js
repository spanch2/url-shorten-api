import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: 'config/.env'});

export const connectToDB = async () => {
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

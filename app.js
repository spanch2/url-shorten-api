import express from 'express';
const app = express();
import { connectToDB } from './config/db.js'
import api from './routes/shorten.js'
import redirect from './routes/redirect.js'

connectToDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', api);
app.use('/', redirect)

const port = 3000;
const host = 'localhost';

app.listen(port, host, () => {
    console.log(`Server started at ${host} port ${port}`);
});
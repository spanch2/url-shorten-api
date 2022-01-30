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

const port = process.env.PORT || 80

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import model from './models';
import routes from './routes';
import cors from 'cors';

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/tododb2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("succesful conn")
})
.catch((err) =>
{console.log("Failed to connect "+err)});
mongoose.Promise = global.Promise;

/*
define app as express method
*/
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

/*
initiliaze the routes for the app
*/
routes(app);

export default app;

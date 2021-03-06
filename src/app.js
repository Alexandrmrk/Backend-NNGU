import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes';
import ErrorHandler from './middleware/ErrorHandler';

const root = path.join.bind(this, __dirname, '../');
dotenv.config({ path: root('.env') });

// console.log(process.env.MONGO_URI);
mongoose
  .connect('mongodb+srv://developer:developer@cluster0.nz0pw.mongodb.net/todos', { useNewUrlParser: true })
  .catch((e) => console.log(e));

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use('/api', ...routes);
app.get('/', (req, res) => {
  res.end('HOME');
});
app.use('*', (request, response) => {
  response.status(404).send('Endpoint not found on server!');
});

app.use(ErrorHandler);

app.listen(process.env.PORT || 80, () => {
  console.log('Express server run http://localhost:3000/');
});

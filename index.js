import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';
import bodyParser from 'body-parser';


const app = express();
const PORT = 8000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use('/', routes);



Connection();

app.listen(PORT, () => console.log(`Server started on localhost: ${PORT}`));
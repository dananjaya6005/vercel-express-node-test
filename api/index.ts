
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

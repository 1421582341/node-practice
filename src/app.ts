import express, { Request, Response, NextFunction } from 'express'

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});


app.listen(8088, function () {
  console.log('node-practice app listening on port 8088!');
});

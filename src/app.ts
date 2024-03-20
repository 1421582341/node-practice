import express from 'express'
import bodyParser from 'body-parser'
import blogRouter from './components/blog/controller'
import errRouter from './components/err/controller'

const app = express();

app.use(bodyParser.json());
app.use(
  blogRouter,
  errRouter,
);

export default app;
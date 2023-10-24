import express from 'express'
import bodyParser from 'body-parser'
import blogRouter from './components/blog/controller'

const app = express();

app.use(bodyParser.json());
app.use(
  blogRouter,
);

export default app;
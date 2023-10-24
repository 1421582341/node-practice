import { Router } from 'express';

const router = Router();

router.get('/', (res, req, next) => {
  req.status(200).send('Hello world!');
});

export default router;
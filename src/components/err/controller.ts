import { Router } from 'express';
import { someSuccessAsyncJob, someFailAsyncJob } from './service';

const router = Router();

router.get('/err', async (_, res) => {
  try {
    await someSuccessAsyncJob();
    await someFailAsyncJob();
    res.status(200).send('Amazing!');
  } catch (err) {
    res.status(500).send('Something went wrong!');
  }
});

export default router;
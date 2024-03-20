import app from './app';
import config from 'config';

const appName = config.get('app.name')

const port = config.get('app.port');

app.listen(port, function () {
  console.log(`${ appName } app listening on port http://localhost:8088`);
});
import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

import { app } from './app.js';

const host: string = process.env.FBSIM_UI_DOMAIN || '0.0.0.0';
const port: number = parseInt(process.env.FBSIM_UI_PORT || '8081', 10);

const server = app.listen(port, host, () => {
  const address = server.address();
  if (address && typeof address !== 'string') {
    console.log(`FBSim UI server listening on ${address.address}:${address.port}`);
  }
  console.log(`Given host and port are: ${host}:${port}`);
});

export { server };

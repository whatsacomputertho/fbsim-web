import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express, { Request, Response } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'hbs');
app.set('views', join(__dirname, '..', 'static', 'views'));
app.use(express.static(join(__dirname, '..', 'static')));
app.use(
  '/lib/fbsim-ui',
  express.static(join(__dirname, '..', 'node_modules', '@whatsacomputertho', 'fbsim-ui', 'dist')),
);

app.get('/', (_req: Request, res: Response): void => {
  res.render('index');
});

export { app };

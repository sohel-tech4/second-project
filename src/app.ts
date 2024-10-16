import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './modules/students/student.route';
const app: Application = express();

// pasers
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;

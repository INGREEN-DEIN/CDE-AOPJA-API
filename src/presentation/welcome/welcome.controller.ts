import { Request, Response } from 'express';

export class WelcomeController {
  greet(req: Request, res: Response) {
    const { name } = req.params;
    res.json(`Welcome ${name}`);
  }
}

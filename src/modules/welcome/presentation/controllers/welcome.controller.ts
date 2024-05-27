import { Request, Response } from 'express';
import { WelcomeService } from '../../application/services/welcome.service';
import { CreateWelcomeDto } from '../../domain';

export class WelcomeController {
  constructor(private readonly welcomeService: WelcomeService) {}

  private handleError = (error: unknown, res: Response) => {
    return res.status(500).json({ error: 'Internal server error' });
  };

  greet = (req: Request, res: Response) => {
    const { name } = req.params;
    const [error, createWelcomeDto] = CreateWelcomeDto.create({ name });
    if (error) return this.handleError(error, res);
    this.welcomeService
      .greet(createWelcomeDto!)
      .then(welcome => res.status(200).json(welcome))
      .catch(error => this.handleError(error, res));
  };
}

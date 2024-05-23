import { CreateWelcomeDto, IWelcomeDatasource, IWelcomeRepository } from '../../domain';

export class WelcomeRepository implements IWelcomeRepository {
  constructor(private welcomeDatasource: IWelcomeDatasource) {}

  public greet(createWelcomeDto: CreateWelcomeDto) {
    return this.welcomeDatasource.greet(createWelcomeDto);
  }
}

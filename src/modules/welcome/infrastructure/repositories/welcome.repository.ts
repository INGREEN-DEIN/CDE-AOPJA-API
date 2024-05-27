import { CreateWelcomeDto, IWelcomeDatasource, IWelcomeRepository, WelcomeEntity } from '../../domain';

export class WelcomeRepository implements IWelcomeRepository {
  constructor(private welcomeDatasource: IWelcomeDatasource) {}

  public greet(createWelcomeDto: CreateWelcomeDto): Promise<WelcomeEntity> {
    return this.welcomeDatasource.greet(createWelcomeDto);
  }
}

import { CreateWelcomeDto, WelcomeEntity } from '../../domain';

export abstract class IWelcomeDatasource {
  abstract greet(createWelcomeDto: CreateWelcomeDto): Promise<WelcomeEntity>;
}

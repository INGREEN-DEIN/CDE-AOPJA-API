import { CreateWelcomeDto, WelcomeEntity } from '../../domain';

export abstract class IWelcomeRepository {
  abstract greet(createWelcomeDto: CreateWelcomeDto): Promise<WelcomeEntity>;
}

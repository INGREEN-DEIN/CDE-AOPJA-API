import { CreateWelcomeDto, IWelcomeRepository, WelcomeEntity } from '../../domain';

export class WelcomeService {
  constructor(private readonly welcomeRepository: IWelcomeRepository) {}
  public async greet(createWelcomeDto: CreateWelcomeDto): Promise<WelcomeEntity> {
    const welcomeEntity = await this.welcomeRepository.greet(createWelcomeDto);
    if (!welcomeEntity) throw new Error('Welcome not supported');
    return welcomeEntity;
  }
}

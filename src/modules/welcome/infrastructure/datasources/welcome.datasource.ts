import { CreateWelcomeDto, IWelcomeDatasource, WelcomeEntity } from '../../domain';

export class WelcomeDatasource implements IWelcomeDatasource {
  public async greet(createWelcomeDto: CreateWelcomeDto): Promise<WelcomeEntity> {
    return WelcomeEntity.fromObject({ name: createWelcomeDto.name });
  }
}

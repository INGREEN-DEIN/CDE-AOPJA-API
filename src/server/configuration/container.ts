import { AwilixContainerAdapter } from '../../adapters';
import { WelcomeService } from '../../modules/welcome/application';
import { WelcomeDatasource, WelcomeRepository } from '../../modules/welcome/infrastructure';
import { WelcomeController } from '../../modules/welcome/presentation/controllers/welcome.controller';

export class Container {
  static setup() {
    const container = AwilixContainerAdapter.setup();
    container.registerAsScoped('welcomeController', WelcomeController);
    container.registerAsScoped('welcomeService', WelcomeService);
    container.registerAsScoped('welcomeRepository', WelcomeRepository);
    container.registerAsScoped('welcomeDatasource', WelcomeDatasource);
    return container;
  }
}

export const { container } = Container.setup();

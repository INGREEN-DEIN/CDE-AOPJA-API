import { AwilixContainerAdapter } from '../../adapter';
import { WelcomeController } from '../../presentation/welcome/welcome.controller';

class Container {
  static setup() {
    const container = AwilixContainerAdapter.setup();
    container.registerAsScoped('welcomeController', WelcomeController);
    return container;
  }
}

export const { container } = Container.setup();

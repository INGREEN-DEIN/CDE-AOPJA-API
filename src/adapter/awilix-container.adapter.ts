import { AwilixContainer, Constructor, InjectionMode, asClass, createContainer } from 'awilix';

export class AwilixContainerAdapter {
  public container: AwilixContainer;

  private constructor(container: AwilixContainer) {
    this.container = container;
  }

  static setup() {
    const container = createContainer({
      injectionMode: InjectionMode.CLASSIC,
      strict: true,
    });
    return new AwilixContainerAdapter(container);
  }

  public registerAsScoped(controllerName: string, controllerClass: Constructor<object>) {
    this.container.register({
      [controllerName]: asClass(controllerClass).scoped(),
    });
  }

  public registerAsSingleton(controllerName: string, controllerClass: Constructor<object>) {
    this.container.register({
      [controllerName]: asClass(controllerClass).singleton(),
    });
  }

  public registerAsTransient(controllerName: string, controllerClass: Constructor<object>) {
    this.container.register({
      [controllerName]: asClass(controllerClass).transient(),
    });
  }
}

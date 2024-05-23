export class WelcomeEntity {
  public greet: string;
  constructor(public name: string) {
    this.greet = `Welcome ${name}`;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static fromObject(object: { [key: string]: any }): WelcomeEntity {
    const { name } = object;
    if (!name) throw 'Id is required';

    return new WelcomeEntity(name);
  }
}

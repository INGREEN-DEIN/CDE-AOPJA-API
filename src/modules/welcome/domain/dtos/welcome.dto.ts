export class CreateWelcomeDto {
  constructor(public name: string) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static create(object: { [key: string]: any }): [string?, CreateWelcomeDto?] {
    const { name } = object;

    if (!name) return ['Name is missing', undefined];

    const createCategoryDto = new CreateWelcomeDto(name);
    return [undefined, createCategoryDto];
  }
}

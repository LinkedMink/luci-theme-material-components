declare global {
  export const baseclass = {
    extends: (properties: object) => object,
  };

  export const E = () => HTMLElement;
}

declare module "*.svg" {
  export const ReactComponent: SvgrComponent;
  const url: string;
  export default url;
}

declare module "*.png";

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.png" {
  const image: string;
  export default image;
}
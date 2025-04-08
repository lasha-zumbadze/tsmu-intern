// For CSS files
declare module "*.css";

// For image files
declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.png" {
  const content: string;
  export default content;
}

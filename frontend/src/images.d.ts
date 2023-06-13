declare module "*.jpg" {
  let type: string;
  export = type;
}

declare module "*.png" {
  let type: string;
  export = type;
}

declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

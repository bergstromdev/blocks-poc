import { Block1 } from "./Block1";
// import { Block2 } from "./Block2";

type Props = {
  variant?: App.BlockVariant;
  block: App.BlockContent[];
};

export const BlockRenderer = ({ variant, block }: Props) => {
  switch (variant) {
    case "block1":
      return <Block1 {...block[0]} />;
    // case "block2":
    //   return <Block2 {...block} />;
    default:
      return null;
  }
};

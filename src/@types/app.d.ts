declare namespace App {
  export type Data = {
    blocks: Block[];
    // ...
  };

  export type BlockVariant =
    | "block1"
    | "block2"
    | "block3"
    | "block4"
    | "offers";

  export type BlockContent = {
    backgroundColor: string;
    image: {
      url: string;
      alt: string;
    };
    imagePosition: "left" | "right";
    isTall: boolean;
    cta: {
      ornament?: Ornament;
      heading?: string;
      subheading?: string;
      description?: string;
      buttonText?: string;
      buttonUrl?: string;
    };
  };

  export type Block = {
    id: string;
    variant: BlockVariant;
    content: BlockContent[];
  };

  export type Ornament =
    | "NorthStar"
    | "StarField"
    | "LongDiamond"
    | "SunBurst"
    | "Diamond"
    | "Orbital"
    | "ShootingStar";
}

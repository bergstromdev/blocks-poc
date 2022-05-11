import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { TextContent } from "./TextContent";

const BlockContainer = styled.section<{
  backgroundColor: string;
  position: "left" | "right";
  isTall: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-bottom: 1rem;
  .image,
  .text {
    grid-column: 1 / -1;
  }
  .text {
    grid-column: 10 / -11;
    grid-row: 40 / -11;
  }
  .image {
    grid-row: 1 / 51;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ isTall }) => (isTall ? "1060px" : "860px")};
    .image,
    .text {
      grid-row: 1 / -1;
    }
    .image {
      grid-column: ${({ position }) =>
        position === "left" ? "1 / 51" : "51 / -1"};
    }
    .text {
      grid-column: ${({ position }) =>
        position === "left" ? "41 / -11" : "10 / -41"};
      align-self: center;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .image {
      grid-column: ${({ position }) =>
        position === "left" ? "1 / 51" : "51 / -1"};
    }
    .text {
      grid-column: ${({ position }) =>
        position === "left" ? "46 / -16" : "15 / -46"};
    }
  }
`;

const ImageContainer = styled.div<{
  imageUrl?: string;
  position: "left" | "right";
}>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const TextContainer = styled(motion.div)``;

const TextInnerContainer = styled.div`
  background-color: var(--color-background-off-white);
`;

type Props = App.BlockContent;

export const Block1 = ({
  image,
  backgroundColor,
  imagePosition = "left",
  isTall = false,
  cta,
}: Props) => {
  return (
    <BlockContainer
      backgroundColor={backgroundColor}
      position={imagePosition}
      isTall={isTall}
    >
      <ImageContainer
        imageUrl={image?.url}
        position={imagePosition}
        className="image"
      />
      <TextContainer className="text">
        <TextInnerContainer>
          <TextContent {...cta} />
        </TextInnerContainer>
      </TextContainer>
    </BlockContainer>
  );
};

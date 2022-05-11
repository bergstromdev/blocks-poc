import styled from "styled-components";
import { motion } from "framer-motion";
import { Ornament } from "../Ornaments/Ornament";

const TextContentContainer = styled.div`
  padding: ${({ theme }) => theme.spacing["1"]};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .ornament {
    max-width: 2rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["2.5"]};
    .ornament {
      max-width: 3rem;
    }
  }
`;

const Heading = styled(motion.h2)`
  font-family: var(--font-family-heading-1);
  font-weight: 300;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 22px;
  line-height: 1.3;
  margin-block: ${({ theme }) => theme.spacing["0.5"]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 36px;
  }
`;

const SubHeading = styled(motion.h3)`
  font-family: var(--font-family-heading-2);
  font-size: 22px;
  font-style: italic;
`;

const Text = styled(motion.p)`
  font-family: var(--font-family-body);
  line-height: 1.8;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    -webkit-line-clamp: 6;
  }
`;

type Props = App.BlockContent["cta"];

export const TextContent = ({
  heading,
  subheading,
  description,
  ornament,
}: Props) => {
  return (
    <TextContentContainer>
      <Ornament variant={ornament} />
      <Heading
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true }}
      >
        {heading}
      </Heading>
      {subheading && (
        <SubHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
        >
          {subheading}
        </SubHeading>
      )}
      {description && (
        <Text
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
        >
          {description}
        </Text>
      )}
    </TextContentContainer>
  );
};

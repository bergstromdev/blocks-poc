import { ReactNode, useRef, useState } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 1;
`;

const Content = styled(motion.div)`
  transform: translateZ(0);
`;

type Props = {
  children: ReactNode;
};

export const ParallaxBox = ({ children }: Props) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -0.15], {
    clamp: false,
  });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    element && setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <Container ref={ref}>
      <Content style={{ y }}>{children}</Content>
    </Container>
  );
};

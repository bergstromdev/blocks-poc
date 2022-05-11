import styled from "styled-components";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useViewportScroll } from "framer-motion";
import scrollData from "./scroll.json";
import { useEffect, useState } from "react";

const ScrollIconContainer = styled.div<{ hide: boolean }>`
  position: absolute;
  z-index: 2;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
`;

export const ScrollIcon = () => {
  const { scrollYProgress } = useViewportScroll();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    scrollYProgress.onChange((progress) => {
      if (progress > 0.02) {
        setHide(true);
      } else {
        setHide(false);
      }
    });
  });

  return (
    <ScrollIconContainer hide={hide}>
      <Player
        autoplay
        loop
        src={scrollData}
        style={{ height: "50px", width: "50px" }}
      >
        <Controls />
      </Player>
    </ScrollIconContainer>
  );
};

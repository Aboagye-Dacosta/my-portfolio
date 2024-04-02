import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { usePointer } from "../hooks/usePointer";

const StyledBackgroundGradient = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 10;
`;

function BackgroundGradient() {
  const ref = useRef();

  const { pointerPos } = usePointer(ref);

  return (
    <StyledBackgroundGradient
      layout
      ref={ref}
      style={{
        background: `radial-gradient(400px at ${pointerPos.x}px ${pointerPos.y}px, rgba(119,104,104,0.15) 23%, rgba(73,65,65,0.15) 47%, rgba(12,12,12,1) 100%)`,
      }}
    ></StyledBackgroundGradient>
  );
}

export default BackgroundGradient;

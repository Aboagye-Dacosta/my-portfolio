import { motion } from "framer-motion";
import styled from "styled-components";

const ActiveNav = styled(motion.span)`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-700);
`;

export default ActiveNav;

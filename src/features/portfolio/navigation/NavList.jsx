import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect } from "react";
import styled from "styled-components";
import { breakpoint } from "../../../styles/GlobalStyles";
import Colored from "../../../ui/Colored";
import { useActive } from "./ActiveNavProvider";

const StyledNavList = styled.ul`
  display: none;

  @media screen and (min-width: ${breakpoint.desktop}) {
    display: block;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 2px;
      background-color: var(--color-brand-700);
      left: 0.9rem;
      top: 0;
      bottom: 0;
    }
  }
`;

const StyledItem = styled(motion.li)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const Indicator = styled(motion.span)`
  display: inline-block;
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: var(--color-brand-700);

  &:before {
    content: "";
    position: absolute;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background-color: var(--color-black);
  }
`;
const LineIndicator = styled(motion.span)`
  display: inline-block;
  width: 3rem;
  height: 2px;
  background-color: var(--color-brand-700);
`;

const ItemContent = styled.div`
  margin-left: 1rem;
`;

const lineVariant = {
  inactive: {
    scaleX: 1,
  },
  active: {
    scaleX: 2,
  },
};

const navVariant = {
  inactive: {
    x: 0,
  },
  active: {
    x: "15px",
  },
};

const NavList = ({ children }) => {
  return <StyledNavList>{children}</StyledNavList>;
};

const Item = ({ children, to = "" }) => {
  const { setActiveId, activeId } = useActive();
  const current = window.location.hash;

  const id = to.replace("#", "");
  const active = activeId === id;

  useEffect(() =>
  {
    if (!current) return;
    if (current.replace("#", "") == active) {
      document.querySelector(current).scrollIntoView();
    }
  }, [active, current]);

  return (
    <StyledItem animate={active ? "active" : "inactive"}>
      {active && <Indicator layout layoutId="my-nav" />}
      {!active && <div></div>}
      <LineIndicator variants={lineVariant} style={{ originX: 0 }} />
      <motion.a
        style={{ display: "inline-block" }}
        href={to}
        onClick={() => setActiveId(id)}
        variants={navVariant}
      >
        <Colored as={ItemContent} reverse={active ? "true" : "false"}>
          {children}
        </Colored>
      </motion.a>
    </StyledItem>
  );
};

NavList.Item = Item;

Item.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

NavList.propTypes = {
  children: PropTypes.any,
};

export default NavList;

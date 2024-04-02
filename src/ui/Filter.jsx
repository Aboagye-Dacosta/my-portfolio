import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-black-300);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-black-100);
  box-shadow: var(--shadow-sm);
  border: none;
  position: relative;
  z-index:100;

  ${(props) =>
    props.active &&
    css`
      color: var(--color-brand-100);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-700);
    color: var(--color-brand-100);
  }
`;

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

function Filter({ filterIdentifier, options = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterValue =
    searchParams.get(filterIdentifier) || options.at?.(0)?.value;

  const handleClick = (value) => {
    searchParams.set(filterIdentifier, value);
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={currentFilterValue === option.value}
          disabled={currentFilterValue === option.value}
        >
          {option.label}
          {currentFilterValue === option.value && (
            <ActiveNav layout layoutId="filter-Id" />
          )}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

Filter.propTypes = {
  filterIdentifier: PropTypes.string,
  options: PropTypes.array,
};

export default Filter;

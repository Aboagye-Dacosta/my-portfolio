import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoint } from "../styles/GlobalStyles";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
  }

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-black-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

export const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ children, label, error, className, style }) {
  return (
    <StyledFormRow className={className} style={style}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error role="alert">{error}</Error>}
    </StyledFormRow>
  );
}

FormRow.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
};

export default FormRow;

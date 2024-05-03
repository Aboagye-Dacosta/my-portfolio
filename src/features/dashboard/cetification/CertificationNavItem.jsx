import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import ActiveNav from "../../../ui/ActiveNav";

const StyledCertificationNavItem = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  text-align: left;
  text-transform: capitalize;
  padding: 1rem;
  color: var(--color-grey-500);
`;

function CertificationNavItem({ title }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("type") ?? "all";

  const handleClick = () => {
    const param = title.toLowerCase().replaceAll(" ", "-");
    searchParams.set("type", param);
    setSearchParams(searchParams);
  };
  return (
    <StyledCertificationNavItem onClick={handleClick}>
      {title}
      {filter == title.toLowerCase().replaceAll(" ", "-") && (
        <ActiveNav layout layoutId="certification-type" />
      )}
    </StyledCertificationNavItem>
  );
}

CertificationNavItem.propTypes = {
  title: PropTypes.string,
};

export default CertificationNavItem;

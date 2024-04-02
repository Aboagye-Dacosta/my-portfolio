import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  width: 7rem;
`;

const Img = styled.img`
  height: 4.6rem;
  width: auto;
`;

function Logo({ src, style, className }) {
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" style={style} className={className} />
    </StyledLogo>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object
}

export default Logo;

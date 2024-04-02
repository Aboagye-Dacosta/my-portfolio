import PropTypes from "prop-types";
import styled from "styled-components";

const StyledName = styled.p`
  line-height: 1.2;
`;
function Name({ style, className, name }) {
  return (
    <StyledName style={style} className={className}>
      {name}
    </StyledName>
  );
}

Name.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
};

export default Name;

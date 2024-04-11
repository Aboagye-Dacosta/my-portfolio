import PropTypes from "prop-types";
import styled from "styled-components";
import Paragraph from "./Paragraph";
import Spacer from "./Spacer";
import Spinner from "./Spinner";

const StyledFullPageLoader = styled.div`
  height: 100vh;
  position: absolute;
  width: 100dvw;
  z-index: 10000;
  /* background-color: var(--color-black); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

function FullPageLoader({ screenType = "portfolio" }) {
  return (
    <StyledFullPageLoader>
      <div>
        <Spinner />
      </div>
      <Spacer />
      {screenType == "portfolio" && (
        <Paragraph align="center">
          Wait a moment I am getting everything ready 😁 ...{" "}
        </Paragraph>
      )}
    </StyledFullPageLoader>
  );
}

FullPageLoader.propTypes = {
  screenType: PropTypes.string,
};

export default FullPageLoader;

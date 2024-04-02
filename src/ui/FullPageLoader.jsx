import styled from "styled-components";
import Heading from "./Heading";
import Spacer from "./Spacer";
import Spinner from "./Spinner";

const StyledFullPageLoader = styled.div`
  height: 100vh;
  position: fixed;
  width: 100dvw;
  z-index: 1000;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function FullPageLoader() {
  return (
    <StyledFullPageLoader>
      <div>
        <Spinner />
      </div>
      <Spacer />
      <Heading as="h2">
        Wait a moment I am getting everything ready 😁 ...{" "}
      </Heading>
    </StyledFullPageLoader>
  );
}

export default FullPageLoader;

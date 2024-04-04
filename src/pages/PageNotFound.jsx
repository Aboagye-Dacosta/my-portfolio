import styled from "styled-components";
import Heading from "../ui/Heading";
import NavBack from "../ui/NavBack";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-black-300);
  border: 1px solid var(--color-black-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <NavBack label="Back" />
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;

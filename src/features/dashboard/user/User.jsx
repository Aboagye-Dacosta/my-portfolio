import styled from "styled-components";

import Box from "../../../ui/Box";
import Button from "../../../ui/Button";
import FileInput from "../../../ui/FileInput";
import FormRow from "../../../ui/FormRow";
import Image from "../../../ui/Image";
import Input from "../../../ui/Input";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";

import { breakpoint } from "../../../styles/GlobalStyles";
import Colored from "../../../ui/Colored";
import { useStrings } from "../about_me/useStrings";

const StyledFormRow = styled(FormRow)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: grid;
    grid-template-columns: 15rem 1fr;
  }
`;

const StyledImage = styled(Image)`
  width: 5rem;
  margin: 1rem 0;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

function User() {
  const { strings: { logo } = {} } = useStrings();
  return (
    <StyledRow items="start" type="horizontal" justify="center">
      <Row>
        <Box>
          <StyledFormRow label="Username">
            <Input />
          </StyledFormRow>
          <StyledFormRow label="Email">
            <Input type="email" />
          </StyledFormRow>
          <Spacer size={1} />

          <Row type="horizontal" justify="end">
            <Button size="small">Update</Button>
          </Row>
        </Box>
        <Box>
          <StyledFormRow label="New password">
            <Input type="password" />
          </StyledFormRow>
          <StyledFormRow label="Re-enter new password">
            <Input type="password" />
          </StyledFormRow>
          <Spacer size={1} />

          <Row type="horizontal" justify="end">
            <Button size="small">Update</Button>
          </Row>
        </Box>
      </Row>

      <Row>
        <Box>
          <StyledFormRow label="Your profile">
            <FileInput />
          </StyledFormRow>
          <Spacer size={1} />
          <Row type="horizontal" justify="end">
            <Button size="small">Update</Button>
          </Row>
        </Box>
        <Box>
          <StyledFormRow label="Logo">
            <FileInput />
          </StyledFormRow>
          <Spacer size={1} />
          <Row type="horizontal" justify="space-between">
            <Row type="horizontal" items="center">
              <Colored>Currently uploaded</Colored>
              <StyledImage src={logo} />
            </Row>
            <Button size="small">Update</Button>
          </Row>
        </Box>
      </Row>
    </StyledRow>
  );
}

export default User;

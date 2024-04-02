import styled from "styled-components";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Row from "../../ui/Row";
import Textarea from "../../ui/Textarea";

const StyledMailForm = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  width: 30rem;
  /* background-color: var(--color-black-100); */
`;
function MailForm() {
  return (
    <StyledMailForm>
      <Row>
        <Input />
        <Textarea />
        <Row type="horizontal" justify="end">
          <Button size="medium" variation="secondary">
            cancel
          </Button>
          <Button size="medium">send</Button>
        </Row>
      </Row>
    </StyledMailForm>
  );
}

export default MailForm;

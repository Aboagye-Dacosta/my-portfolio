import styled from "styled-components";
import Button from "../../../ui/Button";
import FileInput from "../../../ui/FileInput";
import FormRowVertical from "../../../ui/FormRowVertical";
import Heading from "../../../ui/Heading";
import Input from "../../../ui/Input";
import Row from "../../../ui/Row";

const StyledCertificationForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
`;

const StyledForm = styled.form`
  margin: 1rem 0rem;
`;

function CertificationForm() {
  return (
    <StyledCertificationForm>
      <div>
        <Heading as="h2">Add Certification</Heading>
        <StyledForm>
          <FormRowVertical label="Certification image">
            <FileInput />
          </FormRowVertical>
          <FormRowVertical label="Title">
            <Input id="certification-titlee" />
          </FormRowVertical>
          <FormRowVertical label="Verification Link">
            <Input id="certification-link" type="link" />
          </FormRowVertical>
          <FormRowVertical label="Issuer">
            <Input id="certification-issuer" />
          </FormRowVertical>
          <Row type="horizontal">
            <Button type="reset" variation="secondary">
              Reset
            </Button>
            <Button type="submit ">Save</Button>
          </Row>
        </StyledForm>
      </div>
    </StyledCertificationForm>
  );
}

export default CertificationForm;

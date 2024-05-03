import styled from "styled-components";
import CertificationForm from "./CertificationForm";
import CertificationList from "./CertificationList";
import CertificationNavigation from "./CertificationNavigation";

const StyledCertificationLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr 30rem;
  gap: 2.5rem;
`;

function CertificationLayout() {
  return (
    <StyledCertificationLayout>
      <CertificationNavigation />
      <CertificationList />
      <CertificationForm />
    </StyledCertificationLayout>
  );
}

export default CertificationLayout;

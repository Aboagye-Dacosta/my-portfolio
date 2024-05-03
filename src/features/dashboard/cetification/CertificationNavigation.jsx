import styled from "styled-components";
import Button from "../../../ui/Button";
import Heading from "../../../ui/Heading";
import CertificationNavItem from "./CertificationNavItem";

const StyledCertificationNavigation = styled.div`
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;




function CertificationNavigation() {
  const categories = [
    "all",
    "javascript",
    "react",
    "node.js",
    "project management",
    "css",
    "web development",
  ];

  return (
    <StyledCertificationNavigation>
        <Heading as="h2">Certification Categories</Heading>
        {categories.map((category) => (
          <CertificationNavItem key={category} title={category} />
        ))}

      <Button>Add new category</Button>
    </StyledCertificationNavigation>
  );
}

export default CertificationNavigation;

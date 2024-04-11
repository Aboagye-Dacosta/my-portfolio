import styled from "styled-components";

import { breakpoint } from "../../styles/GlobalStyles";
import FullPageLoader from "../../ui/FullPageLoader";
import { useStrings } from "../dashboard/about_me/useStrings";
import { useExperiences } from "../dashboard/display/useExperiences";
import { useRegular } from "../dashboard/display/useRegular";
import { useProjects } from "../dashboard/projects/useProjects";
import About from "./about/About";
import Experience from "./experience/Experience";
import Footer from "./Footer";
import Navigation from "./navigation/Navigation";
import PortfolioHomeLayout from "./PorfolioHomeLayout";
import Projects from "./projects/Projects";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 3rem;
  padding: 5rem;
  z-index: 100;

  @media screen and (min-width: ${breakpoint.tablet}) {
    padding: 5rem 0;
  }
`;

function PortfolioDetails() {
  const { isLoadingProjects } = useProjects();
  const { isLoadingStrings } = useStrings();
  const { isLoadingRegular } = useRegular();
  const { isLoadingExperiences } = useExperiences();

  if (
    isLoadingExperiences ||
    isLoadingStrings ||
    isLoadingProjects ||
    isLoadingRegular
  )
    return <FullPageLoader />;

  return (
    <PortfolioHomeLayout>
      <Navigation />
      <Container>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </Container>
    </PortfolioHomeLayout>
  );
}

export default PortfolioDetails;

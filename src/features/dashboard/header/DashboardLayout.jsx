import { Outlet } from "react-router-dom";
import styled from "styled-components";

import BackgroundGradient from "../../../ui/BackgroundGradient";
import FullPageLoader from "../../../ui/FullPageLoader";
import { useSocialLinks } from "../about_me/useSocialLinks";
import { useStrings } from "../about_me/useStrings";
import { useProjects } from "../projects/useProjects";
import DashboardHeader from "./DashboardHeader";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-rows: 10rem 1fr;
  /* padding: 5rem; */
  background-color: var(--color-black);
  position: relative;
  height: 100vh;
  gap: 2rem;
`;

const DashboardBody = styled.main`
  z-index: 1000;
  background-color: var(--color-black-100);
  overflow-x: hidden;
  padding: 2rem 3rem;
`;

function DashboardLayout() {
  const { isLoadingProjects } = useProjects();
  const { isLoadingStrings } = useStrings();
  const { isLoadingLinks } = useSocialLinks();

  if (isLoadingStrings || isLoadingProjects || isLoadingLinks)
    return <FullPageLoader />;

  return (
    <>
      <BackgroundGradient />
      <StyledDashboardLayout>
        <DashboardHeader />
        <DashboardBody>
          <Outlet />
        </DashboardBody>
      </StyledDashboardLayout>
    </>
  );
}

export default DashboardLayout;

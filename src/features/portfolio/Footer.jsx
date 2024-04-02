import styled from "styled-components";
import { breakpoint } from "../../styles/GlobalStyles";
import Logo from "../../ui/Logo";
import Paragraph from "../../ui/Paragraph";
import { useStrings } from "../dashboard/about_me/useStrings";

const StyledFooter = styled.div`
  padding: 2rem 2rem 2rem;
  background-color: var(--color-black-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    padding: 2rem 2rem 2rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: start;
  }
`;

function Footer() {
  const {
    strings: { logoDetailed },
  } = useStrings();
  return (
    <StyledFooter>
      {/* <Row type="horizontal"> */}
      <div>
        <Logo src={logoDetailed} />
      </div>
      <Paragraph>
        Loosely designed in Figma and coded in Visual Studio Code by yours
        truly. Built with ReactJS , Styled-components and framer-motion,
        deployed with Vercel. All text is set in the Poppins typeface.
      </Paragraph>
    </StyledFooter>
  );
}

export default Footer;

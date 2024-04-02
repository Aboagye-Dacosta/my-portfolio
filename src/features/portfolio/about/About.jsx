import Paragraph from "../../../ui/Paragraph";
import Section from "../../../ui/Section";
import Spacer from "../../../ui/Spacer";
import { useStrings } from "../../dashboard/about_me/useStrings";

function About() {
  const {
    strings: {
      introDescription,
      currentlyDoingDescription,
      freeTimeDescription,
    },
  } = useStrings();
  return (
    <Section title="About Me" id="about-me">
      <Paragraph>{introDescription}</Paragraph>
      <Spacer />
      <Paragraph>{currentlyDoingDescription}</Paragraph>
      <Spacer />

      <Paragraph>{freeTimeDescription}</Paragraph>
    </Section>
  );
}

export default About;

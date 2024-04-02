import Colored from "../../../ui/Colored";
import Paragraph from "../../../ui/Paragraph";
import Row from "../../../ui/Row";
import Section from "../../../ui/Section";
import Spacer from "../../../ui/Spacer";
import { useStrings } from "../../dashboard/about_me/useStrings";
import ExperienceOnDates from "./ExperienceOnDates";
import { useShowExperience } from "./useShowExperience";

function Experience() {
  const { strings: { resume } = {} } = useStrings();
  const {showExperiences = []} = useShowExperience()
  return (
    <Section title="Experiences over the years" id="my-experiences">
      <ExperienceOnDates experiences={showExperiences}/>
      <Spacer />
      <Row items="center" justify="start" type="horizontal">
        <a href={resume} target="_blank">
          <Colored as="div">
            <Paragraph as="span" size="1.4">
              View Full Résumé
            </Paragraph>
          </Colored>
        </a>
      </Row>
    </Section>
  );
}

export default Experience;

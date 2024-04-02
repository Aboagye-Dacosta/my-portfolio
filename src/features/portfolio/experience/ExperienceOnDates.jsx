import PropTypes from "prop-types";
import ExperienceCard from "./ExperienceCard";

function ExperienceOnDates({ experiences = [] }) {
  const list = experiences.map((experience) => (
    <ExperienceCard key={experience.id} experience={experience} />
  ));

  return <div>{list}</div>;
}

ExperienceOnDates.propTypes = {
  experiences: PropTypes.array,
};

export default ExperienceOnDates;

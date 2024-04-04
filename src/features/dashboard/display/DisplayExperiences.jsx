import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import { useUpdateProject } from "../projects/useUpdateProject";
import DisplayCard from "./DisplayCard";
import SelectDisplay from "./SelectDisplay";
import { useExperiences } from "./useExperiences";

function DisplayExperiences() {
  const { experiences } = useExperiences();
  const options = experiences.map((experience) => ({
    label: experience.name,
    value: experience.id,
  }));

  const { updateProject } = useUpdateProject();

  const handleSelected = (selectedId) => {
    updateProject({ project: { show: true }, id: selectedId });
  };
  const handleRemove = (selectedId) => {
    updateProject({ project: { show: false }, id: selectedId });
  };

  return (
    <div>
      <SelectDisplay options={options} onClick={handleSelected} />
      <Spacer />
      <Row type="horizontal" wrap="wrap">
        {experiences
          .filter((experience) => experience.show)
          .map((experience) => (
            <DisplayCard
              key={experience.id}
              project={experience}
              removeProject={handleRemove}
            />
          ))}
      </Row>
    </div>
  );
}

export default DisplayExperiences;

import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import { useUpdateProject } from "../projects/useUpdateProject";
import DisplayCard from "./DisplayCard";
import SelectDisplay from "./SelectDisplay";
import { useRegular } from "./useRegular";

function DisplayRegular() {
  const { regular } = useRegular();
  const options = regular.map((experience) => ({
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
        {regular
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

export default DisplayRegular;

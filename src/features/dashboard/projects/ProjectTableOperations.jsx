import Filter from "../../../ui/Filter";
import Row from "../../../ui/Row";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Experience", value: "experience" },
  { label: "Regular", value: "regular" },
];
function ProjectTableOperations() {
  return (
    <Row type="horizontal" items="center">
      <Filter filterIdentifier="type" options={filterOptions} />
    </Row>
  );
}

export default ProjectTableOperations;

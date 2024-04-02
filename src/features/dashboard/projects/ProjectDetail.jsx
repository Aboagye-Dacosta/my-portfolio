import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import Heading from "../../../ui/Heading";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import ProjectTable from "./ProjectTable";
import ProjectTableOperations from "./ProjectTableOperations";

function ProjectDetail() {
  return (
    <>
      <Row type="horizontal" items="center" justify="space-between">
        <Heading as="h2">All My Projects</Heading>
        <ProjectTableOperations />
      </Row>
      <Spacer size={3} />
      <ProjectTable />
      <Spacer size={3} />
      <Row>
        <Button as={Link} to="/dashboard/projects/new">
          Create new project
        </Button>
      </Row>
    </>
  );
}

export default ProjectDetail;

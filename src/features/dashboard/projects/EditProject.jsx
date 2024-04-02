import Heading from "../../../ui/Heading";
import NavBack from "../../../ui/NavBack";
import Row from "../../../ui/Row";
import ProjectForm from "./ProjectForm";
import { useProject } from "./useProject";

function EditProject() {
  const { project = {} } = useProject();

  return (
    <>
      <Row type="horizontal" items="center" justify="space-between">
        <Heading as="h2">Edit Project {project.id}</Heading>
        <NavBack label="Back" />
      </Row>
      <ProjectForm project={project} />
    </>
  );
}

export default EditProject;

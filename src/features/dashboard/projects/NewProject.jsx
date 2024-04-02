import Heading from "../../../ui/Heading";
import NavBack from "../../../ui/NavBack";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import ProjectForm from "./ProjectForm";

function NewProject() {
  return (
    <>
      <Row type="horizontal" items="center" justify="space-between">
        <Heading as="h2">New Projects</Heading>
        <NavBack label="Back" />
      </Row>
      <Spacer size={3} />
      <ProjectForm />
    </>
  );
}

export default NewProject;

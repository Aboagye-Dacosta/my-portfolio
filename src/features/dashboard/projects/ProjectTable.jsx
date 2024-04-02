import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import ProjectTableRow from "./ProjectTableRow";
import { useProjects } from "./useProjects";

function ProjectTable() {
  const {  projects } = useProjects();


  return !projects.length ? (
    <Empty resource="Projects" />
  ) : (
    <Table columns="10rem 1fr 2.2fr 1fr 15rem 10rem">
      <Table.Header>
        <div></div>
        <div>Project</div>
        <div>Built With</div>
        <div>Link</div>
        <div>Type</div>
        <div>Actions</div>
      </Table.Header>
      <Table.Body
        data={projects}
        render={(data) => <ProjectTableRow key={data.id} project={data} />}
      />
    </Table>
  );
}

export default ProjectTable;

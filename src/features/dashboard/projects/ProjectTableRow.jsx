import PropTypes from "prop-types";
import { FaGripHorizontal } from "react-icons/fa";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Button from "../../../ui/Button";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Modal from "../../../ui/Modal";
import Row from "../../../ui/Row";
import SpinnerSm from "../../../ui/SpinnerSm";
import Table from "../../../ui/Table";
import TableImg from "../../../ui/TableImg";
import Tag from "../../../ui/Tag";

import { useDeleteProject } from "./useDeleteProject";

function ProjectTableRow({
  project: {
    id,
    image,
    name,
    builtWith = [],
    link: { link, title } = {},
    type,
  } = {},
}) {
  const { isDeletingProject, deleteProject } = useDeleteProject();
  return (
    <Table.Row>
      <TableImg src={image} />
      <div>{name}</div>
      <Row type="horizontal" wrap="wrap">
        {builtWith.map((item) => (
          <Tag type="grey" key={item}>
            {item}
          </Tag>
        ))}
      </Row>
      <div>
        <a href={link}>{title}</a>
      </div>
      <div>
        {type === "regular" && <Tag type="blue">{type}</Tag>}
        {type === "experience" && <Tag type="green">{type}</Tag>}
      </div>
      <Row type="horizontal">
        <Button
          size="small"
          variation="secondary"
          as={Link}
          to={`/dashboard/projects/edit/${id}`}
        >
          <FaPencil />
        </Button>
        <Modal>
          <Modal.Open opens="delete-project">
            <Button size="small">
              {isDeletingProject ? <SpinnerSm /> : <FaTrash />}
            </Button>
          </Modal.Open>

          <Modal.Window name="delete-project">
            <ConfirmDelete
              resourceName="project"
              onConfirm={() => deleteProject(id)}
            />
          </Modal.Window>
        </Modal>
        <Button
          size="small"
          variation="secondary"
          as={Link}
          to={`/dashboard/projects/${id}`}
        >
          <FaGripHorizontal />
        </Button>
      </Row>
    </Table.Row>
  );
}

ProjectTableRow.propTypes = {
  project: PropTypes.object,
};

export default ProjectTableRow;

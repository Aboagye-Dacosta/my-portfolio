import PropTypes from "prop-types";
import { FaSquareGithub } from "react-icons/fa6";
import Row from "../../../ui/Row";
import Table from "../../../ui/Table";
function ProjectTableRowMobile({ project: { name, link } }) {
  return (
    <Table.Row>
      <div>{name}</div>
      <Row type="horizontal">
        <a href={link.link}>{link.title}</a>
        {String(link.title).toLowerCase().includes("github") && (
          <FaSquareGithub />
        )}
      </Row>
    </Table.Row>
  );
}

ProjectTableRowMobile.propTypes = {
  project: PropTypes.object,
};

export default ProjectTableRowMobile;

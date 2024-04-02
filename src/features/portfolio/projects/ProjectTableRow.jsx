import PropTypes from "prop-types";
import { FaSquareGithub } from "react-icons/fa6";

import Row from "../../../ui/Row";
import Table from "../../../ui/Table";
import TableImg from "../../../ui/TableImg";
import Tag from "../../../ui/Tag";

function ProjectTableRow({
  project: { image, dateBuilt, name, builtWith, link },
}) {
  return (
    <Table.Row>
      <TableImg src={image} />
      <div>{new Date(dateBuilt).getFullYear()}</div>
      <div>{name}</div>
      <Row type="horizontal" wrap="wrap">
        {builtWith.map((item, id) => (
          <Tag key={id} type="grey">
            {item}
          </Tag>
        ))}
      </Row>
      <Row type="horizontal">
        <a href={link.link}>{link.title}</a>
        {String(link.title).toLowerCase().includes("github") && (
          <FaSquareGithub />
        )}
      </Row>
    </Table.Row>
  );
}

ProjectTableRow.propTypes = {
  project: PropTypes.object,
};

export default ProjectTableRow;

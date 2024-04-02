import styled from "styled-components";

import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { breakpoint } from "../../../styles/GlobalStyles";
import Button from "../../../ui/Button";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Heading from "../../../ui/Heading";
import Image from "../../../ui/Image";
import Modal from "../../../ui/Modal";
import NavBack from "../../../ui/NavBack";
import Row from "../../../ui/Row";
import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";

import { useDeleteProject } from "./useDeleteProject";
import { useProject } from "./useProject";

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoint.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5rem 1fr;
    gap: 2rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;

  @media screen and (min-width: ${breakpoint.tablet}) {
    position: fixed;
    width: 45%;
  }
`;

const Header = styled.div`
  grid-column: 1/-1;
  position: relative;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 2rem 0;

  width: 100%;
  z-index: 1000;

  @media screen and (min-width: ${breakpoint.tablet}) {
    position: fixed;
    padding: 0 10rem 0 0;
  }
`;

const ImageHolder = styled.div`
  position: relative;
`;

function Project() {
  const navigate = useNavigate();
  const { project } = useProject();
  const { deleteProject } = useDeleteProject();
  return (
    <StyledProject>
      <Header>
        <StyledRow>
          <Heading as="h2">Project {project.id}</Heading>
          <NavBack label="Back" />
        </StyledRow>
      </Header>
      <ImageHolder>
        <StyledImage src={project.image} />
      </ImageHolder>
      <div>
        <Table columns="1fr 2fr">
          <Table.Header>
            <div>Property</div>
            <div>Value</div>
          </Table.Header>
          <Table.Row>
            <div>Name</div>
            <div>{project.name}</div>
          </Table.Row>
          <Table.Row>
            <div>Description</div>
            <div>{project.description}</div>
          </Table.Row>
          <Table.Row>
            <div>Date built</div>
            <div>{format(new Date(project.dateBuilt), "d-MMM-yyyy")}</div>
          </Table.Row>
          <Table.Row>
            <div>Built with</div>
            <Row type="horizontal" wrap="wrap">
              {project.builtWith.map((item) => (
                <Tag type="grey" key={item}>
                  {item}
                </Tag>
              ))}
            </Row>
          </Table.Row>
          <Table.Row>
            <div>Link</div>
            <Row>
              <Row type="horizontal">
                <Tag type="grey">Display Name</Tag>
                <div> {project.link.title} </div>
              </Row>
              <Row type="horizontal">
                <Tag type="grey"> url</Tag>
                <a href={project.link.link}> {project.link.link} </a>
              </Row>
            </Row>
          </Table.Row>
          <Table.Row>
            <div>Type</div>
            <div>
              {project.type == "regular" && (
                <Tag type="blue">{project.type}</Tag>
              )}
              {project.type == "experience" && (
                <Tag type="green">{project.type}</Tag>
              )}
            </div>
          </Table.Row>
        </Table>
        <Row type="horizontal" justify="flex-end">
          <Button
            variation="secondary"
            as={Link}
            to={`/dashboard/projects/edit/${project.id}`}
          >
            Edit
          </Button>
          <Modal>
            <Modal.Open opens="delete-project">
              <Button>Delete</Button>
            </Modal.Open>
            <Modal.Window name="delete-project">
              <ConfirmDelete
                resourceName="project"
                onConfirm={() => {
                  deleteProject(project.id, {
                    onSuccess: () => navigate("/dashboard/projects"),
                  });
                }}
              />
            </Modal.Window>
          </Modal>
        </Row>
      </div>
    </StyledProject>
  );
}

export default Project;

import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Image from "../../../ui/Image";
import Modal from "../../../ui/Modal";
import Paragraph from "../../../ui/Paragraph";
import Row from "../../../ui/Row";

const StyledDisplayCard = styled.div`
  width: 30rem;
  background-color: var(--color-black-300);
  border-radius: var(--border-radius-sm);
`;

function DisplayCard({ project: { image, name, id } = {}, removeProject }) {
  return (
    <StyledDisplayCard>
      <Card>
        <Row type="horizontal">
          <div>
            <Image src={image} />
          </div>
          <Row>
            <Paragraph>{name}</Paragraph>
            <Modal>
              <Modal.Open opens="display">
                <Button size="small">remove</Button>
              </Modal.Open>
              <Modal.Window name="display">
                <ConfirmDelete
                  resourceName="project"
                  onConfirm={() => removeProject(id)}
                />
              </Modal.Window>
            </Modal>
          </Row>
        </Row>
      </Card>
    </StyledDisplayCard>
  );
}

DisplayCard.propTypes = {
  project: PropTypes.object,
  removeProject: PropTypes.func,
};

export default DisplayCard;

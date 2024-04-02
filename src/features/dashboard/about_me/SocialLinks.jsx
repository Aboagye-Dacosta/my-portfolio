import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import Box from "../../../ui/Box";
import Button from "../../../ui/Button";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Empty from "../../../ui/Empty";
import FormRow from "../../../ui/FormRow";
import Heading from "../../../ui/Heading";
import Input from "../../../ui/Input";
import Modal from "../../../ui/Modal";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import Table from "../../../ui/Table";

import { useCreateLink } from "./useCreateLink";
import { useDeleteLink } from "./useDeleteLink";
import { useSocialLinks } from "./useSocialLinks";
import { useUpdateLinks } from "./useUpdateLinks";

// const StyledSocialItem = styled.div``;

function SocialItem({ data: { title, link }, edit, deleteLink, isDeleting }) {
  return (
    <Table.Row>
      <div>{title}</div>
      <div>{link}</div>
      <Row type="horizontal">
        <Button size="small" variation="secondary" onClick={() => edit()}>
          <FaPencil />
        </Button>
        <Modal>
          <Modal.Open opens="delete-link">
            <Button size="small">
              <FaTrash />
            </Button>
          </Modal.Open>
          <Modal.Window name="delete-link">
            <ConfirmDelete onConfirm={deleteLink} disabled={isDeleting} />
          </Modal.Window>
        </Modal>
      </Row>
    </Table.Row>
  );
}

SocialItem.propTypes = {
  data: PropTypes.object,
  deleteLink: PropTypes.func,
  edit: PropTypes.func,
  isDeleting: PropTypes.bool,
};

function SocialLinks() {
  const { links } = useSocialLinks();
  const [selectedId, setSelectedId] = useState(null);
  const { isUpdatingLink, updateLink } = useUpdateLinks();
  const { isDeletingLink, deleteLink } = useDeleteLink();
  const { isCreatingLink, createLink } = useCreateLink();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    values: selectedId ? links.find((link) => link.id === selectedId) : {},
  });

  const onSubmit = (data) => {
    if (selectedId === null)
      return createLink(data, {
        onSettled: () => {
          reset();
        },
      });
    updateLink(
      { object: data, id: selectedId },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  return (
    <div>
      <Heading as="h2">All Links</Heading>
      <Spacer size={3} />
      {!links.length ? (
        <Empty resource="Social Links" />
      ) : (
        <Table columns="20rem 1fr 10rem">
          <Table.Header>
            <div>Display Name</div>
            <div>Link</div>
            <div>Actions</div>
          </Table.Header>
          <Table.Body
            data={links}
            render={(link, i) => (
              <SocialItem
                key={i}
                data={link}
                isDeleting={isDeletingLink}
                deleteLink={() => deleteLink(link.id)}
                edit={() => setSelectedId(link.id)}
              />
            )}
          />
        </Table>
      )}
      <Spacer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <FormRow label="Display name" error={errors?.title?.message}>
            <Input
              id="title"
              disabled={isUpdatingLink || isCreatingLink}
              {...register("title", {
                required: {
                  value: true,
                  message: "Name to display is required",
                },
              })}
            />
          </FormRow>
          <FormRow label="Url link" error={errors?.link?.message}>
            <Input
              id="link"
              disabled={isUpdatingLink || isCreatingLink}
              {...register("link", {
                required: {
                  value: true,
                  message: "Url link is required",
                },
              })}
            />
          </FormRow>
          <Row type="horizontal" justify="end">
            <Button
              type="reset"
              disabled={isUpdatingLink || isCreatingLink}
              variation="secondary"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </Button>
            <Button type="submit" disabled={isUpdatingLink || isCreatingLink}>
              {selectedId ? "Update" : "Save"}
            </Button>
          </Row>
        </Box>
      </form>
    </div>
  );
}

export default SocialLinks;

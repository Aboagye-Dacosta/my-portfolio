import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import { IoMdBookmark } from "react-icons/io";
import styled from "styled-components";

import Box from "../../../ui/Box";
import Button from "../../../ui/Button";
import Colored from "../../../ui/Colored";
import FileInput from "../../../ui/FileInput";
import FormRow from "../../../ui/FormRow";
import Image from "../../../ui/Image";
import Input from "../../../ui/Input";
import Paragraph from "../../../ui/Paragraph";
import Row from "../../../ui/Row";
import Select from "../../../ui/Select";
import Spacer from "../../../ui/Spacer";
import Textarea from "../../../ui/Textarea";

import SpinnerSm from "../../../ui/SpinnerSm";
import { useCreateProject } from "./useCreateProject";
import { useUpdateProject } from "./useUpdateProject";

const StyledForm = styled.form`
  padding: 2rem 4rem;
`;

const StyledImage = styled(Image)`
  width: 5rem;
  margin: 1rem 0;
`;

function ProjectForm({ project }) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: project
      ? {
          ...project,
          builtWith: project.builtWith.join(","),
          type: {
            label: project.type
              .charAt(0)
              .toUpperCase()
              .concat(project.type.slice(1)),
            value: project.type,
          },
          link: project.link.link,
          linkTitle: project.link.title,
          dateBuilt: project.dateBuilt.split("T").at(0),
        }
      : {},
  });

  const { isCreatingProject, createProject } = useCreateProject();
  const { isUpdatingProject, updateProject } = useUpdateProject();

  const onSubmit = (data) => {
    let projectData = {
      ...data,
      builtWith: data.builtWith.replaceAll(",", " ").trim().split(" "),
      type: data.type.value,
      dateBuilt: new Date(data.dateBuilt).toISOString(),
      link: { title: data.linkTitle, link: data.link },
    };

    delete projectData.linkTitle;

    if (!project) {
      projectData = {
        ...projectData,
        image: data.image[0],
      };

      createProject(
        { project: projectData },
        {
          onSettled: () => reset(),
        }
      );
      return;
    }

    if (typeof projectData.image === "object")
      projectData = {
        ...projectData,
        image: data.image[0],
      };
    else {
      projectData = {
        ...projectData,
        image: project.image,
      };
    }

    updateProject({ project: projectData, id: project.id });
  };

  const isLoading = isUpdatingProject || isCreatingProject;

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <FormRow label="Project name" error={errors?.name?.message}>
          <Input
            id="project-name"
            disabled={isLoading}
            {...register("name", {
              required: {
                value: true,
                message: "Project name is required",
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Project description"
          error={errors?.description?.message}
        >
          <Textarea
            disabled={isLoading}
            id="project-description"
            {...register("description", {
              required: {
                value: true,
                message: "Project description is required",
              },
            })}
          />
        </FormRow>
        <FormRow label="Project image" error={errors?.image?.message}>
          <FileInput
            disabled={isLoading}
            id="project-description"
            {...register("image", {
              required: {
                value: project ? false : true,
                message: "Project image is required",
              },
            })}
          />
        </FormRow>
        {project && (
          <Row type="horizontal" items="center">
            <Colored>Currently Uploaded </Colored>{" "}
            <StyledImage src={project?.image} />
          </Row>
        )}
      </Box>
      <Spacer size={1} />
      <Box>
        <FormRow label="Date created" error={errors?.dateBuilt?.message}>
          <Input
            disabled={isLoading}
            type="date"
            id="built-date"
            {...register("dateBuilt", {
              required: {
                value: true,
                message: "Date project was created is required",
              },
            })}
          />
        </FormRow>
        <FormRow label="Project type" error={errors?.type?.message}>
          <Controller
            control={control}
            disabled={isLoading}
            name="type"
            rules={{
              required: {
                value: true,
                message: "The type of project are required",
              },
            }}
            render={({ field, fieldState, formState }) => (
              <Select
                {...field}
                {...fieldState}
                {...formState}
                options={[
                  {
                    label: "Regular",
                    value: "regular",
                  },
                  {
                    label: "Experience",
                    value: "experience",
                  },
                ]}
              />
            )}
          />
        </FormRow>
      </Box>
      <Spacer size={1} />
      <Box>
        <FormRow label="Link display name" error={errors?.linkTitle?.message}>
          <Input
            disabled={isLoading}
            id="link-name"
            {...register("linkTitle", {
              required: {
                value: true,
                message: "Project link name is required",
              },
            })}
          />
        </FormRow>
        <FormRow label="Link" error={errors?.link?.message}>
          <Input
            disabled={isLoading}
            id="link"
            type="link"
            {...register("link", {
              required: {
                value: true,
                message: "Project link is required",
              },
            })}
          />
        </FormRow>
      </Box>
      <Spacer size={1} />
      <Box>
        <Row type="horizontal">
          <Colored>
            <IoMdBookmark />
          </Colored>
          <Paragraph>Separate the stacks used with comma</Paragraph>
        </Row>
        <Spacer size={1} />
        <FormRow label="Built with" error={errors?.builtWith?.message}>
          <Input
            disabled={isLoading}
            id="built-with"
            {...register("builtWith", {
              required: {
                value: true,
                message: "Stacks used is required",
              },
            })}
          />
        </FormRow>
      </Box>
      <Spacer size={3} />
      <Row type="horizontal">
        <Button
          variation="secondary"
          type="reset"
          onClick={() => reset()}
          disabled={isLoading}
        >
          Reset
        </Button>
        {!project && (
          <Button type="submit" disabled={isLoading}>
            {isCreatingProject ? <SpinnerSm /> : "Create"}
          </Button>
        )}
        {project && (
          <Button type="submit" disabled={isLoading}>
            {isUpdatingProject ? <SpinnerSm /> : "update"}
          </Button>
        )}
      </Row>
    </StyledForm>
  );
}

ProjectForm.propTypes = {
  project: PropTypes.object,
};

export default ProjectForm;

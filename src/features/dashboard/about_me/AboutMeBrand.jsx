import { FaFileAlt } from "react-icons/fa";
import styled from "styled-components";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "../../../ui/Box";
import Button from "../../../ui/Button";
import Colored from "../../../ui/Colored";
import FileInput from "../../../ui/FileInput";
import FormRow from "../../../ui/FormRow";
import Heading from "../../../ui/Heading";
import Image from "../../../ui/Image";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";
import { useStrings } from "./useStrings";
import { useUploadFile } from "./useUploadFile";

const StyledImage = styled(Image)`
  width: 5rem;
  margin: 1rem 0;
`;
const StyledFile = styled(FaFileAlt)`
  font-size: 3rem;
  margin: 1rem 1rem 1rem 0;
`;
const StyledLink = styled.a`
  display: flex;
  align-items: center;
`;

function AboutMeBrand() {
  const { strings = {} } = useStrings();
  const [current, setCurrent] = useState("");
  const { isUploadingFile, uploadFile } = useUploadFile();

  const {
    handleSubmit: handleSubmitLogo,
    register: registerLogo,
    formState: { errors: logoErrors },
    reset: resetLogo,
  } = useForm();

  const {
    handleSubmit: handleSubmitLogoDetailed,
    register: registerLogoDetailed,
    formState: { errors: logoDetailedErrors },
    reset: resetLogoDetailed,
  } = useForm();

  const {
    handleSubmit: handleSubmitResume,
    register: registerResume,
    formState: { errors: resumeErrors },
    reset: resetResume,
  } = useForm();

  const { logo, logoDetailed, resume } = strings;

  const onSubmitLogo = (data) => {
    const upload = {
      bucket: "logo",
      file: data.logo[0],
      fieldName: "logo",
      current: logo?.split?.("/")?.at(-1),
    };

    uploadFile(upload, {
      onSettled: () => resetLogo(),
    });
  };
  const onSubmitLogoDetailed = (data) => {
    const upload = {
      bucket: "logo",
      file: data.logoDetailed[0],
      fieldName: "logoDetailed",
      current: logoDetailed?.split?.("/")?.at(-1),
    };

    uploadFile(upload, {
      onSettled: () => resetLogoDetailed(),
    });
  };
  const onSubmitResume = (data) => {
    const upload = {
      bucket: "logo",
      file: data.resume[0],
      fieldName: "resume",
      current: resume?.split?.("/")?.at(-1),
    };

    uploadFile(upload, {
      onSettled: () => resetResume(),
    });
  };

  return (
    <>
      <Heading as="h2">My Brand</Heading>
      <Spacer size={3} />
      <Box>
        <form onSubmit={handleSubmitLogo(onSubmitLogo)}>
          <FormRow label="Logo" error={logoErrors?.logo?.message}>
            <FileInput
              accept="image/*"
              disabled={isUploadingFile && current === "logo"}
              {...registerLogo("logo", {
                required: {
                  message: "Logo is required",
                  value: true,
                },
                onChange: () => setCurrent("logo"),
              })}
            />
          </FormRow>
          <Row type="horizontal" justify="space-between" items="center">
            <Row type="horizontal" items="center">
              <Colored>Currently Uploaded </Colored> <StyledImage src={logo} />
            </Row>
            <Row type="horizontal">
              <Button
                type="reset"
                variation="secondary"
                disabled={isUploadingFile && current === "logo"}
                size="small"
                onClick={() => resetLogo()}
              >
                Reset
              </Button>
              <Button
                disabled={isUploadingFile && current === "logo"}
                size="small"
                type="submit"
                onClick={() => setCurrent("logo")}
              >
                Upload
              </Button>
            </Row>
          </Row>
        </form>
      </Box>
      <Spacer />
      <Box>
        <form onSubmit={handleSubmitLogoDetailed(onSubmitLogoDetailed)}>
          <FormRow
            label="Detailed Logo"
            error={logoDetailedErrors?.logoDetailed?.message}
          >
            <FileInput
              accept="image/*"
              disabled={isUploadingFile && current === "logoDetailed"}
              {...registerLogoDetailed("logoDetailed", {
                required: {
                  message: "Detailed logo is required",
                  value: true,
                },
                onChange: () => setCurrent("logoDetailed"),
              })}
            />
          </FormRow>
          <Row type="horizontal" justify="space-between" items="center">
            <Row type="horizontal" items="center">
              <Colored>Currently Uploaded </Colored>{" "}
              <StyledImage src={logoDetailed} />
            </Row>
            <Row type="horizontal">
              <Button
                type="reset"
                variation="secondary"
                disabled={isUploadingFile && current === "logoDetailed"}
                size="small"
                onClick={() => resetLogoDetailed()}
              >
                Reset
              </Button>
              <Button
                disabled={isUploadingFile && current === "logoDetailed"}
                size="small"
                type="submit"
              >
                Upload
              </Button>
            </Row>
          </Row>
        </form>
      </Box>
      <Spacer />
      <Box>
        <form onSubmit={handleSubmitResume(onSubmitResume)}>
          <FormRow label="Resume" error={resumeErrors?.resume?.message}>
            <FileInput
              accept="application/pdf"
              disabled={isUploadingFile && current === "resume"}
              {...registerResume("resume", {
                required: {
                  message: "Resume is required",
                  value: true,
                },
                onChange: () => setCurrent("resume"),
              })}
            />
          </FormRow>

          <Row type="horizontal" justify="space-between" items="center">
            <Row type="horizontal" items="center">
              <Colored>Currently Uploaded </Colored>{" "}
              <StyledLink href={resume} target="_blank">
                <StyledFile /> &mdash; {resume?.split?.("/")?.at(-1)}
              </StyledLink>
            </Row>
            <Row type="horizontal">
              <Button
                type="reset"
                variation="secondary"
                disabled={isUploadingFile && current === "resume"}
                size="small"
                onClick={() => resetResume()}
              >
                Reset
              </Button>
              <Button
                disabled={isUploadingFile && current === "resume"}
                size="small"
                type="submit"
              >
                Upload
              </Button>
            </Row>
          </Row>
        </form>
      </Box>
    </>
  );
}

export default AboutMeBrand;

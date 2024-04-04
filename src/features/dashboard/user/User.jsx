import { toast } from "react-hot-toast";
import styled from "styled-components";

import Box from "../../../ui/Box";
import Button from "../../../ui/Button";
import FileInput from "../../../ui/FileInput";
import FormRow from "../../../ui/FormRow";
import Image from "../../../ui/Image";
import Input from "../../../ui/Input";
import Row from "../../../ui/Row";
import Spacer from "../../../ui/Spacer";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { breakpoint } from "../../../styles/GlobalStyles";
import Avatar from "../../../ui/Avatar";
import Colored from "../../../ui/Colored";
import SpinnerSm from "../../../ui/SpinnerSm";
import { useUser } from "../../auth/useUser";
import { useStrings } from "../about_me/useStrings";
import { useUploadFile } from "../about_me/useUploadFile";
import { useUpdateUsernameAndEmail } from "./useUpateUsernameAndEmail";
import { useUpdateAvatar } from "./useUpdateAvatar";
import { useUpdatePassword } from "./useUpdatePassword";

const StyledFormRow = styled(FormRow)`
  display: grid;
  grid-template-columns: 15rem 1fr;
`;

const StyledImage = styled(Image)`
  width: 5rem;
  margin: 1rem 0;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

function User() {
  const { strings: { logo } = {} } = useStrings();
  const { user: { email, user_metadata: { avatar, username } = {} } = {} } =
    useUser();

  const { updateUserEmailAndUsername, isUpdatingUsernameAndEmail } =
    useUpdateUsernameAndEmail();
  const { isUpdatingPassword, updatePassword } = useUpdatePassword();
  const { isUpdatingAvatar, updateAvatar } = useUpdateAvatar();
  const { isUploadingFile, uploadFile } = useUploadFile();

  const {
    register: registerUsernameAnEmail,
    handleSubmit: handleSubmitUsernameAndEmail,
    reset: resetUsernameAndEmail,
  } = useForm({
    values: { email, username },
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    getValues,
  } = useForm();

  const [userAvatar, setUserAvatar] = useState(null);
  const [userLogo, setUserLogo] = useState(null);

  const submitEmailAndUsername = (data) => {
    updateUserEmailAndUsername(data);
  };
  const handleEmailAndUsernameErrors = (errors) => {
    const key = Object.keys(errors).at(0);
    toast.error(errors[key]?.message);
  };

  const submitPassword = (data) => {
    updatePassword(data);
  };

  const handlePasswordErrors = (errors) => {
    const key = Object.keys(errors).at(0);
    toast.error(errors[key]?.message);
  };

  const handleUpdateLogo = () => {
    if (!userLogo) return toast.error("Logo should not be empty");
    uploadFile({
      file: userLogo[0],
      current: logo,
      bucket: "logo",
      fieldName: "logo",
    });
  };

  const handleUpdateAvatar = () => {
    if (!userAvatar) return toast.error("Avatar should not be empty");
    updateAvatar({ file: userAvatar[0], current: avatar });
  };

  return (
    <StyledRow items="start" type="horizontal" justify="center">
      <Row>
        <Box>
          <form
            onSubmit={handleSubmitUsernameAndEmail(
              submitEmailAndUsername,
              handleEmailAndUsernameErrors
            )}
          >
            <StyledFormRow label="Username">
              <Input
                {...registerUsernameAnEmail("username", {
                  required: {
                    message: "Username is required",
                    value: true,
                  },
                })}
              />
            </StyledFormRow>
            <StyledFormRow label="Email">
              <Input
                type="email"
                {...registerUsernameAnEmail("email", {
                  required: {
                    message: "Email is required",
                    value: true,
                  },
                })}
              />
            </StyledFormRow>
            <Spacer size={1} />

            <Row type="horizontal" justify="end">
              <Button
                size="small"
                variation="secondary"
                type="button"
                disabled={isUpdatingUsernameAndEmail}
                onClick={() => resetUsernameAndEmail()}
              >
                Reset
              </Button>
              <Button
                size="small"
                disabled={isUpdatingUsernameAndEmail}
                type="submit"
              >
                {isUpdatingUsernameAndEmail ? <SpinnerSm /> : "Update"}
              </Button>
            </Row>
          </form>
        </Box>
        <Box>
          <form
            onSubmit={handleSubmitPassword(
              submitPassword,
              handlePasswordErrors
            )}
          >
            <StyledFormRow label="New password">
              <Input
                type="password"
                {...registerPassword("password", {
                  required: {
                    message: "Password is required",
                    value: true,
                  },
                  minLength: {
                    value: 8,
                    message: "Password should have a minimum of 8 characters",
                  },
                })}
              />
            </StyledFormRow>
            <StyledFormRow label="Re-enter new password">
              <Input
                type="password"
                {...registerPassword("confirmPassword", {
                  required: {
                    message: "Confirm password is required",
                    value: true,
                  },
                  validate: () =>
                    getValues()?.password == getValues()?.confirmPassword ||
                    "Password and confirm password should be the same",
                })}
              />
            </StyledFormRow>
            <Spacer size={1} />

            <Row type="horizontal" justify="end">
              <Button
                size="small"
                variation="secondary"
                type="reset"
                disabled={isUpdatingPassword}
              >
                Reset
              </Button>
              <Button size="small" disabled={isUpdatingPassword} type="submit">
                {isUpdatingPassword ? <SpinnerSm /> : "Update"}
              </Button>
            </Row>
          </form>
        </Box>
      </Row>

      <Row>
        <Box>
          <StyledFormRow label="Your profile">
            <FileInput onChange={(e) => setUserAvatar(e.target.files)} />
          </StyledFormRow>
          <Spacer size={1} />
          <Row type="horizontal" justify="space-between" items="center">
            <Row type="horizontal" items="center">
              <Colored>Currently uploaded</Colored>
              <Avatar avatar={avatar} />
            </Row>
            <Row type="horizontal" items="center">
              <Button
                type=""
                variation="secondary"
                size="small"
                disabled={isUpdatingAvatar}
              >
                Reset
              </Button>
              <Button
                size="small"
                onClick={() => handleUpdateAvatar()}
                disabled={isUpdatingAvatar}
              >
                {isUpdatingAvatar ? <SpinnerSm /> : "Update"}
              </Button>
            </Row>
          </Row>
        </Box>
        <Box>
          <StyledFormRow label="Logo">
            <FileInput onChange={(e) => setUserLogo(e.target.files)} />
          </StyledFormRow>
          <Spacer size={1} />
          <Row type="horizontal" justify="space-between" items="center">
            <Row type="horizontal" items="center">
              <Colored>Currently uploaded</Colored>
              <StyledImage src={logo} />
            </Row>
            <Row type="horizontal" items="center">
              <Button
                type=""
                variation="secondary"
                size="small"
                disabled={isUploadingFile}
              >
                Reset
              </Button>
              <Button
                size="small"
                onClick={() => handleUpdateLogo()}
                disabled={isUploadingFile}
              >
                {isUploadingFile ? <SpinnerSm /> : "Update"}
              </Button>
            </Row>
          </Row>
        </Box>
      </Row>
    </StyledRow>
  );
}

export default User;

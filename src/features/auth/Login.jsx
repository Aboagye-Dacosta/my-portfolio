import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import BackgroundGradient from "../../ui/BackgroundGradient";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Logo from "../../ui/Logo";
import Row from "../../ui/Row";

import SpinnerSm from "../../ui/SpinnerSm";
import { useStrings } from "../dashboard/about_me/useStrings";
import { useLogin } from "./useLogin";
import { useUser } from "./useUser";

const StyledLogin = styled.div`
  width: 100dvw;
  height: 100vh;
  background-color: var(--color-black);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
`;

const StyledRow = styled(Row)`
  padding: 2rem 3rem;
  max-width: 40rem;
  min-width: 30rem;
  background-color: var(--color-black-300);
  /* border-radius: var(--border-radius-sm); */
  z-index: 1000;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

function Login() {
  const navigate = useNavigate();
  const { strings: { logoDetailed } = {} } = useStrings();
  const { login, isLoggingInUser } = useLogin();
  const { isValidated, isLoadingUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isValidated)
    return navigate("/dashboard/about-me/description", { replace: true });

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  if (!isValidated && !isLoadingUser)
    return (
      <>
        <BackgroundGradient />
        <StyledLogin>
          <StyledRow items="center" justify="center">
            <Logo src={logoDetailed} />
          </StyledRow>
          <StyledRow justify="center" items="center">
            <Row>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <StyledButton
                onClick={() => handleLogin()}
                disabled={isLoggingInUser}
              >
                {isLoggingInUser ? <SpinnerSm /> : "Login"}
              </StyledButton>
            </Row>
          </StyledRow>
        </StyledLogin>
      </>
    );
}

export default Login;

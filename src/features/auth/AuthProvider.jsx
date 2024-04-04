import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const { isLoadingUser, isValidated, user } = useUser();
  console.log(user);

  if (!isLoadingUser && !isValidated)
    return navigate("/dashboard/login", { replace: true });

  if (isValidated) return children;
}

export default AuthProvider;

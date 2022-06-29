import { Container } from "@mui/material";
import React, { useContext } from "react";
import CustomButton from "../components/UI/Button/CustomButton";
import CustomField from "../components/UI/fields/CustomField";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  };

  return (
    <Container>
      <h1>Sign in page</h1>
      <form>
        <CustomField
          sx={{ my: 2 }}
          type="text"
          placeholder="type your login"
          label="Login"
          variant="outlined"
        />
        <CustomField
          sx={{ mb: 2 }}
          type="password"
          placeholder="type your password"
          label="Password"
          variant="outlined"
        />
        <CustomButton
          onClick={login}
          sx={{ mx: "auto" }}
          variant="outlined"
          size="medium"
          color="primary"
        >
          Sign in
        </CustomButton>
      </form>
    </Container>
  );
};

export default Login;

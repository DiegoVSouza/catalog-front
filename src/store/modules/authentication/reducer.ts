import { useNavigate } from "react-router-dom";
import { createReducer } from "reduxsauce";
import { Types } from "./actions";

interface ErrorProps {
  error: {
    response: {
      data: {
        data: string;
      };
    };
  };
}

interface LoginRequestProps {
  data: {
    cpf: string;
    password: string;
    isAuthenticated: boolean;
  };
 
}

const INITIAL_STATE = {
  cpf: "00000000000",
  password: "1234",
  isAuthenticated: false,
};

const onLoginFailure = (state: any, action: ErrorProps) => {
  console.log("error login", action.error);
  console.error("LOGIN ERROR: ", action.error?.response?.data?.data);
  localStorage.removeItem("@token");
  console.log(state, action);
  return { error: action };
};

const onLoginSuccess = (state: any, action: LoginRequestProps) => {
  return action.data;
};

const HANDLERS = {
  [Types.LOGIN_FAILURE]: onLoginFailure,
  [Types.LOGIN_SUCCESS]: onLoginSuccess,
};

export default createReducer(INITIAL_STATE, HANDLERS as any);

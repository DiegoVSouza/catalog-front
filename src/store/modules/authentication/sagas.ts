import { all, takeLatest, call, put } from "redux-saga/effects";
import { Creators as AuthActions } from "./actions";
import { Creators as UserActions } from "./../user/actions";
import { Creators as AdminActions } from "./../admin/actions";
import axios from "axios";
import { api } from "../../../Data/Services/api";

interface LoginProps {
  email: string;
  password: string;
}

interface LoginRequestProps {
  accessToken: string,
  name: string
}

interface LoginResponseProps {
  email: string,
  name: string,
  role: {
    value: string,
  }
}

const INITIAL_STATE = {
  email: "",
  password: "",
};

async function apiLogin(login: LoginProps) {
  const { data } = await api.post("/api/v1/auth/admin",
    !login.email && !login.password
      ? INITIAL_STATE
      : {
        email: login.email,
        password: login.password,
      }
  );

  console.log(data)

  localStorage.setItem("@token", data.accessToken);

  api.defaults.headers.common["x-access-token"] = data.accessToken;
  api.defaults.headers.common["authorization"] = `Bearer: ${data.accessToken}`;

  return data.accessToken;
}

async function getUser(login: LoginProps, token:string) {
  const headers =  {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    authorization: `Bearer: ${token}`,
  }
  const { data } = await api.get("/api/v1/admin", {headers});
  let user = data.find((item: LoginProps) => item.email === login.email)
  return user;
}

function* loginRequest(login: any) {
  try {
    const token:string = yield call(apiLogin, login);
    const user: LoginResponseProps = yield call(getUser, login, token);
    console.log("loginRequest", user);
    yield put(AuthActions.loginSuccess(user));
    if (user.role.value === "ADMIN") {
      yield put(AdminActions.setAdmin(user));
    }else{
      yield put(UserActions.setUser(user));
    }

  } catch (e) {
    yield put(AuthActions.loginFailure(e));
  }
}

export default all([takeLatest("@auth/LOGIN_REQUEST", loginRequest)]);

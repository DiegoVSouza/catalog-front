import { all, takeLatest, call, put } from "redux-saga/effects";
import { Creators as AuthActions } from "./actions";
import { Creators as UserActions } from "./../user/actions";
import { Creators as AdminActions } from "./../admin/actions";
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

const INITIAL_STATE_TOKEN = {
  accessToken: "",
  name: "",
};

async function apiLogin(login: LoginProps) {
  let dataUser: LoginRequestProps = INITIAL_STATE_TOKEN;

  await api.post("/api/v1/auth/admin",
    !login.email && !login.password
      ? INITIAL_STATE
      : {
        email: login.email,
        password: login.password,
      }
  ).then(({ data }) => {
    console.log(data)

    localStorage.setItem("@token", data.accessToken);

    api.defaults.headers.common["x-access-token"] = data.accessToken;
    api.defaults.headers.common["authorization"] = `Bearer: ${data.accessToken}`;

    dataUser = data
  }).catch((error) => {
    console.log(error)
  })

  await api.post("/api/v1/auth/store",
    !login.email && !login.password
      ? INITIAL_STATE
      : {
        email: login.email,
        password: login.password,
      }
  ).then(({ data }) => {
    console.log(data)

    localStorage.setItem("@token", data.accessToken);

    api.defaults.headers.common["x-access-token"] = data.accessToken;
    api.defaults.headers.common["authorization"] = `Bearer: ${data.accessToken}`;

    dataUser = data
  }).catch((error) => {
    console.log(error)
  })
  console.log(dataUser)
  return dataUser.accessToken;

}

async function getUser(login: LoginProps, token: string) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    authorization: `Bearer: ${token}`,
  }

  let user;

  const { data: dataAdmin } = await api.get("/api/v1/admin", { headers });
  if (dataAdmin.length)
    user = dataAdmin.find((item: LoginProps) => item.email === login.email)
  const { data: datastore } = await api.get("/api/v1/store", { headers });
  if (datastore.length)
    user = datastore.find((item: LoginProps) => item.email === login.email)

  return user;
}

function* loginRequest(login: any) {
  try {
    const token: string = yield call(apiLogin, login);
    if (token === '') {
      throw new Error
    }
    const user: LoginResponseProps = yield call(getUser, login, token);
    console.log("loginRequest", user);
    yield put(AuthActions.loginSuccess(user, login.history));
    if (user.role.value === "ADMIN") {
      yield put(AdminActions.setAdmin(user));
    } else {
      yield put(UserActions.setUser(user));
    }

  } catch (e) {
    yield put(AuthActions.loginFailure(e,login.verifyError));
  }
}

export default all([takeLatest("@auth/LOGIN_REQUEST", loginRequest)]);

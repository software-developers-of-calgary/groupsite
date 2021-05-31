import Axios from "axios";
import { URL } from "../config";

export function fetchUser(token, global, setGlobal) {
  if (!token) return;
  setGlobal({ ...global, loadUser: true });
  Axios.get(`${URL}/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      console.log({profile: res.data.data})
      setGlobal({ ...global, user: res.data.data, loadUser: false });
    })
    .catch((error) => {
      setGlobal({ ...global, loadUser: false });
      localStorage.removeItem("serverApiToken");
      console.log("error", error);
    });
}

export function session(token, global, setGlobal) {
  console.log({ token });
  if (!token) return;
  setGlobal({ ...global, loadingSession: true });

  Axios.post(`${URL}/auth/github/callback`, {
    code: token,
  })
    .then((res) => {
      localStorage.setItem("serverApiToken", res.data.token);
      setGlobal({ ...global, loadingSession: false });
    })
    .catch((error) => {
      console.log("error while authenticating with GitHub", error);
      setGlobal({ ...global, loadingSession: false });
    });
}

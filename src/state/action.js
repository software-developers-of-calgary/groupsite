import Axios from "axios";
import { URL } from "../config";

export function fetchUser(token, global, setGlobal) {
  if (!token) return;
  setGlobal({ ...global, loadUser: true });
  Axios.get(`${URL}/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      setGlobal({ ...global, user: res.data.data, loadUser: false });
    })
    .catch((error) => {
      setGlobal({ ...global, loadUser: false });
      localStorage.removeItem("serverApiToken");
      console.log("error", error);
    });
}
// TODO test

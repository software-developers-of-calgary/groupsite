import { setGlobal } from "reactn";

setGlobal({
  server: "/api/",
  token: "",
  user: null,
  projects: null,
  tasks: [],
  currentProject: null,
});

export { useGlobal, resetGlobal } from "reactn";

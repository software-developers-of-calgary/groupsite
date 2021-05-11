import axios from "axios";
import { URL } from "../../../config";

const associateProjectWithEvent = (projectId, eventId) => {
  const token = localStorage.getItem("serverApiToken");
  return axios.post(
    URL + `/events/${eventId}/projects`,
    {
      projectId: projectId,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export default associateProjectWithEvent;

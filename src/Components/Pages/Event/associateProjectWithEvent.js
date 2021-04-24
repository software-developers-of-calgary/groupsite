import axios from "axios";
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

import api from "./axios";

export const login = async (email, password) => {
  const response = await api.post("/katmangaming/users/login/", {
    email,
    password,
  });

  localStorage.setItem("access_token", response.data.access);
  localStorage.setItem("refresh_token", response.data.refresh);

  return response.data;
};

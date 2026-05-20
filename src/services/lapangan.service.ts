import api from "../lib/axios";

export const getLapangan = async () => {
  const response = await api.get("/lapangan/");
  return response.data;
};
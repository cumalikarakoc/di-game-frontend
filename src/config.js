export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : process.env.API_URL;

export const SOCKET_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : process.env.SOCKET_URL;

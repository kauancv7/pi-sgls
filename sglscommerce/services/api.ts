import axios, { AxiosError, type AxiosInstance } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export type ApiErrorPayload = {
  message: string;
  statusCode?: number;
  details?: unknown;
};

export class ApiError extends Error {
  statusCode?: number;
  details?: unknown;

  constructor({ message, statusCode, details }: ApiErrorPayload) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.details = details;
  }
}

function resolveApiBaseUrl(): string {
  if (!API_BASE_URL) {
    return "http://localhost:5000";
  }

  return API_BASE_URL;
}

export const api: AxiosInstance = axios.create({
  baseURL: resolveApiBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<unknown>) => {
    const statusCode = error.response?.status;
    const message =
      error.message || "Não foi possível concluir a comunicação com a API.";

    return Promise.reject(
      new ApiError({
        message,
        statusCode,
        details: error.response?.data,
      }),
    );
  },
);

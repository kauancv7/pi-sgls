
import { createContext, useState, useContext } from "react";
import { api } from "../services/api";
import type { LoginRequest, AuthResponse } from "../types/Auth";

interface AuthContextType {
  token: string | null
  login: (data: LoginRequest) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const isAuthenticated = !!token;

  async function login(data: LoginRequest) {

    const response = await api.post<AuthResponse>(
      "/auth/login",
      data
    );

    const { token } = response.data;

    localStorage.setItem("token", token);
    setToken(token);
  }

  function logout() {

    localStorage.removeItem("token");
    setToken(null);

  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {

  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuth must be used inside AuthProvider");

  return context;

}
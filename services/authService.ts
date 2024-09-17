import axiosConfig from "@/config/axios";
import { AxiosResponse } from "axios";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  userType: number;
  isDeleted: boolean;
  projects: any[];
}

class AuthService {
  static async login(
    requestBody: LoginRequest
  ): Promise<AxiosResponse<LoginResponse>> {
    return await axiosConfig.post("Auth/Login", requestBody);
  }
}

export default AuthService;

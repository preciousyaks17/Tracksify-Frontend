import axiosConfig from "@/config/axios";
import { AxiosResponse } from "axios";


export interface GetUserResponse {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  userType: number;
  isDeleted: boolean;
  projects: Project[];
}

interface Project {
  projectId: string;
  projectName: string;
  startDate: string;
  dueDate: string;
  projectDescription: string;
  projectStatus: number;
  projectAssignees: string[];
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

interface CreateUserResponse {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  userType: number;
  isDeleted: boolean;
  projects: any[];
}

interface GetUserByUserIdResponse {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  userType: number;
  isDeleted: boolean;
  projects: any[];
}

interface UpdateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
interface UpdateUserResponse {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  userType: number;
  isDeleted: boolean;
  projects: any[];
}

interface DeleteUserResponse {
    status: string;
    message: string;    
}

class UserService {
    static async getUser(): Promise<AxiosResponse<GetUserResponse[]>> {
        return await axiosConfig.get("user");
    }

    static async createUser(
        requestBody: CreateUserRequest
    ): Promise<AxiosResponse<CreateUserResponse>> {
        return await axiosConfig.post("user", requestBody);
    }

    static async getUserByUserId( 
      userId: string
    ): Promise<AxiosResponse<GetUserByUserIdResponse>> {
        return await axiosConfig.get(`user/${userId}`);
    }

    static async updateUser(
        userId: string,
        requestBody: UpdateUserRequest
    ): Promise<AxiosResponse<UpdateUserResponse>> {
        return await axiosConfig.put(`user/${userId}`, requestBody);
    }

    static async deleteUser(
        userId: string
    ): Promise<AxiosResponse<DeleteUserResponse>> {
        return await axiosConfig.delete(`user/delete-user/${userId}`);
    }
}

export default UserService;
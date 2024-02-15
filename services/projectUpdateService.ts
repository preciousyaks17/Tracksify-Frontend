import axiosConfig from "@/config/axios";
import { AxiosResponse } from "axios";

interface GetProjectUpdateResponse {
  projectUpdateId: string;
  checkIn: string;
  dateCreated: string;
  checkOut: string;
  workDone: string;
  projectId: string;
  userId: string;
}

interface GetProjectUpdateByProjectIdResponse {
  projectUpdateId: string;
  checkIn: string;
  dateCreated: string;
  checkOut: string;
  workDone: string;
  projectId: string;
  userId: string;
}

interface CreateProjectUpdateRequest {
  checkIn: string;
  checkOut: string;
  workDone: string;
  projectId: string;
  userId: string;
}

interface CreateProjectUpdateResponse {
  projectUpdateId: string;
  checkIn: string;
  dateCreated: string;
  checkOut: string;
  workDone: string;
  projectId: string;
  userId: string;
}

interface GetProjectUpdateResponse {
  projectUpdateId: string;
  checkIn: string;
  dateCreated: string;
  checkOut: string;
  workDone: string;
  projectId: string;
  userId: string;
  user?: any;
  project?: any;
}

class ProjectUpdateService {
  static async getUser(): Promise<AxiosResponse<GetProjectUpdateResponse>> {
    return await axiosConfig.get("projectUpdate");
  }

  static async getProjectUpdateByProjectUpdateId(
    projectUpdateId: string
  ): Promise<AxiosResponse<GetProjectUpdateByProjectIdResponse>> {
    return await axiosConfig.get(`projectUpdate/${projectUpdateId}`);
  }

  static async createProjectUpdate(
    projectId: string,
    userId: string,
    requestBody: CreateProjectUpdateRequest
  ): Promise<AxiosResponse<CreateProjectUpdateResponse>> {
    return await axiosConfig.post(
      `projectUpdate/${projectId}/${userId}`,
      requestBody
    );
  }

  static async getProjectUpdateForAUserForAProject(
    userId: string,
    projectId: string
  ): Promise<AxiosResponse<GetProjectUpdateResponse[]>> {
    return await axiosConfig.get(
      `projectUpdate/employee-projectUpdate/project/${userId}/${projectId}`
    );
  }
}

export default ProjectUpdateService;

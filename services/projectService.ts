import axiosConfig from "@/config/axios";
import { AxiosResponse } from "axios";

interface GetProjectResponse {
  projectId: string;
  projectName: string;
  startDate: string;
  dueDate: string;
  projectDescription: string;
  projectStatus: number;
  projectAssignees: any[];
}

interface CreateProjectRequest {
  projectName: string;
  startDate: string;
  dueDate: string;
  projectDescription: string;
  projectAssignees: string[];
}

interface CreateProjectRequestResponse {
  projectId: string;
  projectName: string;
  startDate: string;
  dueDate: string;
  projectDescription: string;
  projectStatus: number;
  projectAssignees: string[];
}

interface GetProjectByProjectIdResponse {
  projectId: string;
  projectName: string;
  startDate: string;
  dueDate: string;
  projectDescription: string;
  projectStatus: number;
  projectAssignees: any[];
}

interface UpdateProjectByProjectIdRequest {
  projectName: string;
  startDate: string;
  dueDate: string;
  projectDescription: string;
  projectStatus: number;
  projectAssignees: string[];
}

interface UpdateProjectByProjectIdResponse {
  projectId: string;
  projectName: string;
  startDate: string;
  dueDate: string;
  projectDescription: string;
  projectStatus: number;
  projectAssignees: string[];
}

class ProjectService {
  static async getProject(): Promise<AxiosResponse<GetProjectResponse>> {
    return await axiosConfig.get("project");
  }

  static async createProject(
    requestBody: CreateProjectRequest
  ): Promise<AxiosResponse<CreateProjectRequestResponse>> {
    return await axiosConfig.post("project", requestBody);
  }

  static async getProjectByProjectId(
    projectId: string
  ): Promise<AxiosResponse<GetProjectByProjectIdResponse>> {
    return await axiosConfig.get(`project/${projectId}`);
  }

  static async updateProjectByProjectId(
    projectId: string,
    requestBody: UpdateProjectByProjectIdRequest
  ): Promise<AxiosResponse<UpdateProjectByProjectIdResponse>> {
    return await axiosConfig.put(`project/${projectId}`, requestBody);
  }
}

export default ProjectService;
"use client";
import axiosResponseMessage from "@/lib/axiosResponseMessage";
import ProjectService from "@/services/projectService";
import ProjectUpdateService from "@/services/projectUpdateService";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useProject = () => {
  const getProjectQuery = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        const response = await ProjectService.getProject();
        // console.log(response);
        return response?.data;
      } catch (error: any) {
        console.log(error);
        toast.error("Something went wrong!");
      }
    },
  });

  const getProjectByUserIdQuery = (userId: string) =>
    useQuery({
      queryKey: ["getProjectByUserId", userId],
      queryFn: async () => {
        try {
          const response = await ProjectService.getProjectByUserId(userId);
          // console.log(response);
          return response?.data;
        } catch (error: any) {
          console.log(error);
          toast.error(`Something went wrong: ${error.message}`);
          throw error;
        }
      },
    });

  const getProjectUpdate = useQuery({
    queryKey: ["getProjectUpdate"],
    queryFn: async () => {
      try {
        const response = await ProjectService.getProject();
        // console.log(response);
        return response;
      } catch (error: any) {
        console.log(error);
        toast.error(`Something went wrong: ${error.message}`);
        throw error;
      }
    },
  });

  const GetProjectUpdateForAUserForAProject = (
    userId: string,
    projectId: string
  ) =>
    useQuery({
      queryKey: ["getProjectUpdateForAUserForAProject", userId, projectId],
      queryFn: async () => {
        try {
          const response =
            await ProjectUpdateService.getProjectUpdateForAUserForAProject(
              userId,
              projectId
            );
          return response.data;
        } catch (error: any) {
          console.log(error);
          toast.error(`Something went wrong: ${error.message}`);
          throw error;
        }
      },
    });

  return {
    getProjectQuery,
    getProjectByUserIdQuery,
    getProjectUpdate,
    GetProjectUpdateForAUserForAProject,
  };
};

export default useProject;

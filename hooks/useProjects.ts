"use client";
import axiosResponseMessage from "@/lib/axiosResponseMessage";
import ProjectService from "@/services/projectService";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useProject = () => {
  const getProjectQuery = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      try {
        const response = await ProjectService.getProject();
        // console.log(response);
        return response?.data;
      } catch (error: any) {
        console.log(error);
        // toast.error(axiosResponseMessage(error));
      }
    },
  });

  const getProjectByProjectIdQuery = (projectId: string) =>
    useQuery({
      queryKey: ["project", projectId],
      queryFn: async () => {
        try {
          const response = await ProjectService.getProjectByProjectId(
            projectId
          );
          return response?.data;
        } catch (error) {
          console.log(error);
        }
      },
    });

  const getProjectUpdate = useQuery({
    queryKey: ["getProjectUpdate"],
    queryFn: async () => {
      try {
        const response = ProjectService.getProject();
        // console.log(response);
        return response;
      } catch (error: any) {
        console.log(error);
      }
    },
  });

  return { getProjectQuery, getProjectUpdate, getProjectByProjectIdQuery };
};

export default useProject;

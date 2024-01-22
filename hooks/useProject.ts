"use client";
import axiosResponseMessage from "@/lib/axiosResponseMessage";
import ProjectService from "@/services/projectService";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { string } from "zod";

const useProject = (userId: string) => {
  const getProjectQuery = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        const response = await ProjectService.getProject();
        console.log(response);
        return response?.data;
      } catch (error: any) {
        console.log(error);
        toast.error("Something went wrong!");
      }
    },
  });

    const getProjectByUserIdQuery = useQuery({
      queryKey: ["getProjectByUserId", userId],
      queryFn: async () => {
        try {
          const response = await ProjectService.getProjectByUserId(userId);
          console.log(response);
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
        console.log(response);
        return response;
      } catch (error: any) {
        console.log(error);
        toast.error(`Something went wrong: ${error.message}`);
        throw error;
      }
    },
  });

  return { getProjectQuery, getProjectUpdate, getProjectByUserIdQuery };
};

export default useProject;

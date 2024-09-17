"use client";
import axiosResponseMessage from "@/lib/axiosResponseMessage";
import UserService, { CreateUserRequest } from "@/services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useUser = () => {
  const getUserQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const response = await UserService.getUser();
        console.log(response);
        return response?.data;
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong!");
      }
    },
  });

  const createUserMutation = useMutation({
    mutationFn: async (data: CreateUserRequest) => {
      const response = await UserService.createUser(data);
      return response?.data;
    },

    onSuccess: (data) => {
      const { firstName, lastName } = data;
      console.log(firstName);
      toast.success(`${firstName} ${lastName} created successfully`);
    },

    onError: (error: any) => {
      console.log(error);
      toast.error(error.response?.data);
    },
  });

  return { getUserQuery, createUserMutation };
};

export default useUser;

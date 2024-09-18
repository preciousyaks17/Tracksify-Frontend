import UserService, { CreateUserRequest } from "@/services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const useEmployees = () => {
  const getEmployeesQuery = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      try {
        const response = await UserService.getUser();

        return response.data;
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    },
  });
  const createUser = useMutation({
    mutationFn: async (data: CreateUserRequest) => {
      const response = await UserService.createUser(data);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("User created successfully");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  return { getEmployeesQuery, createUser };
};

export default useEmployees;

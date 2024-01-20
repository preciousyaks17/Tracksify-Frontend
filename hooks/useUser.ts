'use client'
import UserService from "@/services/userService"
import { useQuery } from "@tanstack/react-query"
import { toast } from "sonner"

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
                toast.error("Something went wrong!")
            }
        }
    })

    return { getUserQuery}
}

export default useUser;
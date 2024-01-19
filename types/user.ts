export interface CreateUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}
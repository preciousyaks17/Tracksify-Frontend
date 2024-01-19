import { apiClient } from "@/helpers/apiclient"
import { CreateProjectRequest, UpdateProjectRequest } from "@/types/project"

export const listProjects = async () => {
    await apiClient.get('/projects').then(res => res.data)
}

export const getProject = async (id:string) => {
    await apiClient.get(`/projects/${id}`).then(res => res.data)
}

export const createProject = async (request:CreateProjectRequest) => {
    await apiClient.post('/projects', request).then(res => res.data)
}

export const updateProject = async (id:string, request:UpdateProjectRequest) => {
    await apiClient.put(`/projects/${id}`, request).then(res => res.data)
}

export const deleteProject = async (id:string) => {
    await apiClient.delete(`/projects/${id}`).then(res => res.data)
}




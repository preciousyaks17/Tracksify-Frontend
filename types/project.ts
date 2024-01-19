
export interface CreateProjectRequest {
        projectName: string;
        startDate: Date;
        dueDate: Date;
        projectDescription: string;
        projectAssignees: string[];
}

export interface UpdateProjectRequest extends CreateProjectRequest {
    projectStatus: number;
}

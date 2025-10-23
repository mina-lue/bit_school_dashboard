export interface School {
    id: string,
    name: string,
    email: string,
    principalId: string, 
}

export interface CreateSchoolDto {
    name: string,
    email: string,
    principalId: string, 
} 
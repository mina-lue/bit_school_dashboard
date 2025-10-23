export interface Student {
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    phone: string,
    email: string,
    class: string,
    grade: number,
    schoolId: string,
    subscribed: boolean,
}

export interface CreateStudentDto {
    firstName: string,
    middleName: string,
    lastName: string,
    phone: string,
    email: string,
    class: string,
    grade: number,
    schoolId: string,
    subscribed: boolean,
}
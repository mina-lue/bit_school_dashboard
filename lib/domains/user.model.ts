export interface User {
  id: string;
  firstName: string
  middleName: string
  lastName: string
  email: string
  phone: string
  password: string
  schoolId: string
}

export interface CreateUserDto {
  firstName: string
  middleName: string
  lastName: string
  email: string
  phone: string
  password: string
}

export interface CreateStaffDto {
  firstName: string
  middleName: string
  lastName: string
  email: string
  phone: string
  password: string
  schoolId: string
  role: 'STAFF'
}
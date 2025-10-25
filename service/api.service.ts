import { LoginResponse } from "@/lib/domains/loginResponse.dto";
import { CreateSchoolWithPrincipal, School } from "@/lib/domains/school.dto";
import { CreateStudentDto, Student } from "@/lib/domains/student.model";
import { StudentsFilter } from "@/lib/domains/students.filter";
import { CreateStaffDto, CreateUserDto, User } from "@/lib/domains/user.model";

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  success: boolean;
};

// ✅ Add generic type for body
const request = async <TResponse, TBody = unknown>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  body?: TBody
): Promise<ApiResponse<TResponse>> => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const tokenRes = await fetch("/api/auth/get-token");
  const token = await tokenRes.json();

  console.log("Access token", token);
  const url = `${API_BASE_URL}/${endpoint}`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token?.value}`,
  };

  const config: RequestInit = { method, headers };

  // ✅ Automatically stringify body only if it’s a plain object or array
  if (body !== undefined && body !== null) {
    config.body =
      typeof body === "object" ? JSON.stringify(body) : (body as unknown as string);
  }

  try {
    console.log(`Making ${method} request to ${url} with body:`, body);
    const response = await fetch(url, config);
    console.log(response);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Could not fetch data!");
    }

    const data = response.status === 204 ? null : await response.json();
    console.log("api service ", data);

    return { data, error: null, success: true };
  } catch (err) {
    console.error(`API Error on ${method} ${url}:`, err);
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred.";
    return { data: null, error: errorMessage, success: false };
  }
};

export const fetchSchools = ( filter: StudentsFilter) : Promise<ApiResponse<School[]>> => {
    const url = filter ? `schools?page=${filter?.page}&size=${filter?.size}` : 'schools'
    return request("GET", url);
}

export const fetchAllStudents = (
  filter: StudentsFilter
): Promise<ApiResponse<Student[]>> => {
  const url = filter
    ? `students/my-school?page=${filter?.page}&size=${filter?.size}`
    : "students/my-school";
  return request<Student[]>("GET", url);
};

export const fetchStudentsSubscribed = (
  filter: StudentsFilter
): Promise<ApiResponse<Student[]>> => {
  const url = filter
    ? `students/my-school?page=${filter?.page}&size=${filter?.size}&subscribed=true`
    : "students/my-school?subscribed=true";
  return request<Student[]>("GET", url);
};


export const registerStudent = ( student: CreateStudentDto) : Promise<ApiResponse<Student>> => {
    return request("POST", 'students/new', student);
}

export const fetchMyStaffs = (
  filter: StudentsFilter
): Promise<ApiResponse<User[]>> => {
  const url = filter
    ? `users/my-staffs?page=${filter?.page}&size=${filter?.size}`
    : "users/my-staffs";
  return request<User[]>("GET", url);
};

export const registerStaff = ( user: CreateStaffDto) : Promise<ApiResponse<Student>> => {
    return request("POST", 'auth/signup', user);
}

export const registerSchool = ( schoolData: CreateSchoolWithPrincipal) : Promise<ApiResponse<School>> => {
    return request("POST", 'register-school', schoolData);
}


export async function login(email: string, password: string): Promise<LoginResponse> {
    console.log('calling backend at ', process.env.NEXT_PUBLIC_API_URL)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json();
}


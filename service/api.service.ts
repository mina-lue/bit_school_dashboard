import { LoginResponse } from "@/lib/domains/loginResponse.dto";
import { Student } from "@/lib/domains/student.model";



export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  success: boolean;
};

const request = async <T> (
    method: "GET" | "POST" | "PUT" | "DELETE",
    endpoint: string,
    body?: string
): Promise<ApiResponse<T>> => {

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const data = await fetch('/api/auth/get-token');
const token = await data.json()

    console.log('Access token' ,token)
    const url = `${API_BASE_URL}/${endpoint}`;
    const headers : HeadersInit = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`
    }

    const config: RequestInit = {
        method,
        headers
    }

    if(body)
        config.body = JSON.stringify(body)

    try {
        console.log(`Making ${method} request to ${url} with body:`, body);
        const response = await fetch(url, config);
        console.log(response);

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || "Could not fetch data!")
        }

        const data = response.status === 204? null : await response.json();
        console.log('api service ', data)
        return{data, error: null, success: true}
    } catch (err) {
        console.error(`API Error on ${method} ${url}:`, err);
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
        return { data: null, error: errorMessage, success: false };
  }

}

export const fetchAllStudents = () : Promise<ApiResponse<Student[]>> => {
    return request("GET", `students`);
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


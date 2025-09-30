import { Student } from "@/lib/domains/student.model";


const API_BASE_URL = process.env.NEXT_PUBLIC_SERVICE_URL;

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  success: boolean;
};

const request = async <T> (
    method: "GET" | "POST" | "PUT" | "DELETE",
    endpoint: string,
    token?: string,
    body?: string
): Promise<ApiResponse<T>> => {
    const url = `${API_BASE_URL}/${endpoint}`;
    const headers : HeadersInit = {
        "Content-Type": "application/json",
    }
    if(token)
        headers['Authorization'] = `Bearer ${token}`

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

        const data = response.status !== 204? null : await response.json();
        return{data, error: null, success: true}
    } catch (err) {
        console.error(`API Error on ${method} ${url}:`, err);
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
        return { data: null, error: errorMessage, success: false };
  }

}

export const fetchAllStudents = () : Promise<ApiResponse<Student[]>> => {
    return request("GET", `/api/tenders/my-tenders/`);
  }


export interface LoginResponse {
  user: {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    schoolId: string;
  };
  backendTokens: {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
  };
}
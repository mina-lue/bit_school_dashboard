export interface LoginResponse {
  user: {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    role: "ADMIN" | "SUPER_ADMIN" | "STAFF" | "BASIC";
    schoolAsPrincipal: {
      id: string;
      name: string;
      email: string;
      principalId: string;
    };
    schoolAsStaff: {
      id: string;
      name: string;
      email: string;
      principalId: string;
    };
  };
  backendTokens: {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
  };
}

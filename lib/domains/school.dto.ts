export interface School {
  id: string;
  name: string;
  email: string;
  principalId: string;
}

export interface CreateSchoolDto {
  name: string;
  email: string;
  principalId: string;
}

export interface CreateSchoolWithPrincipal {
  school: {
    name: string;
    email: string;
  };
  principal: {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  };
}

export interface DashboardDataShape {
  admin : {
    username: string
    firstname: string;
    middleName: string;
    lastName: string;
  }
  school: {
    name: string;
  }
  students: number;
}

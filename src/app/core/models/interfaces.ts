export interface Errors {
  errors: {[key: string]: string};
}

export interface toDo {
  id?: string;
  text: string;
  completed: boolean;
}

export interface User {
  username: string,
  email?: string,
  password?: string,
  token?: string
}

export interface AuthResponse {
  user: {
    token: string;
    email: string;
    username: string;
  }
}

export interface CreateResponse {
  name: string
}



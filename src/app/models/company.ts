export interface Company {
  name: string;
  description:String,
  number: Number;
  email: string;
  salary: Number;
  state?: string;
  city?: string;
}

export interface UsersData {
  name: string;
  id: number;
}

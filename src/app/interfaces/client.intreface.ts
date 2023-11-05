export interface Client {
  key_client: string;
  name: string;
  phone_number: string;
  email: string;
  address: string;
  isActive: boolean;
  createdAt: number;
  updatedAt: number;
  _id?: string;
}

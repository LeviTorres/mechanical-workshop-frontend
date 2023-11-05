export interface Client {
  key_client: string;
  name: string;
  phone_number: string;
  email: string;
  address: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  _id?: string;
}

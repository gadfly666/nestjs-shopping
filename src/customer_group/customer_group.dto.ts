export class CustomerDTO {
  id: bigint;
  email: string;
  firstName: string;
  lastName: string;
  billingAddressId: bigint;
  passwordHash: string;
  hasAccount: boolean;
  createdAt: Date;
  updatedAt: Date; 
}
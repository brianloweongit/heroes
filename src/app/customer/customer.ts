export interface ICustomer {
    id: number;
    name: string;
    phone: string;
    email: string;
}

export class Customer implements ICustomer {
    id: number;
    name: string;
    phone: string;
    email: string;
}
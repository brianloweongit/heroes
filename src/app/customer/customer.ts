export interface ICustomer {
    email: string;
    id: number;
    name: string;
    phone: string;
}

export class Customer implements ICustomer {
    email: string;
    id: number;
    name: string;
    phone: string;
}

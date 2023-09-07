export class User {

    email? : string;
    password? : string;
    id? : number;
	contactNumber? : number;
    name? : string;
    propertyType? : string;

    constructor(email: string, password: string, contactNumber: number, name: string,propertyType: string) {
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
        this.name = name;
        this.propertyType = propertyType;
    }
}

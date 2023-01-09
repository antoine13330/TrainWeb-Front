import { UserRole } from "./role"

export interface User {
    id : number  
    name : string, 
    email : string,
    token : string,
    role : UserRole
}
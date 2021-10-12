import { IsEmail, IsNotEmpty } from "class-validator";

export class UserUpdateDto {
    
    firstname?:string;

  
    lastname?:string;
    
   
    email?:string;
}
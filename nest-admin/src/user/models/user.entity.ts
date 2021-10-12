import { Options } from "@nestjs/common";
import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User 
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    @Column({unique:true})
    email:string;

    @Column()
    @Exclude()
    password:string;
}
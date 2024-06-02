import {  Types } from "mongoose";


export type Guardian = {
    fatherName : string;
    fatherOccupation : string;
    fatherContactNo : string
    motherName : string;
    motherOccupation : string;
    motherContactNo : string
}

export type UserName = {
    firstName : string;
    middleName? : string;
    lastName : string
}

export type LocalGuardian = {
    name : string;
    occupation : string;
    contactNo : string;
    address : string
}


export type Student = {
    id : string;
    user : Types.ObjectId;
    name : UserName
    dateOfBirth? : string
    gender : "male" | "female"| "other";
    contactNo : string;
    emergencyContactNo : string;
    email : string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress : string;
    permanentAddress : string;
    guardian: Guardian
    localGuardian : LocalGuardian
    profileImg? : string
    
}
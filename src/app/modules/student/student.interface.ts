import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName : string;
    fatherOccupation : string;
    fatherContactNo : string
    motherName : string;
    motherOccupation : string;
    motherContactNo : string
}


export type Student = {
    id : string;
    name : {
        firstName : string;
        middleName : string;
        lastName : string
    }
    dateOfBirth : string
    gender : "male" | "female";
    contactNo : string;
    emergencyNo : string;
    email : string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress : string;
    permanentAddress : string;
    guardian: Guardian
}
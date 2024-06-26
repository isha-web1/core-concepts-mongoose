import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student/student.interface';

const UserNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: [true, "First name is required"],
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    }
});

const GuardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required: [true, "Father's name is required"]
    },
    fatherOccupation: {
        type: String,
        required: [true, "Father's occupation is required"]
    },
    fatherContactNo: {
        type: String,
        required: [true, "Father's contact number is required"]
    },
    motherName: {
        type: String,
        required: [true, "Mother's name is required"]
    },
    motherOccupation: {
        type: String,
        required: [true, "Mother's occupation is required"]
    },
    motherContactNo: {
        type: String,
        required: [true, "Mother's contact number is required"]
    }
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
    name: {
        type: String,
        required: [true, "Local guardian's name is required"]
    },
    occupation: {
        type: String,
        required: [true, "Local guardian's occupation is required"]
    },
    contactNo: {
        type: String,
        required: [true, "Local guardian's contact number is required"]
    },
    address: {
        type: String,
        required: [true, "Local guardian's address is required"]
    }
});

const StudentSchema = new Schema<Student>({
    id: {
        type: String,
        required: [true, "Student ID is required"],
        unique: true
    },
    user : {
        type : Schema.Types.ObjectId,
        required : [true, "user ID  must be required"],
        unique: true,
        ref : 'User'
    },
    name: {
        type: UserNameSchema,
        required: [true, "Student's name is required"]
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "The gender field must be one of the following: 'male', 'female', 'other'"
        },
        required: [true, "Gender is required"]
    },
    dateOfBirth: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    contactNo: {
        type: String,
        required: [true, "Contact number is required"]
    },
    emergencyContactNo: {
        type: String,
        required: [true, "Emergency contact number is required"]
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    },
    presentAddress: {
        type: String,
        required: [true, "Present address is required"]
    },
    permanentAddress: {
        type: String,
        required: [true, "Permanent address is required"]
    },
    guardian: {
        type: GuardianSchema,
        required: [true, "Guardian information is required"]
    },
    localGuardian: {
        type: LocalGuardianSchema,
        required: [true, "Local guardian information is required"]
    },
    profileImg: {
        type: String
    },
    
});

export const StudentModel = model<Student>('Student', StudentSchema);

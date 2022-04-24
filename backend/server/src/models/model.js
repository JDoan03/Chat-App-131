import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
    userName: {
        type: String,
        required: "Enter your username"
    },
    password: {
        type: String,
        required: "Enter your password"
    },
    firstName: {
        type: String,
        required: "Enter your first name"
    },
    lastName: {
        type: String,
        required: "Enter your last name"
    }
})

export const TeacherSchema = new Schema({
    userName: {
        type: String,
        required: "Enter your username"
    },
    password: {
        type: String,
        required: "Enter your password"
    },
    firstName: {
        type: String,
        required: "Enter your first name"
    },
    lastName: {
        type: String,
        required: "Enter your last name"
    },
    email: {
        type: String,
        required: "Enter your email"
    },
    phone: {
        type: String,
        required: "Enter your phone number"
    }
})

export const AdminSchema = new Schema({
    userName: {
        type: String,
        required: "Enter your username"
    },
    password: {
        type: String,
        required: "Enter your password"
    },
    firstName: {
        type: String,
        required: "Enter your first name"
    },
    lastName: {
        type: String,
        required: "Enter your last name"
    },
    email: {
        type: String,
        required: "Enter your email"
    },
    phone: {
        type: String,
        required: "Enter your phone number"
    }
})
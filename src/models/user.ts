import Mongoose, { Document, Schema, } from 'mongoose';

export interface IUser extends Document {
  name: string;
  age: number;
  jobGrade: string;
  departmentId: number;
  divisionId: number;
  joinedDate: Date;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    jobGrade: { type: String, required: true },
    departmentId: { type: Number, required: false },
    divisionId: { type: Number, required: true },
    joinedDate: { type: Date, required: true },
  },
  { collection: 'User', timestamps: true }
)

export const User = Mongoose.model<IUser>('User', UserSchema)
import Mongoose, { Document, Schema, } from 'mongoose';

export interface IDepartment extends Document {
  name?: string;
  divisionId: number;
  divisionName?: string;
  departmentId?: number;
  departmentName?: string;
  hod: string;
}

const DepartmentSchema = new Schema(
  {
    name: { type: String, required: false },
    divisionId: { type: Number, required: true },
    divisionName: { type: String, required: false },
    departmentId: { type: Number, required: false },
    departmentName: { type: String, required: false },
    hod: { type: String, required: true }
  },
  { collection: 'Department', timestamps: true }
)

export const Department = Mongoose.model<IDepartment>('Department', DepartmentSchema)
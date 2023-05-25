import Mongoose, { Document, Schema, } from 'mongoose';

export interface ISalary extends Document {
  jobGrade: string;
  salary: number;
}

const SalarySchema = new Schema(
  {
    jobGrade: { type: String, required: true },
    salary: { type: Number, required: true }
  },
  { collection: 'Salary', timestamps: true }
)

export const Salary = Mongoose.model<ISalary>('Salary', SalarySchema)
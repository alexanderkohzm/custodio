import express, { Response } from 'express'
import { User } from '../../models/user';
import { EmployeeType } from './types'

export const employees = express.Router();

employees.get('/', async (req, res: Response<EmployeeType[]>) => {

  const aggregation = [
    {
      $lookup: {
        from: "Salary",
        localField: "jobGrade",
        foreignField: "jobGrade",
        as: "salary"
      }
    },
    {
      $lookup: {
        from: "Department",
        localField: "departmentId",
        foreignField: "departmentId",
        as: "department"
      }
    },
    {
      $project: {
        // we don't want _id in the result
        _id: 0,
        name: 1,
        age: 1,
        jobGrade: 1,
        departmentId: 1,
        joinedDate: 1,
        salary: { $arrayElemAt: ["$salary.salary", 0] },
        departmentName: { $arrayElemAt: ["$department.departmentName", 0] },
        divisionId: { $arrayElemAt: ["$department.divisionId", 0] },
        divisionName: { $arrayElemAt: ["$department.divisionName", 0] },
        hod: { $arrayElemAt: ["$department.hod", 0] }
      }
    }
  ]

  const employees = await User.aggregate(aggregation)
  res.send(employees)
})

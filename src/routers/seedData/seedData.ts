import express from 'express'
import { Salary } from '../../models/salary';
import { Department } from '../../models/department'
import { User } from '../../models/user';

export const seedData = express.Router();

/**
 * This is to seed data to mongoDb in a convenient way 
 * 
 * Technically supposed to be a POST request but I want it to be convenient 
 * so just go to the endpoint localhost:{PORT}/seedData/generateData
 */
seedData.get('/generateData', async (req, res) => {

  const salaryOne = new Salary({
    jobGrade: "1",
    salary: 1000,
  })
  await salaryOne.save();
  const salaryTwo = new Salary({
    jobGrade: "2",
    salary: 2000,
  })
  await salaryTwo.save();
  const salaryThree = new Salary({
    jobGrade: "3",
    salary: 3000,
  })
  await salaryThree.save()

  const departmentOne = new Department({
    name: "R&D",
    departmentId: 1,
    departmentName: "r&d",
    divisionId: 2,
    divisionName: "",
    hod: "ken"
  })
  await departmentOne.save()

  const departmentTwo = new Department({
    name: "",
    departmentId: null,
    departmentName: "",
    divisionId: 2,
    divisionName: "tech",
    hod: "alice"
  })
  await departmentTwo.save()

  const userOne = new User({
    name: 'Thomas Edison',
    age: 25,
    jobGrade: "1",
    departmentId: 1,
    divisionId: 2,
    joinedDate: new Date('2022-04-05'),
  })
  await userOne.save()

  const userTwo = new User({
    name: 'Nikola Tesla',
    age: 52,
    jobGrade: "2",
    departmentId: null,
    divisionId: 2,
    joinedDate: new Date('2022-04-05'),
  })
  await userTwo.save()

  const userThree = new User({
    name: 'Michael Jackson',
    age: 15,
    jobGrade: "3",
    departmentId: 1,
    divisionId: 2,
    joinedDate: new Date('2022-04-05'),
  })
  await userThree.save()

  res.send(`Successfully saved salary, department, and user data`)
})

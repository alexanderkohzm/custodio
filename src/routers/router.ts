import express from 'express'
import { employees } from './employee/employees'
import { seedData } from './seedData/seedData'


export const router = express.Router()

router.use('/employees', employees)

router.use('/seedData', seedData)

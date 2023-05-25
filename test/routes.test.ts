
import supertest from 'supertest'
import { app } from '../src/index'


describe(`routes test`, () => {

  const request = supertest

  it(`Should return an array of employees`, async () => {
    const response = await request(app).get('/employees');

    expect(response.status).toBe(200)

    const arrayOfEmployees = response._body

    // expect the salary field to be defined. 
    expect(arrayOfEmployees[0].salary).toBeDefined()
    // note: departmentName, divisionId, and divisionName are nullable

    // alternatively, just look at snapshots
    expect(arrayOfEmployees).toMatchSnapshot()
  })
})

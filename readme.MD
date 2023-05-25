# Getting Started

## ENV File

You will need the following variables in your ENV file

1. PORT
   For example: PORT=8080

2. MONGODB URL
   For example: MONGODB_URL=mongodb://mongo:EXAMPLE_CONNECTION_STRING_AND_PORT
   This means you must use set up your MONGO DB and get the connection string/URL.

## Steps to make sure tests pass and you're able to view employees

1. npm install / npm i

2. npm run dev

3. Create User, Departments, and Salary collection and documents. Go to the following endpoint localhost:{PORT}/seedData/generateData --> This will generate the data

4. Go to localhost:{PORT}/emplyoees --> you will be able to find the employee data in the body of the resposne

5. You can also try to run tests - if you have created the data correctly (e.g. going to seedData/generateData and only doing it once so there's no duplicates) the response should match the snapshot

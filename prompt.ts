// Assignment Question:

// > Write a typescript application to create an endpoint to get a list of employees within an organization.
// > The result should breakdown to Division, Department and Job Grade.
// > Use mongoose aggregations for single query (multi queries is not allow)
// > Share the github link with readme file.

// user collection:
// {name: string,
// age: number;
// jobGrade: string,
// departmentId: number,
// divisionId: number,
// joinedDate: Date}

// department collection:
// {
// name: string,
// divisionId: number,
// divisionName: string,
// departmentId: number,
// departmentName: string,
// hod: string
// }

// salary collection:
// {
// jobGrade: string,
// salary: number
// }

// return result
// {
// name: string
// age: number;
// jobGrade: string,
// salary: number
// departmentId: number,
// departmentName: string,
// divisionId: number,
// divisionName: string,
// hod: string,
// joinedDate: Date
// }

// sample department data:
// [
// {
// name: "R&D",
// departmentId: 1,
// departmentName: "r&d",
// divisionId: 2
// divisionName: "",
// hod: "ken"
// },

// {
// name: "",
// departmentId: null,
// departmentName: "",
// divisionId: 2
// divisionName: "tech",
// hod: "alice"
// }
// ]

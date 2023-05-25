export type EmployeeType = {
  name: string
  age: number;
  jobGrade: string,
  salary: number,
  // DivisionId is NOT nullable but name is 
  divisionId: number,
  divisionName?: string,
  // Both department ID and Name are nullable
  departmentId?: number,
  departmentName?: string,
  hod: string,
  joinedDate: Date
}
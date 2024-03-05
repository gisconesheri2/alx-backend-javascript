export default function createReportObject (employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments (empList) {
      return Object.keys(empList).length;
    }
  };

  return obj;
}

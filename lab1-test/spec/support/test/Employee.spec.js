const Employee = require("../../../Employee");

describe("Employee Class", () => {

  let emp;
  let mockHR;

  beforeEach(() => {
    emp = new Employee("Ali", 30, 4);

    mockHR = {
      validateDays: jasmine.createSpy("validateDays").and.returnValue(true),
      submitRequest: jasmine.createSpy("submitRequest")
    };
  });

  it("should return 5000 if yearsOfExp <= 5", () => {
    expect(emp.calculateSalary()).toBe(5000);
  });

  it("should return 9000 if yearsOfExp > 5", () => {
    const emp2 = new Employee("Sara", 28, 7);
    expect(emp2.calculateSalary()).toBe(9000);
  });

  it("should set skills", () => {
    const result = emp.setSkills("JS", "React");
    expect(result).toEqual(["JS", "React"]);
  });

  it("should store skills", () => {
    emp.setSkills("Node", "Express");
    expect(emp.skills).toContain("Node");
  });

  it("should deny invalid request", () => {
    mockHR.validateDays.and.returnValue(false);

    const result = emp.requestTimeOff(10, mockHR);

    expect(result).toBe("Time off request denied: invalid number of days.");
  });

  it("should submit valid request", () => {
    const result = emp.requestTimeOff(3, mockHR);

    expect(mockHR.validateDays).toHaveBeenCalledWith(3);
    expect(mockHR.submitRequest).toHaveBeenCalledWith("Ali", 3);
    expect(result).toBe("Time off request submitted successfully");
  });

});
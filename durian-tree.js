class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}

const ada = new Employee("Ada", "CEO", 3000000.00);
  const craig    = new Employee("Craig", "VP Software", 1000000);
    const simone = new Employee("Simone", "Software Engineer", 333333);
    const ali    = new Employee("Ali", "Software Engineer", 333333);
  const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
  const angela   = new Employee("Angela", "VP Retail", 1000000);
    const karla    = new Employee("Karla", "Merchant", 333333);
  const phil     = new Employee("Phil", "VP Marketing", 1000000);
    const florida = new Employee("Florida", "Sales Associate", 333333);
    const david   = new Employee("David", "Sales Associate", 333333);
    const brian   = new Employee("Brian", "Sales Associate", 333333);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
craig.addSubordinate(simone);
craig.addSubordinate(ali);
angela.addSubordinate(karla);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

console.log(craig.numberOfPeopleToCEO);
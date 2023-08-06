// Cargar nombre del empleado
const getName = msg => {
  let name;
  do {
    name = prompt(msg);
  } while (!name && /^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(name));
  return name.toUpperCase();
};

// Cargar valor ENTERO
const getIntValue = msg => {
  let value;
  do {
    value = Number(prompt(msg));
  } while (!value || value < 0 || !Number.isInteger(value) || value > 999999);
  return value;
};

// Cargar valor FLOAT
const getFloatValue = msg => {
  let value;
  do {
    value = Number(prompt(msg));
  } while (!value || value < 0);
  return value;
};

// Cargar porcentaje de comisión
const getPercentage = msg => {
  let percentage;
  do {
    percentage = Number(prompt(msg));
  } while (!percentage || percentage <= 0 || percentage > 20);
  return percentage / 100;
};

// Cargar opcion (1 o 2) para continuar o cancelar la carga de empleados
const getContinueValue = msg => {
  let value;
  do {
    value = Number(prompt(msg));
  } while (!value || !Number.isInteger(value) || value < 1 || value > 2);
  return value;
};

// Cargar datos del empleado
const getEmployee = () => {
  let employee = {};
  employee.name = getName("Nombre del empleado: ");
  employee.unitValue = getFloatValue("Valor unitario del producto: ");
  employee.salesQuantity = getIntValue("Cantidad de ventas del producto: ");
  employee.baseSalary = getFloatValue("Salario base del empleado: ");
  employee.commissionPercentage = getPercentage("Porcentaje de comision(Entre 0 y 20): ");
  return employee;
};

// Chequear si se desea continuar cargando empleados
const cycleContinue = () => {
  const aux = getContinueValue(`Ingrese (1 o 2):
                                1) Cargar otro empleado
                                2) Salir`);
  return aux == 1 ? true : false;
};

// Calcular comision ganada
const getCommissionEarned = employee => {
  return (
    employee.unitValue * employee.salesQuantity * employee.commissionPercentage
  );
};

// Calcular monto total a cobrar
const getTotalSalary = employee => {
  return (employee.baseSalary + employee.commissionEarned).toFixed(2);
};

const showTotalSalary = (name, totalSalary) => {
  alert(`Nombre: ${name} \t Salario total: $${totalSalary}`);
};

// Obtener los empleados por teclado
const getEmployeeList = () => {
  // Inicializo el array de empleados, el objeto empleado y la variable auxiliar para entrar en el bucle
  const employeeArr = [];
  let employee = {};
  let continueAux = true;

  while (continueAux) {
    // Cargo los datos en un objeto empleado
    employee = getEmployee();

    // Proceso los datos del empleado y calculo el monto total a cobrar y la comisión ganada
    employee.commissionEarned = getCommissionEarned(employee);
    employee.totalSalary = getTotalSalary(employee);

    // Muestro el salario total a cobrar
    showTotalSalary(employee.name, employee.totalSalary);

    // Guardo el empleado en el array auxiliar
    employeeArr.push(employee);

    // Pregunto si quiero cargar otro empleado
    continueAux = cycleContinue();
  }

  // Una vez cargado todos los empleados se retorna el array auxiliar
  return employeeArr;
};

const compareBySalaries = (firstEmployee, secondEmployee) => {
  return firstEmployee.totalSalary - secondEmployee.totalSalary;
};

const getSortedEmployeeList = employeeList => {
  // Hago una copia de la lista original
  const employeeListAux = employeeList.slice();
  // Lo ordeno
  employeeListAux.sort(compareBySalaries);
  return employeeListAux;
};

//============================
//======= ESTADISTICAS =======
//============================

// Obtener salario mas alto
const getHighestSalary = sortedList => {
  let highestSalaryEmployee = {
    name: sortedList[sortedList.length - 1].name,
    salary: sortedList[sortedList.length - 1].totalSalary,
  };
  return highestSalaryEmployee;
};

// Obtener salario mas bajo
const getLowestSalary = sortedList => {
  let lowestSalaryEmployee = {
    name: sortedList[0].name,
    salary: sortedList[0].totalSalary,
  };
  return lowestSalaryEmployee;
};

// Obtener posición del salario mas alto
const getHighestSalaryPosition = sortedList => {
  let highestSalaryEmployeePosition = {
    name: sortedList[sortedList.length - 1].name,
    position: sortedList.length,
  };
  return highestSalaryEmployeePosition;
};

// Obtener posición del salario mas alto
const getLowestSalaryPosition = sortedList => {
  let lowestSalaryEmployeePosition = {
    name: sortedList[0].name,
    position: 1,
  };
  return lowestSalaryEmployeePosition;
};

// Obtener promedio entre los salarios
const getAverageSalaries = sortedList => {
  let aux = 0;
  sortedList.forEach((employee) => {
    aux += employee.totalSalary;
  });
  return (aux / sortedList.length).toFixed(2);
};

// Obtener cantidad de salarios menores a 10000
const getSalariesUnder10000 = sortedList => {
  let aux = 0;
  sortedList.forEach((employee) => {
    if (employee.totalSalary < 10000) {
      aux++;
    }
  });
  return aux;
};

// Obtener cantidad de salarios mayores a 50000
const getSalariesOver50000 = sortedList => {
  let aux = 0;
  sortedList.forEach((employee) => {
    if (employee.totalSalary > 50000) {
      aux++;
    }
  });
  return aux;
};

// Obtener mayor comisión ganada
const findHighestCommissionEmployee = sortedList => {
  let highestCommissionEmployee = sortedList[0];
  for (let i = 0; i < sortedList.length; i++) {
    if (sortedList[i].commissionEarned > highestCommissionEmployee.commissionEarned) {
      highestCommissionEmployee = sortedList[i];
    }
  }
  return highestCommissionEmployee;
};

// Obtener menor comisión ganada
const findLowestCommissionEmployee = sortedList => {
  let lowestCommissionEmployee = sortedList[0];
  for (let i = 0; i < sortedList.length; i++) {
    if (sortedList[i].commissionEarned < lowestCommissionEmployee.commissionEarned) {
      lowestCommissionEmployee = sortedList[i];
    }
  }
  return lowestCommissionEmployee;
};

// Encontrar empleado con mas ventas
const findHighestSalesEmployee = sortedList => {
  let highestSalesEmployee = sortedList[0];
  for (let i = 0; i < sortedList.length; i++) {
    if (sortedList[i].salesQuantity > highestSalesEmployee.salesQuantity) {
      highestSalesEmployee = sortedList[i];
    }
  }
  return highestSalesEmployee;
};

// Encontrar empleado con menos ventas
const findLowestSalesEmployee = sortedList => {
  let lowestSalesEmployee = sortedList[0];
  for (let i = 0; i < sortedList.length; i++) {
    if (sortedList[i].salesQuantity < lowestSalesEmployee.salesQuantity) {
      lowestSalesEmployee = sortedList[i];
    }
  }
  return lowestSalesEmployee;
};

// Validamos que la lista no esté vacía
const isValid = sortedList => {
  if (sortedList.length === 0) {
    return false;
  }
  return true;
};

// Obtener estadisiticas
const getEmployeeStatistics = sortedEmployeeList => {
  const statistics = {};
  if (isValid(sortedEmployeeList)) {
    statistics.highestSalary = getHighestSalary(sortedEmployeeList);
    statistics.lowestSalary = getLowestSalary(sortedEmployeeList);
    statistics.highestSalaryPosition = getHighestSalaryPosition(sortedEmployeeList);
    statistics.lowestSalaryPosition = getLowestSalaryPosition(sortedEmployeeList);
    statistics.averageSalaries = getAverageSalaries(sortedEmployeeList);
    statistics.salariesUnder10000 = getSalariesUnder10000(sortedEmployeeList);
    statistics.salariesOver50000 = getSalariesOver50000(sortedEmployeeList);
    statistics.highestCommissionEmployee = findHighestCommissionEmployee(sortedEmployeeList);
    statistics.lowestCommissionEmployee = findLowestCommissionEmployee(sortedEmployeeList);
    statistics.highestSalesEmployee = findHighestSalesEmployee(sortedEmployeeList);
    statistics.lowestSalesEmployee = findLowestSalesEmployee(sortedEmployeeList);
    return statistics;
  }
  return null;
};

//===================================
//======= MOSTRAR EN PANTALLA =======
//===================================

const showStatistics = statistics => {
  if (statistics != null) {
    alert(`
        Salario más alto: $${statistics.highestSalary.salary} \t Empleado: ${statistics.highestSalary.name}
        Salario más bajo: $${statistics.lowestSalary.salary} \t Empleado: ${statistics.lowestSalary.name}
        Posición del salario más alto: ${statistics.highestSalaryPosition.position} \t Empleado: ${statistics.highestSalaryPosition.name}
        Posición del salario más bajo: ${statistics.lowestSalaryPosition.position} \t Empleado: ${statistics.lowestSalaryPosition.name}
        Promedio entre salarios: $${statistics.averageSalaries}
        Cantidad de salarios menores a $10000: ${statistics.salariesUnder10000}
        Cantidad de salarios mayores a $50000: ${statistics.salariesOver50000}
        Mayor comisión ganada: $${statistics.highestCommissionEmployee.commissionEarned} \t Empleado: ${statistics.highestCommissionEmployee.name}
        Menor comisión ganada: $${statistics.lowestCommissionEmployee.commissionEarned} \t Empleado: ${statistics.lowestCommissionEmployee.name}
        Empleado con más ventas: ${statistics.highestSalesEmployee.salesQuantity} \t Empleado: ${statistics.highestSalesEmployee.name}
        Empleado con menos ventas: ${statistics.lowestSalesEmployee.salesQuantity} \t Empleado: ${statistics.lowestSalesEmployee.name}
    `);
  } else {
    alert("Actualmente no hay estadísticas.");
  }
};

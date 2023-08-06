/*
    Realizar un programa que permita al usuario ingresar los datos de cada empleado y muestre el sueldo total a cobrar. 
    Al finalizar la carga mostrar por pantalla las estadisticas.

    Datos a ingresar de cada empleado:
        - Nombre del empleado
        - Valor unitario de cierto artículo.
        - Cantidad de artículos vendidos por un vendedor
        - Salario base
        - % de comisión del monto total vendido 

    Estadisticas:
        - Mayor sueldo
        - Menor sueldo
        - Posición del mayor sueldo
        - Posición del menor sueldo
        - Promedio de sueldos (promedio entre los sueldos totales)
        - Cantidad de sueldos por debajo de 10000
        - Cantidad de sueldos enicma de 50000
        - Mayor comisión obtenida
        - Menor comisión obtenida
        - Mejor vendedor (+ ventas)
        - Peor vendedor (- ventas)

    SUELDO_TOTAL = SUELDO_BASE + [(PRECIO_UNITARIO * CANT_VENTAS) * PORCENTAJE_COMISION]
    
    Validaciones: 
        - NOMBRE: string sin símbolos ni números
        - PRECIO_UNITARIO: mayor a 0 
        - CANT_VENTAS: numero entero && mayor a 0 && menor a 999999
        - SALARIO_BASE: mayor a 0 
        - PORCENTAJE_COMISION: mayor a 0 && menor a 20
        
    Nota:  las estadisticas deben estar agrupados en un objeto
*/

/*
Valores hardcodeados
const employeeList = [
    {name:"Jorge",unitValue: 499,salesQuantity: 337,baseSalary: 50000.00, commissionPercentage: 0.15, commissionEarned: 25224.45, totalSalary: 75224.45},
    {name:"Camila",unitValue: 999,salesQuantity: 278,baseSalary: 50000.00, commissionPercentage: 0.20, commissionEarned: 55544.4, totalSalary: 105544.4},
    {name:"Martin",unitValue: 1499,salesQuantity: 98,baseSalary: 50000.00, commissionPercentage: 0.18, commissionEarned: 26442.36, totalSalary: 76442.36},
    {name:"Marcela",unitValue: 299,salesQuantity: 481,baseSalary: 50000.00, commissionPercentage: 0.09, commissionEarned: 12943.71, totalSalary: 62943.71}
]
*/

//==================
//====== MAIN ======
//==================

// Genero una lista de empleados
const employeeList = getEmployeeList();

// Genero una lista auxiliar ordenada
const sortedEmployeeList = getSortedEmployeeList(employeeList);

// Proceso la lista ordenada para obtener las estadisticas
const statistics = getEmployeeStatistics(sortedEmployeeList);

// Muestro las estadisticas
showStatistics(statistics);




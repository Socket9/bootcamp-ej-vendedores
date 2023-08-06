# BOOTCAMP JAVA 2023 - EJERCICIO VENDEDORES - JAVASCRIPT

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

NOTA:  las estadisticas deben estar agrupados en un objeto.

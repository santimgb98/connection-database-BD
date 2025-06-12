# MySQL Database Connector for Hotel Management System

Este proyecto es un script de Node.js que permite conectarse a una base de datos MySQL y consultar información de las tablas.

## Características principales

- Conexión interactiva a la base de datos MySQL
- Selección entre 16 tablas disponibles en la DB "hotel"
- Visualización de:
  - Estructura de la tabla (tipos de campos)
  - Contenido completo de la tabla seleccionada
- Manejo seguro de credenciales mediante input por consola

## Tablas disponibles

| #  | Nombre de tabla           |
|----|---------------------------|
| 1  | cliente                   |
| 2  | clientes_preferentes      |
| 3  | empleado                  |
| 4  | empresa                   |
| 5  | factura                   |
| 6  | factura_prov              |
| 7  | formapago                 |
| 8  | habitaciones_con_extras   |
| 9  | habitación                |
| 10 | incluye                   |
| 11 | limpieza                  |
| 12 | precio                    |
| 13 | proveedor                 |
| 14 | reserva                   |
| 15 | servicio                  |
| 16 | usa                       |

## Requisitos previos

- Node.js v16+
- MySQL Server 8.0+
- Base de datos "hotel" con las tablas mencionadas

## Dependencias

```bash
npm install mysql2 prompt-sync
```
## Configuración
Clonar repositorio
Instalar dependencias
Observa que está creado el archivo config.js, con la estructura de conexión:
- Host
- Usuario
- Contraseña
- Base de datos (En este caso Hotel)

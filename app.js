const mysql =require('mysql2/promise');
const prompt = require('prompt-sync')();
let nombre_tabla = "";

console.clear();
const usuario = prompt('Introduce nombre de usuario mysql: ');
const password = prompt(`Introduce contraseña de ${usuario} mysql: `);
console.clear();

console.log('TABLAS DE LA BASE DE DATOS <HOTEL>:');
console.log('1. cliente');
console.log('2. clientes_preferentes');
console.log('3. empleado');
console.log('4. empresa');
console.log('5. factura');
console.log('6. factura_prov');
console.log('7. formapago');
console.log('8. habitaciones_con_extras');
console.log('9. habitación');
console.log('10. incluye');
console.log('11. limpieza');
console.log('12. precio');
console.log('13. proveedor');
console.log('14. reserva');
console.log('15. servicio');
console.log('16. usa');

let option = Number(prompt('Selecciona una tabla de la lista (por su orden): '));
while(isNaN(option)===true || option < 1 || option > 16){
    option = Number(prompt('Selecciona una tabla EXISTENTE de la lista (por su orden): '));
}
switch(option){
    case 1:{nombre_tabla="cliente"}break;
    case 2:{nombre_tabla="clientes_preferentes"}break;
    case 3:{nombre_tabla="empleado"}break;
    case 4:{nombre_tabla="empresa"}break;
    case 5:{nombre_tabla="factura"}break;
    case 6:{nombre_tabla="factura_prov"}break;
    case 7:{nombre_tabla="formapago"}break;
    case 8:{nombre_tabla="habitaciones_con_extras"}break;
    case 9:{nombre_tabla="habitación"}break;
    case 10:{nombre_tabla="incluye"}break;
    case 11:{nombre_tabla="limpieza"}break;
    case 12:{nombre_tabla="precio"}break;
    case 13:{nombre_tabla="proveedor"}break;
    case 14:{nombre_tabla="reserva"}break;
    case 15:{nombre_tabla="servicio"}break;
    case 16:{nombre_tabla="usa"}break;
}

console.clear();

async function conectarYConsultar(nom_tabla, _user, _pwd) {

    try {// Intenta compilar el código siguiente

        // Conectar de forma asíncrona con mysql
        const connection = await mysql.createConnection({
            host: 'localhost', // Servidor local (127.0.0.1)
            user: _user, // Nombre del usuario del servidor mysql
            password: _pwd, // Contraseña del usuario
            database: 'hotel', // Base de datos elegida para la conexión
        });


        // Mensaje para comprobar que el programa entró en la base de datos
        console.log('** Conexión a MySQL establecida correctamente **');
        console.log('                                                '); //Separación en terminal


        // Consulta de mysql:
        // En este caso seleccionadas las filas y los
        // tipos de cada atributo de la tabla elegida
        const [rows, fields] = await connection.execute(`select * from ${nom_tabla} `);

        console.log(`Tipos de cada atributo de la tabla ${nom_tabla}:`);
        console.log(fields);
        
        console.log('                                                '); //Separación en terminal

        console.log(`Elementos de la tabla ${nom_tabla}:`)
        console.log(rows)

        // Cierre de la conexión con mysql
        await connection.end();

    } catch (error) {// Si el try{} dió algún problema, el programa viene hasta catch{} e indica el error
        console.error('Error al conectar a MySQL:', error);

    } finally{// Mensaje final que aparece en cada intento de conexión con mysql
        console.log('** Intendo de conexión realizado **');
    }
}

const conectar = () =>{
    // Devuelve una nueva promesa
    return new Promise((resolve)=>{
        console.log('Contectando base de datos...')

        // A los 2 segundos, compila la función con resolve
        setTimeout(()=>{
            console.clear();
            resolve(conectarYConsultar(nombre_tabla, usuario, password));
        },2000)
    })
}

conectar()

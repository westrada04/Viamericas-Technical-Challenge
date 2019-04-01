This project was bootstrapped with NETcore

### `installation`

open project in visual studio 2017.

### `used components`

Microsoft.EntityFrameworkCore v2.0.1
Microsoft.EntityFrameworkCore.SqlServer v2.0.1
Microsoft.EntityFrameworkCore.Tools v2.0.1

### `description`

proyecto backend de agencias realizado en NETcore.

para consumir las apis la url es: https://localhost:44354/agency
se implementa los metodos Get,Post,Put,Delete para la realizacion de un crud de agencias.

se recomienda usar Postman o en su defecto SoapUi para el consumo de las Apis

se realiza proceso de migracion desde la app, este se encuentra en el proyecto Persistence carpeta Migrations
la base de datos a crear tendra el nombre AgencyDb, este es parametrizable en el archivo appsettings.json

en ambiente local se creo la base de datos en SqlServer, se recomienda tener instalado y/o en su defecto leer la documentacion de migraciones
con EntityFramework.
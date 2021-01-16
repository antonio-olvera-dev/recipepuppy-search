# RecipePuppySearch
## Versiones
- Angular CLI: 11.0.7
- Node: 12.19.0
- npm: '6.14.10',
- OS: win32 x64
- Visual Code 1.52.1
## Instrucciones 📖
 
### Instalación 🔨
```sh
$ git clone https://github.com/antonioolvera1995/recipepuppy-search.git
$ cd recipepuppy-search
$ npm install -d
$ cd api
$ npm install -d
$ cd ..
```

### Iniciar 🚀

```sh
$ npm run api
$ ng serve
```
- Finalmente abrir cualquier navegador en http://localhost:4200
## Otros
### Back
- El Back corre en el puerto 3000
- Ruta: http://localhost:3000
### Front
- El Front corre en el puerto 4200
- Ruta: http://localhost:4200
- 
##### Problemas 💥
No se ha podido realizar ninguna petición, ya sea con la librería integrada de Angular HTTP, instalando el paquete de Axios, o utilizando el Fetch. 
El problema era debido a las Cors (https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS). 
Para solucionarlo se intentó hacer la petición mediante la configuración del proxy e introduciendo headers( "Access-Control-Allow-Origin", "*", etc). 
Finalmente, la única solución que encontré fue crear un pequeño Back con Node.js y Express.js y hacer la petición desde Angular a Node.js, y que este a su vez hiciera la petición a la API.

```
Con Postman funciona sin ningún problema pero al hacer la petición con Angular salta el error.
```
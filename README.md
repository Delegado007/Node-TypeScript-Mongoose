# API con Node.js, TypeScript y Mongoose

Un repositorio que comprueba el uso, buenas prácticas y manejo de tecnologías asociadas a Node.js

## Curso realizado siguiendo la guía de OpenBootcamp

Enlace al [Curso MERN](https://campus.open-bootcamp.com/cursos/62).

## Instalación de dependencias

Después de haber clonado el código, ejecutamos la instalación de dependencias con:

```bash
  npm i
```

## Scripts del package.json

Copila el código TypeScript y genera un output en la carpeta ./dist con el target ES que tengamos configurado en nuestro tsconfig.json

```bash
  npm run build
```

Ejecuta el index.ts situado en la carpeta ./src con Node

```bash
  npm run start
```

TypeScript escucha cualquier cambio que hagamos y copila el código a medidas que vayamos guardando.

```bash
  npm run watch
```

Ejecuta el index.ts situado en ./src con [nodemon](https://nodemon.io/)

```bash
  npm run dev
```

Ejecuta los test que tengamos hechos con jest

```bash
  npm run test
```

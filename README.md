<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License


## crear recurso en nest   
## crea controlador, servicio, dto, actualiza app.module.ts
```
  nest g res pokemon --no-spec
```

## DOCKER COMPOSSE EN DESARROLLO

1.- CLONAR PROYECTO
2.- EJECUTAR
```
yarn install
```
3.- Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4.- Levantar base de datos, comando que leera archivo docker-compose.yaml
```
docker-compose up -d
```

5.-Clonar el archivo ```.env.template``` y renombrar la copar a ```.env```

6.- llenaar las variables de entorno definidas en el ```.env```

7.- ejecutar la aaplicacion en dev:
```
yarn start:dev
```

8.- reconstruir la base de datos de con la semilla
```
http://localhost:3000/api/v2/seed
```

## STACK USADO
* MongoDB
* Nest

# Production Build
1. Crear archivo ```.env.prod```
2. Llenar variables entornos para produccion
3. Crear la nueva imagen 
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```


Nest is [MIT licensed](LICENSE).

# Admin service

## Description

Admin shopping service deveploped in nestjs.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## NOTES

In this project I'll consider DTO as an anti-pattern and try to work around it.

# TLDR

- [DTO Anti-pattern](https://stackoverflow.com/questions/1440952/why-are-data-transfer-objects-dtos-an-anti-pattern)
- [DTO work around](https://blog.devgenius.io/code-smell-40-dtos-ca35f5d8f7c9)


## TODO

- [x] Register, Authentication
- [x] CRUD Product
  - [x] CRUD with Type and Options
  - [x] Add, Update, Remove Product Options
  - [ ] Remove product type
- [x] CRUD Customer
- [x] CRUD Gift Card
- [x] CRUD Discount
- [x] CRUD Collection
  - [ ] Add product to collection
- [x] CRUD Customer
- [x] CRUD Collection
- [ ] CRUD Cart
- [ ] CRUD Order
- [ ] CRUD Shipment
- [ ] Elastic Search
  - [ ] Connect and Indexing
  - [ ] API

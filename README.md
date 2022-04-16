# Create Your Node App

Boilerplate project to create a Node.js backend app

This app contains:

* Express as the http server
* .ENV as the enviroment variables for configurations
* Jest to build tests
* Yarn as the package manager
* Typescript as the programming language
* Pino to make logs

## Installation

You can run this application on a Docker container or in your local machine.

### Run on Docker

To run on Docker, you just need to have Docker installed on your machine. Just run the following 
command:

```bash
docker-compose up -d
```

### Run on a local Machine

To run on your machine, you must have Node and Yarn installed on your machine. After you have these two dependencies installed, just run:

```bash
yarn
yarn start:dev
```

You can run this with the Makefile too, make sure you have installed. And run the commands:

```bash
make run-dev
```
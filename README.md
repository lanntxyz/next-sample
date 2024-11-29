# Sample Applicaiton use Next.js

## Overview

This project is a web application that provides a user interface for the GLB Intelligence application. It is built using Next.js and AWS Amplify.

## Features

- Next.js
- AWS Amplify
- Tailwind CSS
- TypeScript
- Redux Toolkit

## Development

- Node.js v21.5.0

### Setup

- Copy `.env.example` to `.env.local` and update the values as needed.

```bash
cp .env.example .env.local
```

- Install dependencies

```bash
npm install
```

### Running the application

- Start the development server

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run with Docker

**Note:** For the environment variables used on the application build, so if any changes are made to the `.env` file, the Docker image must be rebuilt.

- Copy `.env.example` to `.env` and update the values as needed.

```bash
cp .env.example .env
```

- Change directory to `docker` folder

```bash
cd docker
```

- Build the Docker image

```bash
docker-compose build
```

- Start the Docker container

```bash
docker-compose up
```

or run in detached mode

```bash
docker-compose up -d
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- The port can be changed in the `docker-compose.yml` file by updating the `ports` section.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-pages-router/#deploy-a-fullstack-app-to-aws).

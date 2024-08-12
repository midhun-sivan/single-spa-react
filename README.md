# single-spa-react
This repository contains a Single-SPA application with a root configuration and multiple micro frontends built in react. There is also a utility module with rxjs for inter-app communication. The application is containerized using Docker, and a Makefile is provided to simplify the build and run processes.

## Project Structure

- **base**: Contains the root configuration for the Single-SPA application.
- **app1**: A microfrontend application.
- **app2**: Another microfrontend application.
- **utility**: A utility module.
- **Dockerfile**: Docker configuration files for each microfrontend and the root config.
- **Makefile**: A Makefile to streamline building and running the Docker containers.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Make](https://www.gnu.org/software/make/)

## Build the Docker Images

Use the Makefile to build the Docker images for the root config and all micro frontends.
```
make build
```

This will build the Docker images defined in the Dockerfile for each part of the application.

## Serve the App
After the images are built, you can run the application using:

```
make serve
```
## Access the Application
Once the containers are running, you can access the Single-SPA application in your web browser at:
```
http://localhost:9000
```
## Stopping the Containers
To stop the running containers, you can use the following command:
```
make stop
```
## Restarting the Containers
To restart stopped containers use the start command instead of serve
```
make start
```

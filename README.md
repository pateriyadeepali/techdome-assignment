# TechDome Assignment

This project is a full-stack application designed to showcase a robust and scalable architecture using modern technologies.

## Application Architecture

The application consists of three main components:

1. **Backend**: A Node.js Express application responsible for handling API requests and database interactions.
2. **Frontend**: A React.js application, served using Nginx, offering a modern and user-friendly interface.
3. **Database**: MongoDB, deployed as a container to ensure reliable data persistence.

---

## Deployment Strategy

The application supports two deployment approaches:

### 1. Using Docker Compose

- All services (frontend, backend, and database) are defined in a `docker-compose.yml` file.
- Each service is deployed as a separate container with proper networking.

### 2. Using Kubernetes

- Each component is deployed as a Kubernetes deployment and exposed through services:
  - **MongoDB**: Uses a `ClusterIP` service for internal communication.
  - **Frontend & Backend**: Exposed via `NodePort` services for external access.

---

## Access the Application

- **Frontend**: [http://13.201.131.89:3000](http://13.201.131.89:3000)
- **Backend**: [http://13.201.131.89:5000](http://13.201.131.89:5000)

---

## Demonstration

- [Project Demonstration Drive Link](https://drive.google.com/drive/folders/1oyFkIMFNbT339UcgAPs1tWQYJqLFah8K?usp=drive_link)

---

## Project Code Repository

- [GitHub Repository](https://github.com/pateriyadeepali/techdome-assignment.git)

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** and **npm** for the backend.
- **Docker** and **Docker Compose** for containerized deployment.
- **Kubernetes** (with `kubectl`) for Kubernetes-based deployment.

---

### Installation & Deployment

## Deployment Strategy

The application supports two deployment approaches:

### 1. Using Docker Compose

- All services (frontend, backend, and database) are defined in a `docker-compose.yml` file.
- Each service is deployed as a separate container with proper networking.

### 2. Using Kubernetes

To deploy the application using Kubernetes, run the following commands:

```bash
# Deploy the backend
kubectl apply -f kubernetes/backend-deployment.yml

# Deploy the frontend
kubectl apply -f kubernetes/frontend-deployment.yml

# Deploy the database
kubectl apply -f kubernetes/mongodb-deployment.yml

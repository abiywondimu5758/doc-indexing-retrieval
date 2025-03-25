# Project Setup Guide

This guide will help you set up the backend and frontend for the project.

## Prerequisites

- Ensure you have the following installed on your system:
  - Python 3.10 or higher
  - Node.js 16 or higher
  - Docker and Docker Compose
  - Git

## Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend/django-backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the `django-backend` directory.
   - Add the necessary environment variables (refer to the `.env.example` file if available).

5. **Run database migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

The backend should now be running at `http://127.0.0.1:8000/`.

## Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

The frontend should now be running at `http://localhost:3000/`.

## Using Docker (Optional)

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Start the services using Docker Compose:**
   ```bash
   docker-compose up --build
   ```

This will set up both the backend and frontend services in Docker containers.

## Additional Notes

- Ensure the backend and frontend are running on their respective ports.
- If you encounter any issues, check the logs or refer to the documentation for troubleshooting.

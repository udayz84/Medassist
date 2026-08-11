# Medication Tracker App

A web application for tracking medications and supplements. It allows users to register an account, log in, and manage their medication schedule. Users can record the medication name, total bottle quantity, dosage, and when they need to take their medication.

## Features
- **User Authentication**: Secure sign-up, login, and logout capabilities.
- **Medication Management**: Add new medications or supplements with details such as total quantity, dosage, frequency, and personal notes.
- **Reminders**: Schedule specific times and set reminders for taking medications.
- **Edit Records**: Update details of existing medications.
- **Responsive Interface**: A modern interface for simple management of daily medication schedules.

## Tech Stack
- **Frontend**: React.js, Reactstrap, Ant Design, React Router DOM
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Security**: bcryptjs (Password Hashing), jsonwebtoken (JWT Authentication), Express-session

## Prerequisites
- Node.js (v12+ recommended)
- MongoDB (running locally or a remote MongoDB URI)

## Installation & Setup

1. **Clone the repository** (if not already done)
   ```bash
   git clone https://github.com/udayz84/Medassist.git
   cd Medassist
   ```

2. **Backend Setup**
   ```bash
   cd med-backend
   npm install
   ```
   - Ensure MongoDB is running on `mongodb://localhost/medTracker` (the default connection in `db/db.js`).

3. **Frontend Setup**
   ```bash
   cd ../med-tracker-frontend
   npm install
   ```

## Environment Variables
Create a `.env` file in the `med-backend` directory (optional, but recommended for production):
- `PORT` (Default: 9000)
- `SESSION_SECRET` (Default: 'keyboard cat' - used for Express session security)

## Running Locally

1. **Start the backend server**
   Open a terminal in the `med-backend` directory and run:
   ```bash
   node server.js
   ```
   The backend will start on `http://localhost:9000` (or your configured `PORT`).

2. **Start the frontend React app**
   Open a new terminal in the `med-tracker-frontend` directory and run:
   ```bash
   npm start
   ```
   The frontend will automatically proxy API requests to `http://localhost:9000` and open in your default browser at `http://localhost:3000`.

## Running with Docker 🐳

The easiest way to run the entire stack is with Docker Compose. **No need to install Node.js or MongoDB locally.**

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed (included with Docker Desktop)

### Quick Start
```bash
# Clone the repo
git clone https://github.com/udayz84/Medassist.git
cd Medassist

# Build and start all services (MongoDB + Backend + Frontend)
docker-compose up --build
```

This starts 3 containers:
| Service    | Container Name         | URL                        |
|------------|------------------------|----------------------------|
| Frontend   | medtracker-frontend    | http://localhost:3000       |
| Backend    | medtracker-backend     | http://localhost:9000       |
| MongoDB    | medtracker-mongo       | mongodb://localhost:27017   |

### Stop the app
```bash
docker-compose down
```

### Stop and remove all data (including the database)
```bash
docker-compose down -v
```

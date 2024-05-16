# Restaurant Booking System

Full-stack application built with TypeScript, Express, React and Prisma as ORM to connect to PostgreSQL database.
Includes restaurant management and table booking features with an intuitive UI for checking availability and making reservations.

## Project Overview

### Backend API
The backend API handles restaurant and table data and manages booking requests. It checks table availability based on the date and the number of customers and processes reservation requests accordingly. The API uses JSON for input/output, which includes restaurant details, table availability, and booking statuses.

### Frontend Web Application
The frontend is a simple web application that allows users to view available tables at various restaurants, check availability for a specific date and number of customers, and make reservations. The interface is user-friendly, responsive, and has validations for input fields.

### Database Setup
The database schema is set up to store restaurant information, table details, and booking requests. The tables are related to each other using foreign keys to maintain data integrity. The database is seeded with sample data for testing purposes.

## Requirements
* Git
* Node.js
* PostgreSQL Database

## Before Start

1. Create a `.env` file in the root directory of the backend API.
2. Add the following environment variables to the `.env` file:

```bash
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database_name>"
PORT=3001
```

3. Create a `.env` file in the root directory of the frontend application.
4. Add the following environment variables to the `.env` file:

```bash
REACT_APP_API_URL="http://localhost:3001"
```

## Database Setup

1. Create a new PostgreSQL database.
2. Run the Prisma migration to create the tables in the database.
```bash
npx prisma migrate dev
```
3. Seed the database with sample data.
```bash
npx prisma db seed
```


## Setup Instructions

1. Clone this repository to your local machine.
```bash
git clone <repository_url>
```

2. Navigate to the cloned folder
```bash
cd restaurant-booking-system
```

3. Navigate to the frontend folder
```bash
cd frontend
```

4. Install the dependencies for the frontend application
```bash
npm install
```

5. Run the frontend application
```bash
npm run start
```

6. Open a new terminal window and navigate to the backend folder
```bash
cd backend
```

7. Install the dependencies for the backend API
```bash
npm install
```

8. Run the backend API
```bash
npm run start
```

9. Access the frontend application at http://localhost:3000. 	
Alternative ports are:
Backend API: http://localhost:3001


## Assumptions
* Each restaurant has a fixed number of tables with different seating capacities.
* Booking requests are processed based on real-time availability.
* The infinite scroll component is custom-built to demonstrate understanding of React and pagination.

## Next Steps (If Given More Time)
* Improved UI/UX: Enhance the user interface with animations, transitions, and better styling.
* Notifications: Add email notifications for booking confirmations and reminders.
* Restaurant Management: Allow restaurant owners to manage their tables, availability, and bookings.
* Error Handling: Implement error handling for API requests and user input validation.
* API Security: Secure the API with authentication, rate limiting, and input validation.
* Caching: Implement caching for frequently accessed data to improve performance and reduce database load.
* Scalability: Optimize the application for scalability and performance, especially the database queries.
* Testing: Increase test coverage for both frontend and backend, including unit tests and integration tests.
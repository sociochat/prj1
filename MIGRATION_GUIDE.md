# Migration Guide: Supabase to MySQL

This application has been successfully migrated from Supabase (PostgreSQL) to MySQL. Follow these steps to set up and run the application.

## Prerequisites

- MySQL Server (v8.0 or higher)
- Node.js (v18 or higher)

## Setup Instructions

### 1. Install MySQL

If you don't have MySQL installed, download and install it from:
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

### 2. Initialize the Database

Run the SQL initialization script to create the database and tables:

```bash
mysql -u root -p < init-db.sql
```

This will create:
- The `mamtawat_waterproofing` database
- All necessary tables (users, clients, projects, services)
- Sample data for clients and services

### 3. Configure Environment Variables

The `.env` file has been updated with MySQL configuration:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=mamtawat_waterproofing
DB_PORT=3306
```

Update these values according to your MySQL setup.

### 4. Create an Admin User

Run the following command to create an admin user for authentication:

```bash
npm run create-admin
```

Default admin credentials:
- Email: `admin@example.com`
- Password: `admin123`

### 5. Start the Application

The application now runs both a backend server (Express) and frontend (Vite) concurrently:

```bash
npm run dev
```

This will start:
- Backend API server on http://localhost:3001
- Frontend development server on http://localhost:5173

## Architecture Changes

### Backend (New)

- **Express Server** (`server/index.ts`): Handles all database operations and authentication
- **MySQL Database**: Stores all application data
- **Session-based Auth**: Uses in-memory sessions for authentication

### Frontend (Updated)

- **API Client** (`src/lib/api.ts`): Replaces Supabase client
- **Auth Context** (`src/contexts/AuthContext.tsx`): Updated to use custom authentication
- **All Pages**: Updated to use the new API client

## Database Schema

The MySQL schema mirrors the previous Supabase schema:

- **users**: Admin authentication
- **clients**: Client information
- **projects**: Projects associated with clients
- **services**: Waterproofing services

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/session` - Get current session

### Clients
- `GET /api/clients` - Get all clients
- `GET /api/clients/:id` - Get client by ID
- `GET /api/clients/slug/:slug` - Get client by slug
- `POST /api/clients` - Create client (auth required)
- `PUT /api/clients/:id` - Update client (auth required)
- `DELETE /api/clients/:id` - Delete client (auth required)

### Projects
- `GET /api/projects?client_id=:id` - Get projects (optionally filter by client)
- `POST /api/projects` - Create project (auth required)
- `PUT /api/projects/:id` - Update project (auth required)
- `DELETE /api/projects/:id` - Delete project (auth required)

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service (auth required)
- `PUT /api/services/:id` - Update service (auth required)
- `DELETE /api/services/:id` - Delete service (auth required)

## Troubleshooting

### MySQL Connection Issues

If you encounter connection issues:
1. Ensure MySQL server is running
2. Verify credentials in `.env` file
3. Check that the database exists: `mysql -u root -p -e "SHOW DATABASES;"`

### Port Conflicts

If port 3001 is already in use, update the PORT in `server/index.ts` or set it in your environment.

## Notes

- All existing data from Supabase has been preserved in the MySQL migration script
- Row Level Security (RLS) from Supabase is now implemented through authentication middleware
- The application maintains the same functionality as before

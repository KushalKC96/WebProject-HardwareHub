# HardwareHub 🔧

A full-stack web application for buying, renting hardware tools, and hiring skilled professionals. Built with React on the frontend and Node.js/Express on the backend, backed by a cloud-hosted PostgreSQL database on Neon.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Seeding the Database](#seeding-the-database)

---

## Overview

HardwareHub is a marketplace platform where:
- **Customers** can browse and add hardware tools to their cart, rent equipment by the day, and hire professionals.
- **Professionals** can manage their profile, availability, and incoming service bookings.
- **Admins** can manage hardware inventory, rentals, and bookings from a dedicated dashboard.

---

## Tech Stack

### Frontend (`/Client`)
| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router v7 | Client-side routing |
| Tailwind CSS v4 | Styling |
| Vite | Build tool and dev server |
| Lucide React | Icon library |

### Backend (`/Server`)
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| Prisma ORM v6 | Database access and schema management |
| PostgreSQL (Neon) | Cloud-hosted database |
| JSON Web Tokens | Authentication |
| bcryptjs | Password hashing |
| cookie-parser | HTTP cookie handling |
| dotenv | Environment variable management |
| nodemon | Development auto-reload |

---

## Project Structure

```
Project/
├── Client/                         # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.jsx  # Route guard for authenticated pages
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # Global auth state via React Context
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── ShopPage.jsx        # Browse and search hardware
│   │   │   ├── CartPage.jsx        # Shopping cart
│   │   │   ├── RentPage.jsx        # Hardware rental
│   │   │   ├── ProfessionalsPage.jsx
│   │   │   ├── DashboardPage.jsx   # Customer dashboard
│   │   │   ├── AdminDashboardPage.jsx
│   │   │   └── ProfessionalDashboardPage.jsx
│   │   └── utils/
│   │       └── api.js              # Centralized API utility
│   └── package.json
│
└── Server/                         # Express backend
    ├── server.js                   # App entry point
    ├── seed.js                     # Database seeding script
    ├── neon.ts                     # Neon project configuration
    ├── prisma/
    │   └── schema.prisma           # Database schema
    └── src/
        ├── config/
        │   └── prisma.js           # Prisma client singleton
        ├── controllers/
        │   ├── authController.js
        │   ├── hardwareController.js
        │   ├── rentalController.js
        │   ├── bookingController.js
        │   └── professionalController.js
        ├── middleware/
        │   └── authMiddleware.js   # JWT + session verification, role-based access
        └── routes/
            ├── authRoutes.js
            ├── hardwareRoutes.js
            ├── rentalRoutes.js
            ├── bookingRoutes.js
            └── professionalRoutes.js
```

---

## Features

### Authentication & Authorization
- User registration and login with JWT-based authentication.
- Passwords are securely hashed using bcryptjs.
- Role-based access control with three roles: `user`, `professional`, and `admin`.
- Protected routes on both the frontend (React) and backend (Express middleware).
- Password reset via token.

### Shop
- Browse 20+ hardware items across categories: Power Tools, Cleaning, Gardening, Construction, Painting.
- Filter by category, price range (slider), and search by name or description.
- Add items to a persistent cart stored in `localStorage`.
- Stock status shown on each product card (In Stock / Sold Out).

### Rentals
- Rent hardware items by specifying a start and end date.
- Daily rental price is shown per item.
- Rental history and status tracking (`active`, `returned`, etc.).

### Professionals
- Browse available professionals by skill.
- Book a professional for a service with a set number of hours.
- View booking history and status.

### Dashboards
- **Customer**: view personal rental and booking history.
- **Professional**: manage profile, availability, and incoming bookings.
- **Admin**: full management of hardware inventory, rentals, and bookings.

---

## Database Schema

The database is hosted on **Neon (PostgreSQL)** and managed via **Prisma ORM**. The schema includes the following models:

| Model | Description |
|---|---|
| `User` | Registered users with roles (user, admin, professional) |
| `Session` | User login sessions with expiry |
| `Hardware` | Tool inventory with pricing, stock, and rental rates |
| `Rental` | Records of hardware rented by users |
| `Professional` | Professional profiles linked to users |
| `Booking` | Service bookings between users and professionals |
| `Payment` | Payment records linked to rentals and bookings |

---

## API Endpoints

The server runs on `http://localhost:5000` by default.

### Health Check
```
GET  /api/health
```

### Authentication (`/api/auth`)
```
POST /api/auth/register         # Register a new user
POST /api/auth/login            # Login and receive JWT
POST /api/auth/logout           # Logout (requires auth)
GET  /api/auth/profile          # Get current user profile (requires auth)
POST /api/auth/change-password  # Change password (requires auth)
POST /api/auth/forgot-password  # Request a password reset email
POST /api/auth/reset-password/:token  # Reset password with token
```

### Hardware (`/api/hardware`)
```
GET    /api/hardware            # Get all hardware (supports ?category=, ?search=, ?minPrice=, ?maxPrice=)
GET    /api/hardware/:id        # Get a single hardware item
POST   /api/hardware            # Create hardware item (admin only)
PUT    /api/hardware/:id        # Update hardware item (admin only)
DELETE /api/hardware/:id        # Delete hardware item (admin only)
```

### Rentals (`/api/rentals`)
```
GET    /api/rentals             # Get all rentals (admin) or user's rentals
POST   /api/rentals             # Create a new rental
PUT    /api/rentals/:id         # Update rental status
DELETE /api/rentals/:id         # Delete a rental
```

### Professionals (`/api/professionals`)
```
GET    /api/professionals       # Get all available professionals
GET    /api/professionals/:id   # Get a single professional profile
POST   /api/professionals       # Create a professional profile
PUT    /api/professionals/:id   # Update profile
```

### Bookings (`/api/bookings`)
```
GET    /api/bookings            # Get all bookings (admin) or user's bookings
POST   /api/bookings            # Create a new booking
PUT    /api/bookings/:id        # Update booking status
DELETE /api/bookings/:id        # Cancel a booking
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm
- A [Neon](https://neon.tech) account (free tier works)

### 1. Clone the repository
```bash
git clone https://github.com/KushalKC96/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

**Backend:**
```bash
cd Server
npm install
```

**Frontend:**
```bash
cd Client
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `Server/` directory (see [Environment Variables](#environment-variables) below).

### 4. Push the database schema
```bash
cd Server
npx prisma db push
```

### 5. Seed the database
```bash
cd Server
node seed.js
```

### 6. Start the servers

**Backend** (from `Server/`):
```bash
npm run dev
```

**Frontend** (from `Client/`):
```bash
npm run dev
```

The app will be available at `http://localhost:5173` and the API at `http://localhost:5000`.

---

## Environment Variables

Create a file at `Server/.env` with the following variables:

```env
# Database — get this from your Neon project dashboard
DATABASE_URL="postgresql://user:password@your-neon-host/dbname?sslmode=require"

# JWT secret — use a long, random string
JWT_SECRET="your_jwt_secret_here"

# Server
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL="http://localhost:5173"
```

> **Never commit your `.env` file to version control.** It is already listed in `.gitignore`.

---

## Database Setup

This project uses **Neon**, a serverless PostgreSQL platform, as its database.

- The schema is defined in `Server/prisma/schema.prisma`.
- Migrations are applied using `npx prisma db push`.
- To view and manage data visually, run Prisma Studio:

```bash
cd Server
npx prisma studio
# or
npm run studio
```

---

## Seeding the Database

The `Server/seed.js` script populates the database with 20 realistic hardware items across 5 categories.

```bash
cd Server
node seed.js
```

> **Warning:** Running the seed script will **delete all existing hardware items** and replace them with the seeded data.

### Seeded Hardware Categories
| Category | Examples |
|---|---|
| Power Tools | Cordless Drill, Circular Saw, Angle Grinder, Air Compressor, Generator |
| Cleaning | Pressure Washer, Wet/Dry Vacuum |
| Gardening | Lawn Mower, Leaf Blower, Hedge Trimmer, Wheelbarrow, Chainsaw |
| Construction | Ladder, Rotary Hammer, Tile Cutter, Demolition Hammer |
| Painting | Paint Sprayer, Heat Gun |

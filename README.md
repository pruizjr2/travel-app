
# 🌍 Wanderlust Travel App

A full-stack travel web application with role-based dashboards for Users, Admins, and Advertisers.

---

## 🛠️ Setup Instructions

### 1. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env` file inside the `/server` folder with the following contents:

```env
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

> ⚠️ Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string. Use any string for `SESSION_SECRET`.

### 3. Start the Server
From the root directory:

```bash
node server/server.js
```

Your app will be available at:

```
http://localhost:5000
```

### 4. Using the App

- Go to `http://localhost:5000` in your browser.
- Register a new account as either:
  - Regular user
  - Admin
  - Advertiser
- After login, you'll be redirected to your appropriate dashboard:
  - `/dashboard.html` — User Dashboard
  - `/admin-dashboard.html` — Admin Dashboard
  - `/advertiser-dashboard.html` — Advertiser Dashboard

### 5. Features by Role

#### 👤 User
- Save favorite places
- Write reviews
- View and update profile

#### 🛠 Admin
- View all users
- Delete inappropriate reviews
- Promote users to advertisers

#### 📣 Advertiser
- Submit new destinations/ads
- Manage your ads (delete)
- See all ad submissions

---

## 👥 Team
Pablo, Sabina, Ryan

## 📁 Folder Structure

- `client/` — HTML, CSS, and JS frontend files
- `server/` — Express.js backend
- `routes/` — API route logic (auth, reviews, admin, etc.)
- `models/` — Mongoose schemas


responsibilities:

Ryan: city Page, home page

Pablo: dashboard, login, register, reviews, 

Sabina: explore, place details

Motivation: U of A Study Abroad Page - Sabina
-Our inspiration came from the University of Arizona Study Abroad page, which helps students explore academic programs around the world. While that platform is tailored to educational opportunities, our project—TravelMate—aims to serve a broader audience of travelers, including solo adventurers, couples, families, and friends planning trips for leisure.
Planning a trip is exciting but often overwhelming, requiring time-consuming research from various sources. We wanted to simplify this process by building a platform that offers destination ideas, curated itineraries, and practical details—all tailored to the traveler’s profile. With TravelMate, users can make informed travel decisions faster and more confidently, enjoying the planning experience as much as the trip itself.



Technical Details: MongoDB, Mongoose, File Structure - Pablo


Functionalities: Workflows, key features. - Sabina

-Workflows:
User Registration and Login

Users can register and log in using a secure username and password (stored with hashing).

Session-based authentication maintains user login across pages.

Place Recommendations with Filters

Users can explore travel destinations based on:

Traveler type (Solo, Couple, Family, Friends)

City (e.g., New York, Tokyo, Paris)

Place type (e.g., Nature, Amusement, Historical)

Each place includes a description, opening hours, estimated cost, and images.

Users can add/remove places to/from a personal travel plan list.

Curated Itineraries

Browse ready-made itineraries for different cities.

Each includes a recommended schedule with sights, restaurants, and transport options.

Interactive Review System

Logged-in users can read reviews left by others and post their own reviews after visiting places.

Reviews provide additional insights and help others make informed travel decisions.

- Key Features:
🔐 Secure Authentication: Hashed passwords and session-based login/logout system.

🔍 Advanced Filtering: Search by traveler type, city, and place category (nature, amusement, etc.).

📌 Custom Travel List: Add/remove destinations to build your own trip plan.

🗂️ Pre-Made Itineraries: City-specific plans for easy travel inspiration.

✍️ Community Reviews: Post and browse travel reviews for different destinations.

🌐 Frontend: Built using HTML, CSS, and JavaScript (no React).

⚙️ Backend: Node.js + Express server with MongoDB + Mongoose database integration.


Modules Overview: User, Admin, Advertiser - Pablo

Style: Design details, etc. -Ross


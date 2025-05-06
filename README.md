
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

For the layout of our app, we have a header that is colored blue with white text centered with the name of the page you are on. Underneath the header, we have the nav bar which is colored grey listing the other pages. The Cities, Dashboard, Home, Saved Places, Login, Register, Reviews, Explore and logout pages. The typical background for each page is white with the exception of the home page which has a video playing in the background. This was accomplished by creating a video-background, which set its position, and video-background iframe, which set its width and height. 
For the city page, we have a list of cities that each have a corresponding image. When you click on a cities image, a brief description of the city will appear at the bottom of the page. This was accomplished by a class called “city-list” and div. Finally at the bottom we have the footer which is also grey.

s using full-stack development. The project also enabled us to build role-based interfaces for general users, advertisers, and administrators, providing real-world web functionality and user management challenges.

## Modules Overview

### 1. User Module

* **Functionality**: Register/login, view/save favorite destinations, write/view reviews, and manage personal profile.
* **Pages**: `dashboard.html`, `place_details.html`, `reviews.html`, `profile.html`
* **Interactions**: Uses AJAX to fetch and update reviews and saved places stored in MongoDB. Session-based login to access the dashboard and profile pages.

### 2. Advertiser Module

* **Functionality**: Submit new destinations, manage posted ads, and potentially view analytics/respond to reviews.
* **Pages**: `advertiser-dashboard.html`
* **Interactions**: Advertisers submit destinations using a form, stored in MongoDB via the `/api/ads` route. AJAX is used for ad management.

### 3. Admin Module

* **Functionality**: View all users, delete inappropriate reviews, and promote users to advertisers.
* **Pages**: `admin-dashboard.html`
* **Interactions**: Admin functions fetch users and reviews using AJAX and allow manipulation via protected endpoints under `/api/admin`.

## Functionalities

* **Role-Based Dashboards**: The `/dashboard` endpoint checks the session user’s role and redirects them to the appropriate dashboard (user, admin, or advertiser).
* **User Account Management**: Users can register with role selection and log in with session-based tracking.
* **Review System**: Users submit reviews tied to destinations. Admins can moderate and delete inappropriate reviews.
* **Saved Places**: Users can save and remove destinations from their list. Data is stored and retrieved through MongoDB.
* **Advertiser Ads**: Advertisers post and delete promotional destinations via form input and interactive lists.
* **Navigation**: Navbar dynamically adjusts dashboard links based on user role using client-side JavaScript.

## Technical Details

### Technologies Used

* **MongoDB & Mongoose**: MongoDB is used as the database to store users, reviews, and ads. Mongoose is used as the ODM to define schemas for each collection (`User`, `Review`, `Ad`).
* **JavaScript (Express & AJAX)**:

  * **Express.js**: The backend uses Express to serve static HTML files and expose RESTful API routes.
  * **AJAX (Fetch API)**: Frontend pages use JavaScript fetch requests for form submission, dynamic data loading (e.g., reviews, saved places, ads), and admin actions.
* **Node.js**: The application is hosted on a Node.js server.
* **Session Handling**: Express-session is used to track user sessions post-login and restrict access to certain routes.
* **File Structure**:

```
project-root/
│
├── client/                # Frontend HTML, CSS, and JS
│   ├── css/styles.css
│   ├── js/setDashboardLink.js
│   ├── *.html (all user-facing pages)
│
├── server/                # Backend Express server and routes
│   ├── routes/
│   │   ├── auth.js
│   │   ├── reviews.js
│   │   ├── admin.js
│   │   └── ads.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Review.js
│   │   └── Ad.js
│   └── server.js
│
├── .env                   # Environment variables
└── package.json
```

### Session Management

* Sessions are handled server-side using `express-session`. When users log in, their role and ID are stored in the session and used to protect and route access to user/admin/advertiser dashboards.

### Database Structure (MongoDB Collections)

* **Users**: Stores username, email, password hash, role, saved places, and associated reviews.
* **Reviews**: Stores `placeName`, `rating`, `comment`, `username`, and `createdAt` timestamp.
* **Ads**: Stores advertiser-submitted destinations with a title, description, and optional image URL.

This architecture supports role-based access, dynamic content loading, and modular expansion of features.



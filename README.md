
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

Technical Details: MongoDB, Mongoose, File Structure - Pablo

Functionalities: Workflows, key features. - Sabina

Modules Overview: User, Admin, Advertiser - Pablo

Style: Design details, etc. -Ross


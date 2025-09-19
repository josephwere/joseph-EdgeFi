# EdgeFi - Wi-Fi Rental Platform

## Project Overview
EdgeFi is a modern Wi-Fi rental platform with hourly, daily, weekly, and monthly packages. It includes:

- *User Management*: Superadmin and users, registration/login.
- *Payment System*: M-Pesa integration (mock STK push for testing).
- *Voucher System*: Redeemable vouchers for packages.
- *Analytics Dashboard*: Track users, revenue, top packages.
- *NeuroEdge AI*: AI-powered insights and recommendations.
- *Frontend*: React + Tailwind CSS.
- *Backend*: Express + MySQL.

---

## Features

- Superadmin & Sample Users  
- Voucher system  
- Hourly, Daily, Weekly, Monthly Packages  
- NeuroEdge AI insights & recommendations  
- Analytics dashboard  
- Buy Now button with phone input  
- Frontend tabs: Horizontal tab bar (Hourly, Daily, Weekly, Monthly)

---

## Packages

*Hourly:*
- 2 hrs – 10 KES
- 6 hrs – 20 KES
- 12 hrs – 30 KES
- 24 hrs – 50 KES

*Daily:*
- 2 Days – 80 KES
- 3 Days – 100 KES
- 4 Days – 150 KES
- 7 Days (2 users) – 250 KES
- 14 Days (2 users) – 350 KES

*Monthly:*
- 30 Days (1 user) – 700 KES
- 30 Days (3 users) – 1000 KES

---

## Superadmin & Sample Users

| Role        | Phone/Email               | Password      |
|------------ |-------------------------- |--------------|
| Superadmin  | josephogwe8@gmail.com     | Josboy@254   |
| Sample User | +254700111222             | test123      |

---

## Sample Voucher

- Code: TESTVOUCHER2025  
- Linked to Sample User  
- Valid for 7-day plan  
- Redeemable once  

---

## Tech Stack

- Frontend: React, Tailwind CSS  
- Backend: Express.js, Node.js  
- Database: MySQL  
- AI: NeuroEdge AI  

---

## Environment Variables

### Frontend (FRONTEND/.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Backend (BACKEND/.env)
```env
PORT=3000
MYSQL_HOST=127.0.0.1
MYSQL_USER=edgefi
MYSQL_PASS=edgefi_pass
MYSQL_DB=wifirental
JWT_SECRET=change_this_secret
```

---

## Setup & Deployment

1. **Database**  
Run `DATABASE/seed.sql` in MySQL to create schema & sample data.

2. **Backend**  
Navigate to `BACKEND/`  
Install dependencies: `npm install`  
Run server: `npm start` (or deploy to Railway/Heroku/Vercel)

3. **Frontend**  
Navigate to `FRONTEND/`  
Install dependencies: `npm install`  
Run app: `npm run dev` (or deploy to Vercel)

4. **Access**  
Frontend: http://localhost:3001 (default Next.js port)  
Backend API: http://localhost:3000/api/...  

---

## Notes

- Ensure `.env` files have correct credentials and ports.  
- Update `NEXT_PUBLIC_API_URL` in frontend when deploying to production.  
- NeuroEdge AI & Analytics dashboard features are integrated in frontend.  
- "Buy Now" triggers backend payment API with phone input and package selection.  

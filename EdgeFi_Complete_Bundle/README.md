# EdgeFi - Wi-Fi Rental Platform

## Project Overview
EdgeFi is a modern Wi-Fi rental platform with hourly, daily, weekly, and monthly packages. It includes:

- **User Management**: Superadmin and users, registration/login.
- **Payment System**: M-Pesa integration (mock STK push for testing).
- **Voucher System**: Redeemable vouchers for packages.
- **Analytics Dashboard**: Track users, revenue, top packages.
- **NeuroEdge AI**: AI-powered insights and recommendations.
- **Frontend**: React + Tailwind CSS.
- **Backend**: Express + MySQL.

## Setup
1. Set up the backend `.env` with your MySQL credentials.
2. Set up the frontend `.env.local` with `NEXT_PUBLIC_API_URL`.
3. Run `DATABASE/seed.sql` in MySQL to create schema & sample data.
4. Install dependencies and run backend (`npm install && npm start`) and frontend (`npm install && npm run dev`).

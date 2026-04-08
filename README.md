# 🛒 ShopCo - E-Commerce Web Application

## 📌 Project Description

ShopCo is a modern e-commerce web application where users can browse products, add items to cart, manage quantities, and view total price dynamically. The application provides a smooth and responsive user experience.

---

## 🚀 Tech Stack

### Frontend:

* React.js (Vite)
* Bootstrap
* React Router
* Context API

### Backend:

* Node.js
* Express.js
* MongoDB

---

## ⚙️ Prerequisites

Make sure you have the following installed:

* Node.js (v16 or above)
* npm
* MongoDB (Local or MongoDB Atlas)

---

## 📥 Installation Steps

### 1. Clone the repository

```bash
git clone https://github.com/your-username/shopco.git
cd shopco
```

---

### 2. Install Dependencies

#### Frontend:

```bash
cd frontend
npm install
```

#### Backend:

```bash
cd backend
npm install
```

---

## 🌱 Seed Data (IMPORTANT)

Products are loaded using a seed file.

👉 Run this command to insert products into database:

```bash
node seedProduct.js
```

✔ This will populate products in MongoDB

---

## ▶️ How to Run

### Start Backend:

```bash
cd backend
npm start
```

### Start Frontend:

```bash
cd frontend
npm start
```

---

## ✨ Features

### Core Features:

* Product listing from database
* Add to cart
* Increase / decrease quantity
* Remove items from cart
* Total price calculation
* Persistent cart using localStorage

### Bonus Features:

* Responsive UI (mobile + desktop)
* Clean component structure

---
## 📸 Screenshots

### 🖥 Desktop View

![Desktop](./screenshots/home.png)
![Desktop-Cart](./screenshots/cart.png)
### 📱 Mobile View

![Mobile Home](./screenshots/mobile-home.png)
![Mobile Cart](./screenshots/mobile-cart.png)

---

## 🔗 API Endpoints

### Products

* GET /api/products → Get all products

### Cart (Frontend managed)

* Add to cart
* Remove from cart
* Update quantity

---

## 📊 Evaluation Highlights

* Proper state management using Context API
* Clean UI and responsive design
* Dynamic cart functionality
* Organized code structure

---

## 📌 Notes

* Project uses Vite, so both commands work:

```bash
npm start
npm run dev
```

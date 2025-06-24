# 📦 Digital Products Online Store

A full-stack web application for selling and managing **digital products** such as e-books, audio books, digital art, and software.

The application supports different **user roles** (guest, authenticated user, admin), handles **digital product downloads**, allows **search, filtering, sorting, pagination**, and provides **admin functionalities** for managing users, orders, and products.

---

## 🛠 Tech Stack

### Backend
- **Laravel 10**
- **MySQL**
- **Laravel Sanctum** for API authentication
- RESTful API following MVC pattern

### Frontend
- **React.js**
- **React Router DOM**
- **Axios**
- **Bootstrap** + custom CSS
- **Lucide React** (icons)

---

## 👤 User Roles & Functionalities

| Role          | Access Level |
|---------------|--------------|
| Guest         | Browse products, limited product view, register/login |
| Authenticated | Full access to product details, "Buy Now", view & download purchases |
| Admin         | Add/edit/delete products, view all users' orders, manage system |

---

## ✨ Key Features

- 🔐 **Authentication**: Register, Login, Logout, Session management
- 🛍️ **Product Management**: Filter, sort, search, and paginate products
- 📥 **Buy Now Flow**: Instantly buy and access digital products
- 🧾 **My Purchases**: List of past purchases with download links and timestamps
- 📂 **File Upload**: Admins can upload product files (PDFs, audio, etc.)
- 🧠 **Role-Based Access Control**: Admin sees extended interface with management options
- 📊 **Export Data**: Export orders or product data to CSV
- 🌍 **External APIs**: Currency conversion, product info (planned integration)
- 🔎 **Advanced Search**: By name, price range, category
- 📄 **PDF/CSV Export**: For orders, reports (in progress)
- 🧠 **Security**: Password encryption, CSRF protection, XSS prevention

---

## 🧱 Database & Architecture

- 5+ migrations: users, products, categories, orders, pivot table (order_product), etc.
- 4+ related tables with Eloquent relationships (`hasMany`, `belongsToMany`)
- Uses Laravel's Resource Collections & API Resource Wrappers
- Secure API with Bearer token authentication

---

## 🚀 Getting Started

### Backend (Laravel)

cd backend
composer install
cp .env.example .env
# Set DB config in .env
php artisan key:generate
php artisan migrate --seed
php artisan serve

### Frontend (React)

cd frontend
npm install
npm start


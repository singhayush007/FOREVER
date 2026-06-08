# 🛍️ Forever — Full Stack E-Commerce Application

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/singhayush007/forever-full-stack?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/singhayush007/forever-full-stack?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/singhayush007/forever-full-stack?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Made with React](https://img.shields.io/badge/Stack-React_18_+_Node.js_+_MongoDB-61DAFB?style=flat-square&logo=react&logoColor=white)

**A production-ready full-stack e-commerce application with a customer storefront, admin dashboard, JWT authentication, Cloudinary image uploads, and Razorpay payments.**

[🐛 Report Bug](https://github.com/singhayush007/forever-full-stack/issues) · [✨ Request Feature](https://github.com/singhayush007/forever-full-stack/issues)

</div>

---

## 📸 Screenshot

<div align="center">
  <img src="forever.png" alt="Forever E-Commerce Screenshot" width="100%" style="border-radius: 12px; border: 1px solid #e5e7eb;" />
</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#️-folder-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Running the App](#️-running-the-app)
- [API Endpoints](#-api-endpoints)
- [Deployment](#️-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧠 About

**Forever** is a complete full-stack e-commerce platform built from scratch. It includes a customer-facing storefront, a fully functional admin panel for managing products and orders, secure JWT-based authentication, Cloudinary-powered image uploads, and Razorpay payment integration. All data is persisted in MongoDB Atlas.

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure register/login with token-based auth
- 👤 **User Profile** — View account details and order history
- 🛒 **Shopping Cart** — Add, update, and remove items with persistent cart (synced to DB)
- 📦 **Order Management** — Place orders via COD or Razorpay; track order status
- 💳 **Razorpay Payments** — Integrated test-mode payment gateway
- 🖼️ **Cloudinary Uploads** — Admin can upload product images directly to Cloudinary
- 🗂️ **Product Filtering** — Filter by category, subcategory, and sort by price/relevance
- 🔍 **Search** — Real-time product search across the collection
- 🧑‍💼 **Admin Panel** — Separate dashboard to add/list products and manage orders
- 📱 **Responsive Design** — Fully mobile-friendly with Tailwind CSS
- 🌐 **SEO Friendly** — Semantic HTML, meaningful alt texts, proper meta structure

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend | React 18 + Vite 5 |
| Admin Panel | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 |
| Routing | React Router DOM v6 |
| Backend | Node.js + Express 4 |
| Database | MongoDB + Mongoose |
| Authentication | JWT + Bcrypt |
| Image Uploads | Cloudinary + Multer |
| Payments | Razorpay |
| HTTP Client | Axios |
| Notifications | React Toastify |
| Dev Server | Nodemon |

---

## 🗂️ Folder Structure

```
forever-full-stack/
│
├── frontend/                        # Customer-facing storefront (React + Vite)
│   ├── src/
│   │   ├── assets/                  # Images, icons, static assets
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Top navigation with search, cart, profile
│   │   │   ├── Hero.jsx             # Homepage hero banner
│   │   │   ├── ProductItem.jsx      # Reusable product card
│   │   │   ├── LatestCollection.jsx # Latest products section
│   │   │   ├── BestSeller.jsx       # Best sellers section
│   │   │   ├── OurPolicy.jsx        # Exchange / return / support section
│   │   │   ├── NewsletterBox.jsx    # Email subscription box
│   │   │   ├── CartTotal.jsx        # Cart summary with totals
│   │   │   ├── SearchBar.jsx        # Search overlay
│   │   │   ├── RelatedProducts.jsx  # Related products on product page
│   │   │   ├── Title.jsx            # Section title component
│   │   │   └── Footer.jsx           # Site footer
│   │   ├── context/
│   │   │   └── ShopContext.jsx      # Global state (cart, products, auth, search)
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Homepage
│   │   │   ├── Collection.jsx       # Product listing with filters
│   │   │   ├── Product.jsx          # Single product detail page
│   │   │   ├── Cart.jsx             # Shopping cart page
│   │   │   ├── PlaceOrder.jsx       # Checkout & payment selection
│   │   │   ├── Orders.jsx           # User order history
│   │   │   ├── Profile.jsx          # User profile page
│   │   │   ├── Login.jsx            # Login / Register page
│   │   │   ├── About.jsx            # About page
│   │   │   └── Contact.jsx          # Contact page
│   │   └── App.jsx                  # Root component with routes
│   └── .env                         # Frontend environment variables
│
├── admin/                           # Admin dashboard (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx           # Admin navbar with logout
│   │   │   ├── Sidebar.jsx          # Navigation sidebar
│   │   │   └── Login.jsx            # Admin login page
│   │   ├── pages/
│   │   │   ├── Add.jsx              # Add new product form
│   │   │   ├── List.jsx             # All products list with delete
│   │   │   └── Orders.jsx           # All orders with status management
│   │   └── App.jsx                  # Admin root with protected routes
│   └── .env                         # Admin environment variables
│
├── backend/                         # REST API (Node.js + Express)
│   ├── config/
│   │   ├── mongodb.js               # MongoDB connection
│   │   └── cloudinary.js            # Cloudinary configuration
│   ├── controllers/
│   │   ├── userController.js        # Auth + profile logic
│   │   ├── productController.js     # Product CRUD logic
│   │   ├── cartController.js        # Cart add/update/get logic
│   │   └── orderController.js       # COD + Razorpay order logic
│   ├── middleware/
│   │   ├── auth.js                  # JWT user auth middleware
│   │   ├── adminAuth.js             # Admin token middleware
│   │   └── multer.js                # File upload middleware
│   ├── models/
│   │   ├── userModel.js             # User schema
│   │   ├── productModel.js          # Product schema
│   │   └── orderModel.js            # Order schema
│   ├── routes/
│   │   ├── userRoute.js             # /api/user/*
│   │   ├── productRoute.js          # /api/product/*
│   │   ├── cartRoute.js             # /api/cart/*
│   │   └── orderRoute.js            # /api/order/*
│   ├── server.js                    # Express app entry point
│   └── .env                         # Backend environment variables
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- A [Cloudinary](https://cloudinary.com) account (free tier)
- A [Razorpay](https://dashboard.razorpay.com) account (test mode)

### 1. Clone the repository

```bash
git clone https://github.com/singhayush007/forever-full-stack.git
cd forever-full-stack
```

### 2. Install dependencies

Run this in three separate terminals:

```bash
# Terminal 1 — Backend
cd backend && npm install

# Terminal 2 — Frontend
cd frontend && npm install

# Terminal 3 — Admin
cd admin && npm install
```

### 3. Configure environment variables

Fill in the `.env` files in each folder (see [Environment Variables](#-environment-variables) below).

### 4. Whitelist your IP on MongoDB Atlas

Go to **MongoDB Atlas → Network Access → Add IP Address** and add `0.0.0.0/0` for open access during development.

---

## 🔐 Environment Variables

### `backend/.env`

```env
# JWT
JWT_SECRET = "your_jwt_secret"

# Admin Credentials
ADMIN_EMAIL = "admin@example.com"
ADMIN_PASSWORD = "your_admin_password"

# MongoDB Atlas
MONGODB_URI = "mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/?appName=Cluster0"

# Cloudinary — https://cloudinary.com
CLOUDINARY_NAME = "your_cloud_name"
CLOUDINARY_API_KEY = "your_api_key"
CLOUDINARY_SECRET_KEY = "your_api_secret"

# Razorpay — https://dashboard.razorpay.com/app/keys
RAZORPAY_KEY_ID = "rzp_test_xxxxxxxxxxxx"
RAZORPAY_KEY_SECRET = "your_razorpay_secret"
```

### `frontend/.env`

```env
VITE_BACKEND_URL = "http://localhost:4000"
VITE_RAZORPAY_KEY_ID = "rzp_test_xxxxxxxxxxxx"
```

### `admin/.env`

```env
VITE_BACKEND_URL = "http://localhost:4000"
```

---

## ▶️ Running the App

Open **three terminals** and run each app separately:

```bash
# Terminal 1 — Backend API (port 4000)
cd backend
npm run server

# Terminal 2 — Frontend storefront (port 5173)
cd frontend
npm run dev

# Terminal 3 — Admin dashboard (port 5174)
cd admin
npm run dev
```

| App | URL |
|-----|-----|
| Frontend | http://localhost:5173 |
| Admin Panel | http://localhost:5174 |
| Backend API | http://localhost:4000 |

---

## 📡 API Endpoints

### User
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | Register new user |
| POST | `/api/user/login` | Login user |
| POST | `/api/user/admin` | Admin login |
| POST | `/api/user/profile` | Get logged-in user profile (auth required) |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/product/add` | Add product (admin) |
| DELETE | `/api/product/remove` | Delete product (admin) |
| POST | `/api/product/single` | Get single product |
| GET | `/api/product/list` | Get all products |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/cart/add` | Add item to cart |
| POST | `/api/cart/update` | Update item quantity |
| POST | `/api/cart/get` | Get user cart |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/order/place` | Place COD order |
| POST | `/api/order/razorpay` | Create Razorpay order |
| POST | `/api/order/verifyRazorpay` | Verify Razorpay payment |
| POST | `/api/order/userorders` | Get user's orders |
| POST | `/api/order/list` | Get all orders (admin) |
| POST | `/api/order/status` | Update order status (admin) |

---

## ☁️ Deployment

### Backend — Railway / Render

1. Push `backend/` to GitHub
2. Create a new service on [Railway](https://railway.app) or [Render](https://render.com)
3. Set all environment variables from `backend/.env`
4. Deploy — note the public URL (e.g. `https://forever-api.railway.app`)

### Frontend & Admin — Vercel

1. Push `frontend/` and `admin/` to separate GitHub repos (or use monorepo with root directory setting)
2. Import on [Vercel](https://vercel.com)
3. Set `VITE_BACKEND_URL` to your deployed backend URL
4. Vercel auto-deploys on every push to `main`

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

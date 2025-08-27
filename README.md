# 🛍️ Ecommerce App (React + Zustand + TailwindCSS)

A mini e-commerce Single Page Application (SPA) built with **React**, **Zustand**, and **TailwindCSS**.  
It consumes the [Fake Store API](https://fakestoreapi.com/) to display products, handle cart functionality, and simulate a checkout flow.

---

## 🚀 Features

### 🔎 Product Listing (`/`)
- Responsive grid of products (image, title, price).
- Search by product title.
- Filter by category.
- Loading indicators and error handling.

### 📄 Product Detail (`/product/:id`)
- Full product details: image, title, description, price, and rating.
- Add to cart with quantity selector (1–5).

### 🛒 Shopping Cart (`/cart`)
- View items added to cart with:
  - Thumbnail, title, unit price, quantity selector (1–10), and subtotal.
- Update or remove items.
- Displays grand total.
- “Proceed to Checkout” button.

### ✅ Checkout (`/checkout`)
- Order summary with total amount.
- Simple form: name, email, address (with validation).
- Place order → clears cart and shows confirmation message.

### 💾 Data Caching
- Products and product details are cached in memory using **Zustand**.
- Avoids redundant API calls on revisits.

### 🌍 State Management
- **Zustand** manages global app state for products and shopping cart.

---

## 🛠️ Tech Stack

- [React](https://react.dev/) – Frontend library
- [React Router](https://reactrouter.com/) – Routing
- [Zustand](https://zustand-demo.pmnd.rs/) – State management


# MiniEcomerse

A simple e-commerce project built with **React + Vite** and state management using **Zustand**.

---



- [TailwindCSS](https://tailwindcss.com/) – Styling
- [Fake Store API](https://fakestoreapi.com/) – Public product API

---
## 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Viajypatel/mini-ecommerse.git
cd mini-ecommerse
npm install
npm run dev

## 📂 Project Structure


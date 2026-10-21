# Hotel & Hospitality POS & Inventory Management System

<div align="center">

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-TailwindCSS_3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Admin_Suite-React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/UI_Components-Material--UI_(MUI)-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="MUI"/>
  <img src="https://img.shields.io/badge/Icons-RemixIcon-E0234E?style=for-the-badge" alt="RemixIcon"/>
  <img src="https://img.shields.io/badge/Architecture-Modular_Client--Side-4CAF50?style=for-the-badge" alt="Modular Client-Side"/>
</p>

**A full-featured hospitality operations dashboard, point-of-sale (POS) terminal, and real-time inventory management platform.**  
Engineered for rapid cashier billing, dining table ordering, stock level monitoring, and executive analytics.

</div>

---

## 🌟 Modules & Features

### 1. Interactive Point of Sale (POS) Terminal (`Interactive-POS-System.html`)
- **Fast Cashier Billing:** Touch-friendly product grid with category filtering, search lookup, and variant selectors.
- **Dynamic Cart Engine:** Live subtotal, tax calculation, discount modifiers (Senior Citizen / PWD / Promo vouchers), and change calculation.
- **Order Ticket Generation:** Formatted bill review modal with instant print/export support.

### 2. Live Inventory Control (`Interactive-Inventory-Management.html`)
- **Stock Depletion Tracking:** Automated item count reconciliation tied to POS sales.
- **Reorder Threshold Alerts:** Visual warning indicators for low-stock and out-of-stock items.
- **Category & Supplier Organization:** Modular cataloging for food, beverages, dining amenities, and room supplies.

### 3. Executive Analytics & Admin Dashboard (`material-dashboard-react-main/`)
- Powered by **Material Dashboard 2 React** (MUI v5 + React 18).
- Revenue charts, transaction volumes, employee performance stats, and billing history tables.

---

## 📁 Repository Structure

```
Hotel-Management/
├── Interactive-POS-System.html            # Standalone browser POS terminal
├── Interactive-Inventory-Management.html  # Interactive inventory tracking console
├── inventory-data.js                      # Initial stock definitions and catalog data
├── inventory.js                           # Core inventory manipulation logic
├── material-dashboard-react-main/         # React admin & executive analytics suite
│   ├── src/                               # React components, layouts, and routes
│   └── package.json                       # React + MUI dependencies
├── common.css                             # Shared design tokens & responsive utilities
└── fonts.css                              # Typography definitions
```

---

## 🚀 Quick Launch

### Running the Standalone POS & Inventory

Open the standalone HTML applications directly in any modern browser:

```bash
# Simply launch via your browser
google-chrome Interactive-POS-System.html
# or
google-chrome Interactive-Inventory-Management.html
```

### Running the Material Dashboard Admin Suite

```bash
cd material-dashboard-react-main

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start
```

---

## 📄 License

Proprietary © Medy Villarias. All rights reserved.

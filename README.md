# <img src="icons/sparkles.svg" width="28" height="28" align="center" /> Hotel & Hospitality POS & Inventory Management System

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

## <img src="icons/swatch.svg" width="22" height="22" align="center" /> Modules & Features

### 1. Interactive Point of Sale (POS) Terminal (`Interactive-POS-System.html`)
- <img src="icons/receipt-percent.svg" width="16" height="16" align="center" /> **Fast Cashier Billing** — Touch-friendly product grid with category filtering, instant search lookup, and variant selectors.
- <img src="icons/currency-dollar.svg" width="16" height="16" align="center" /> **Dynamic Cart Engine** — Live subtotal, tax calculation, discount modifiers (Senior Citizen / PWD / Promo vouchers), and change calculation.
- <img src="icons/printer.svg" width="16" height="16" align="center" /> **Order Ticket Generation** — Formatted bill review modal with instant print/export support.

### 2. Live Inventory Control (`Interactive-Inventory-Management.html`)
- <img src="icons/cube.svg" width="16" height="16" align="center" /> **Stock Depletion Tracking** — Automated item count reconciliation tied directly to POS sales transactions.
- <img src="icons/bolt.svg" width="16" height="16" align="center" /> **Reorder Threshold Alerts** — Visual warning indicators for low-stock and out-of-stock items.
- <img src="icons/archive-box.svg" width="16" height="16" align="center" /> **Category & Supplier Organization** — Modular cataloging for food, beverages, dining amenities, and room supplies.

### 3. Executive Analytics & Admin Dashboard (`material-dashboard-react-main/`)
- <img src="icons/table-cells.svg" width="16" height="16" align="center" /> Powered by **Material Dashboard 2 React** (MUI v5 + React 18).
- <img src="icons/check-badge.svg" width="16" height="16" align="center" /> Real-time revenue charts, transaction volumes, employee performance stats, and billing history tables.

---

## <img src="icons/archive-box.svg" width="22" height="22" align="center" /> Repository Structure

```
Hotel-Management/
├── Interactive-POS-System.html            # Standalone browser POS terminal
├── Interactive-Inventory-Management.html  # Interactive inventory tracking console
├── inventory-data.js                      # Initial stock definitions and catalog data
├── inventory.js                           # Core inventory manipulation logic
├── material-dashboard-react-main/         # React admin & executive analytics suite
│   ├── src/                               # React components, layouts, and routes
│   └── package.json                       # React + MUI dependencies
├── icons/                                 # Tailwind Heroicons suite
├── common.css                             # Shared design tokens & responsive utilities
└── fonts.css                              # Typography definitions
```

---

## <img src="icons/rocket-launch.svg" width="22" height="22" align="center" /> Quick Launch

### Running the Standalone POS & Inventory

Open the standalone HTML applications directly in any modern browser:

```bash
# Launch via your browser
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

## <img src="icons/document-text.svg" width="22" height="22" align="center" /> License

Proprietary © Medy Villarias. All rights reserved.

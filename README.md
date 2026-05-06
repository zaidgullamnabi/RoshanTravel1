# ✈ Roshan Travels — Pakistan Travel Agency Website

> **"Discover Pakistan's Hidden Wonders"**
> Pakistan's premier travel agency website — fully functional, modern, and ready for business.

---

## 🌐 Project Overview

**Roshan Travels** is a complete, professional travel agency website built with HTML5, CSS3, and vanilla JavaScript. It focuses on Pakistan travel destinations with all prices in PKR (Pakistani Rupees).

---

## ✅ Completed Features

### 🎨 Frontend Pages
| Page | File | Description |
|------|------|-------------|
| 🏠 Home | `index.html` | Hero slider, search, featured packages, destinations, reviews, CTA |
| 🎒 Packages | `packages.html` | Filter, sort, search, sidebar, category pills — all 8 packages |
| 📄 Package Detail | `package-detail.html` | Gallery, itinerary, booking form, price breakdown, similar packages |
| 🤝 About Us | `about.html` | Mission, team, timeline, awards, why choose us |
| 📞 Contact | `contact.html` | Contact form, map, FAQ, office locations, social links |
| 📋 Dashboard | `dashboard.html` | Bookings, wishlist, profile, notifications (user) |
| ⚙ Admin Panel | `admin.html` | Full CRUD for packages, bookings, contacts, users |

### 🔧 Functionality
- ✅ Hero image slider with 4 beautiful Pakistan destinations
- ✅ Smart search (destination, date, budget, duration)
- ✅ Package filtering (category, price range, duration, rating, sort)
- ✅ Booking system with price breakdown & confirmation
- ✅ User authentication (Login / Register) via localStorage
- ✅ Admin panel with full package CRUD
- ✅ Wishlist (localStorage-based)
- ✅ WhatsApp integration (floating button + booking)
- ✅ Google Maps embed (Contact page)
- ✅ Customer reviews section
- ✅ FAQ with accordion
- ✅ Toast notifications
- ✅ Page loader animation
- ✅ Scroll-triggered animations (fade-in)
- ✅ Counter animation (stats section)
- ✅ Revenue chart (Admin dashboard)
- ✅ Responsive on all screen sizes (mobile + desktop)
- ✅ 8 Pakistan tour packages with full details

### 💰 Pricing System
- All prices shown in **PKR (Pakistani Rupees)**
- Base price + Discount % → Final price displayed
- Price breakdown in booking form (per person × travelers + 5% tax)
- Example: `PKR 85,000 → PKR 72,250 (15% OFF)`

---

## 📂 Folder Structure

```
/
├── index.html              → Home Page
├── packages.html           → All Packages with filters
├── package-detail.html     → Individual Package Detail + Booking
├── about.html              → About Us + Team + Timeline
├── contact.html            → Contact Form + Map + FAQ
├── dashboard.html          → User Dashboard (My Trips)
├── admin.html              → Admin Control Panel
├── css/
│   └── style.css           → Complete stylesheet (4,900+ lines)
├── js/
│   ├── data.js             → All data (packages, reviews, config)
│   └── main.js             → Core JavaScript logic
└── README.md               → This file
```

---

## 🔗 Navigation & Entry Points

| URL | Description |
|-----|-------------|
| `index.html` | Homepage — main entry |
| `packages.html` | All packages |
| `packages.html?cat=Northern` | Filter by category |
| `packages.html?dest=hunza` | Filter by destination |
| `package-detail.html?id=pkg-001` | Hunza Valley package detail |
| `package-detail.html?id=pkg-002` | Skardu package detail |
| `package-detail.html?id=pkg-005` | Fairy Meadows package detail |
| `package-detail.html?id=pkg-xxx#book` | Open package + scroll to booking |
| `dashboard.html` | User dashboard |
| `admin.html` | Admin panel |

---

## 🔐 Authentication

### User Login
- Register with any name/email/password (stored in localStorage)
- Login redirects to user dashboard

### Admin Login
| Field | Value |
|-------|-------|
| Email | `admin@roshantravels.pk` |
| Password | `admin123` |

> Admin login redirects to `admin.html` with full panel access.

---

## 🗃️ Data Models

### Table: `packages`
| Field | Type | Description |
|-------|------|-------------|
| id | text | Unique package ID (e.g. pkg-001) |
| title | text | Package name |
| destination | text | Location |
| duration | text | e.g. "7 Days / 6 Nights" |
| base_price | number | Original price in PKR |
| discount_percent | number | Discount % |
| final_price | number | After discount |
| category | text | Northern/Adventure/Historical/Beach/Cultural |
| rating | number | 1–5 stars |
| featured | bool | Show on homepage? |
| highlights | array | Key attractions |
| itinerary | rich_text | Day-by-day plan |
| included | array | What's included |
| excluded | array | What's not included |

### Table: `bookings`
| Field | Type | Description |
|-------|------|-------------|
| id | text | Booking ID (BK-xxxxx) |
| package_id | text | Linked package |
| user_name | text | Traveler name |
| user_email | text | Email |
| user_phone | text | Phone/WhatsApp |
| travel_date | text | Departure date |
| travelers | number | Number of people |
| total_price | number | Final total in PKR |
| status | text | pending/confirmed/completed/cancelled |
| payment_method | text | Bank/EasyPaisa/JazzCash/Cash |

### Table: `reviews`
| Field | Type | Description |
|-------|------|-------------|
| id | text | Review ID |
| package_id | text | Linked package |
| user_name | text | Reviewer name |
| rating | number | 1–5 stars |
| comment | rich_text | Review text |

### Table: `contacts`
| Field | Type | Description |
|-------|------|-------------|
| id | text | Contact ID |
| name | text | Sender name |
| email | text | Email |
| subject | text | Inquiry type |
| message | rich_text | Message content |
| status | text | new/read/replied |

---

## 📱 Tour Packages Included

| # | Package | Destination | Duration | Price | Discount |
|---|---------|-------------|----------|-------|----------|
| 1 | Hunza Valley Splendor | Hunza, GB | 7D/6N | PKR 72,250 | 15% OFF |
| 2 | Skardu & Deosai Adventure | Skardu, GB | 8D/7N | PKR 99,000 | 10% OFF |
| 3 | Swat Valley Escape | Swat, KPK | 5D/4N | PKR 36,000 | 20% OFF |
| 4 | Lahore Heritage Tour | Lahore | 3D/2N | PKR 25,000 | — |
| 5 | Fairy Meadows & Nanga Parbat | Diamer, GB | 6D/5N | PKR 66,000 | 12% OFF |
| 6 | Murree & Patriata Getaway | Murree | 3D/2N | PKR 19,800 | 10% OFF |
| 7 | Gwadar & Makran Coast | Gwadar | 5D/4N | PKR 50,600 | 8% OFF |
| 8 | Mohenjo-Daro Heritage | Larkana, Sindh | 4D/3N | PKR 35,000 | — |

---

## 🚀 How to Use

### Option 1 — Direct Deploy
Click the **Publish** tab to deploy instantly and get a live URL.

### Option 2 — Local Testing
1. Download all files
2. Open `index.html` in any browser
3. No server required — works completely client-side

### Option 3 — Host on any Static Host
Upload to **Netlify**, **Vercel**, **GitHub Pages**, or any web host.

---

## 📞 Contact Info (Pre-configured)
- **Phone:** +92 300 123 4567
- **WhatsApp:** 923001234567
- **Email:** info@roshantravels.pk
- **Office:** Blue Area, Islamabad, Pakistan

> To update contact info, edit `js/data.js` → `APP_CONFIG` object.

---

## ⚡ Technologies Used

| Technology | Usage |
|-----------|-------|
| HTML5 | Semantic structure |
| CSS3 | Custom design system, animations, responsive |
| JavaScript (ES6+) | All interactivity and logic |
| Font Awesome 6 | Icons throughout |
| Google Fonts | Inter + Playfair Display |
| RESTful Table API | Data persistence for bookings/contacts |
| localStorage | Auth, wishlist, bookings cache |
| Unsplash | High-quality travel images |

---

## 🔮 Recommended Next Steps

1. **Custom Domain** — Connect a domain like `roshantravels.pk`
2. **WhatsApp Business** — Set up proper WhatsApp Business account
3. **Email Integration** — Add EmailJS for real email confirmations
4. **Payment Gateway** — Integrate JazzCash/EasyPaisa API for online payments
5. **Google Analytics** — Add tracking for visitor insights
6. **More Packages** — Add 20+ more destinations via Admin Panel
7. **Blog Section** — Add travel tips and destination guides
8. **Reviews Widget** — Connect Google Reviews API
9. **Photo Gallery** — Add real photography from Pakistan tours
10. **Multi-language** — Add Urdu language support

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| Primary Color | `#1a6b3c` (Forest Green) |
| Secondary Color | `#f4a623` (Golden Yellow) |
| Font (Body) | Inter |
| Font (Headings) | Playfair Display |
| Border Radius | 8px–28px (layered system) |
| Shadow System | sm / md / lg / xl |

---

*Built with ❤️ for Pakistan — Roshan Travels © 2025*

/* ============================================
   ROSHAN TRAVELS - Data & Configuration
   ============================================ */

const APP_CONFIG = {
  name: "Roshan Travels",
  tagline: "Discover Pakistan's Hidden Wonders",
  phone: "+92 300 1234567",
  whatsapp: "923001234567",
  email: "info@roshantravels.pk",
  address: "2nd Floor, Travel Hub, Blue Area, Islamabad",
  facebook: "#",
  instagram: "#",
  twitter: "#",
  youtube: "#",
};

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1600&q=85",
    title: "Discover <span>Hunza Valley</span>",
    desc: "Journey to the Crown Jewel of Karakoram — where turquoise lakes meet snow-capped peaks in the most spectacular landscape on Earth.",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85",
    title: "Conquer <span>Skardu</span>",
    desc: "Home to the world's mightiest mountains — K2, Broad Peak, Gasherbrum. Experience the raw grandeur of Baltistan.",
  },
  {
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1600&q=85",
    title: "Camp at <span>Fairy Meadows</span>",
    desc: "Sleep under a billion stars with mighty Nanga Parbat watching over you. A once-in-a-lifetime experience.",
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85",
    title: "Escape to <span>Swat Valley</span>",
    desc: "Lush green meadows, crystal rivers, ancient ruins — the Switzerland of Pakistan awaits you.",
  },
];

const PACKAGES_DATA = [
  {
    id: "pkg-001",
    title: "Hunza Valley Splendor",
    destination: "Hunza, Gilgit-Baltistan",
    duration: "7 Days / 6 Nights",
    duration_nights: 6,
    base_price: 85000,
    discount_percent: 15,
    final_price: 72250,
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
    category: "Northern",
    rating: 4.9,
    reviews_count: 248,
    featured: true,
    badge: "Best Seller",
    highlights: ["Attabad Lake Boat Ride", "Rakaposhi Viewpoint", "Baltit Fort", "Eagle's Nest", "Cherry Gardens"],
    itinerary: [
      { day: 1, title: "Islamabad → Hunza", desc: "Depart Islamabad early morning via the iconic Karakoram Highway. Stop at Besham, Chilas, and arrive Hunza by evening. Welcome dinner at hotel." },
      { day: 2, title: "Attabad Lake & Gojal", desc: "Morning boat ride on the mesmerizing turquoise Attabad Lake. Explore Gojal Valley and nearby villages. Sunset photography." },
      { day: 3, title: "Baltit Fort & Karimabad", desc: "Visit the historic Baltit Fort (1,000+ years old). Explore Karimabad bazaar. Taste local Hunzai cuisine." },
      { day: 4, title: "Rakaposhi Base Camp Trek", desc: "Drive to Minapin village. Trek to Rakaposhi Base Camp for breathtaking views of the 7,788m giant. Return by evening." },
      { day: 5, title: "Khunjerab Pass", desc: "Drive to Khunjerab Pass (4,733m) — the highest paved international border crossing. Pak-China border ceremony." },
      { day: 6, title: "Eagle's Nest & Duikar", desc: "Trek/jeep ride to Eagle's Nest viewpoint. Watch the most spectacular sunset over five mighty peaks. Farewell dinner." },
      { day: 7, title: "Return to Islamabad", desc: "Early morning departure along KKH. Stop at Naran if time permits. Arrive Islamabad by late evening." },
    ],
    included: ["AC Coaster / Hiace Transport", "Hotel Accommodation (3-Star)", "Daily Breakfast & Dinner", "Professional Tour Guide", "All Entry Tickets", "Attabad Lake Boat Ride", "Photography Spots Visit"],
    excluded: ["Airfare", "Lunch", "Personal Expenses", "Travel Insurance", "Tips for guide"],
    description: "Experience the breathtaking beauty of Hunza Valley — a paradise nestled in the Karakoram mountains. Marvel at snow-capped peaks, turquoise lakes, ancient forts, and the warmest hospitality in Pakistan.",
  },
  {
    id: "pkg-002",
    title: "Skardu & Deosai Adventure",
    destination: "Skardu, Gilgit-Baltistan",
    duration: "8 Days / 7 Nights",
    duration_nights: 7,
    base_price: 110000,
    discount_percent: 10,
    final_price: 99000,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "Adventure",
    rating: 4.8,
    reviews_count: 186,
    featured: true,
    badge: "Top Rated",
    highlights: ["Shangrila Resort", "Deosai Plains", "Satpara Lake", "Shigar Fort", "Blind Lake"],
    itinerary: [
      { day: 1, title: "Islamabad → Skardu", desc: "Fly or drive to Skardu. Check-in hotel. Evening walk along Indus River." },
      { day: 2, title: "Shangrila Resort", desc: "Visit the legendary Shangrila (Heaven on Earth) resort. Upper Kachura Lake boat ride." },
      { day: 3, title: "Deosai National Park", desc: "Full-day drive through Deosai — world's second highest plateau. Spot Himalayan brown bears." },
      { day: 4, title: "Satpara Lake", desc: "Visit the deep blue Satpara Lake and Satpara Cave. Afternoon free." },
      { day: 5, title: "Shigar Fort & Cold Desert", desc: "Explore the restored Shigar Fort. Drive to Katpana Cold Desert — sand dunes amidst snowy peaks!" },
      { day: 6, title: "Manthokha Waterfall", desc: "Drive to Khaplu. Visit the stunning Manthokha Waterfall. Explore Khaplu Palace." },
      { day: 7, title: "Blind Lake & Culture", desc: "Hike to Blind Lake. Evening cultural show. Farewell dinner." },
      { day: 8, title: "Return Journey", desc: "Fly/drive back to Islamabad. Tour ends." },
    ],
    included: ["4x4 Jeep Transport (off-road)", "Hotel + Resort Accommodation", "All Meals (Breakfast, Lunch, Dinner)", "Experienced Mountain Guide", "National Park Entry Fees", "Camping Gear"],
    excluded: ["Flight Tickets (if flying)", "Personal Expenses", "Medical Insurance", "Tips"],
    description: "Conquer the roof of the world! Skardu is home to four of the world's fourteen 8000m peaks. Explore the magical Deosai Plains and witness landscapes found nowhere else on Earth.",
  },
  {
    id: "pkg-003",
    title: "Swat Valley Escape",
    destination: "Swat, KPK",
    duration: "5 Days / 4 Nights",
    duration_nights: 4,
    base_price: 45000,
    discount_percent: 20,
    final_price: 36000,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    category: "Northern",
    rating: 4.7,
    reviews_count: 312,
    featured: true,
    badge: "20% OFF",
    highlights: ["Malam Jabba Ski Resort", "Mahodand Lake", "Kalam Valley", "Ushu Forest", "River Rafting"],
    itinerary: [
      { day: 1, title: "Islamabad → Mingora", desc: "Drive to Mingora via Swabi. Check in hotel. Evening at Fizagat Park." },
      { day: 2, title: "Malam Jabba", desc: "Visit Malam Jabba Ski Resort. Cable car ride. Buddhist ruins at Butkara." },
      { day: 3, title: "Kalam Valley", desc: "Drive up to Kalam. Visit Ushu Forest and Matiltan Valley. River crossing." },
      { day: 4, title: "Mahodand Lake", desc: "Jeep safari to Mahodand Lake — one of Pakistan's most scenic glacial lakes. Trout fishing available." },
      { day: 5, title: "Return Journey", desc: "Morning departure back to Islamabad/Peshawar." },
    ],
    included: ["Comfortable AC Transport", "3-Star Hotel Stay", "Daily Breakfast & Dinner", "Tour Guide", "All Entry Fees", "Malam Jabba Cable Car"],
    excluded: ["Lunch", "Skiing Charges", "Personal Shopping", "Rafting Charges"],
    description: "Known as the 'Switzerland of Pakistan', Swat Valley dazzles with lush green meadows, crystal rivers, dense forests and ancient Buddhist ruins. Perfect for families.",
  },
  {
    id: "pkg-004",
    title: "Lahore Heritage Tour",
    destination: "Lahore, Punjab",
    duration: "3 Days / 2 Nights",
    duration_nights: 2,
    base_price: 25000,
    discount_percent: 0,
    final_price: 25000,
    image: "https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?w=800&q=80",
    category: "Historical",
    rating: 4.6,
    reviews_count: 425,
    featured: false,
    badge: null,
    highlights: ["Lahore Fort", "Badshahi Mosque", "Shalimar Gardens", "Gawalmandi Food Street", "Wagah Border"],
    itinerary: [
      { day: 1, title: "Arrival + Mughal Wonders", desc: "Arrive Lahore. Visit Lahore Fort (Shahi Qila) and Badshahi Mosque. Evening at Gawalmandi Food Street." },
      { day: 2, title: "Gardens & Bazaars", desc: "Morning at Shalimar Gardens. Wazir Khan Mosque. Anarkali Bazaar shopping. Lahore Museum." },
      { day: 3, title: "Wagah Border & Departure", desc: "Morning leisure. Wagah Border flag-lowering ceremony. Departure." },
    ],
    included: ["4-Star Hotel", "Daily Breakfast", "AC Transport", "Professional Guide", "All Entry Tickets", "Wagah Border Visit"],
    excluded: ["Lunch & Dinner", "Personal Shopping", "Airfare"],
    description: "Lahore — the cultural heart of Pakistan — is a city that never sleeps. From Mughal grandeur to sizzling street food, every corner of Lahore tells a story of glory.",
  },
  {
    id: "pkg-005",
    title: "Fairy Meadows & Nanga Parbat",
    destination: "Diamer, Gilgit-Baltistan",
    duration: "6 Days / 5 Nights",
    duration_nights: 5,
    base_price: 75000,
    discount_percent: 12,
    final_price: 66000,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    category: "Adventure",
    rating: 4.9,
    reviews_count: 143,
    featured: true,
    badge: "Premium",
    highlights: ["Fairy Meadows Camping", "Nanga Parbat View", "Beyal Camp Trek", "Raikot Bridge", "Stargazing"],
    itinerary: [
      { day: 1, title: "Islamabad → Raikot Bridge", desc: "Long drive along KKH. Arrive Raikot Bridge by evening. Overnight stay." },
      { day: 2, title: "Trek to Fairy Meadows", desc: "Jeep ride on the world's most dangerous road to Tato. Trek 3 hours through pine forests to Fairy Meadows." },
      { day: 3, title: "Beyal Camp Trek", desc: "Full-day trek to Beyal Camp (3,500m). Get up close to Nanga Parbat (8,126m). Glacier views." },
      { day: 4, title: "Rest & Photography", desc: "Morning sunrise over Nanga Parbat. Photography session. Relax. Night: Stargazing with guide." },
      { day: 5, title: "Return to Tato", desc: "Trek back down. Jeep ride to Raikot Bridge. Hot meal and rest." },
      { day: 6, title: "Return to Islamabad", desc: "Drive back along KKH. Arrive Islamabad evening." },
    ],
    included: ["4x4 Jeep Transport", "Camping Tents & Sleeping Bags", "All Meals (3x daily)", "Experienced Trek Guide", "Porters (1 per 2 persons)", "Safety Equipment", "Trekking Permits"],
    excluded: ["Personal Clothing & Gear", "Travel Insurance", "Helicopter (optional)"],
    description: "Standing beneath the 'Killer Mountain' — Nanga Parbat (8,126m) — at Fairy Meadows is a once-in-a-lifetime experience. Camp under a billion stars in one of Earth's most dramatic landscapes.",
  },
  {
    id: "pkg-006",
    title: "Murree & Patriata Getaway",
    destination: "Murree, Punjab",
    duration: "3 Days / 2 Nights",
    duration_nights: 2,
    base_price: 22000,
    discount_percent: 10,
    final_price: 19800,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    category: "Northern",
    rating: 4.4,
    reviews_count: 567,
    featured: false,
    badge: null,
    highlights: ["Mall Road Murree", "Patriata Chair Lift", "Pindi Point", "Kashmir Point", "Snow Activities"],
    itinerary: [
      { day: 1, title: "Islamabad → Murree", desc: "Drive to Murree. Check-in hotel. Evening stroll on Mall Road. Local food." },
      { day: 2, title: "Patriata & Viewpoints", desc: "Visit New Murree (Patriata). Chair Lift / Cable Car ride. Pindi Point. Games & snow activities." },
      { day: 3, title: "Kashmir Point & Return", desc: "Morning at Kashmir Point. Souvenir shopping. Return to Islamabad by afternoon." },
    ],
    included: ["Comfortable Transport", "3-Star Hotel", "Daily Breakfast", "Tour Guide", "Chair Lift Ticket"],
    excluded: ["Lunch & Dinner", "Snow Activities Extra", "Personal Shopping"],
    description: "Just 60km from Islamabad, Murree is Pakistan's most beloved hill station. Enjoy cool mountain air, the famous Mall Road, and magical snow — perfect for a quick family escape.",
  },
  {
    id: "pkg-007",
    title: "Gwadar & Makran Coast",
    destination: "Gwadar, Balochistan",
    duration: "5 Days / 4 Nights",
    duration_nights: 4,
    base_price: 55000,
    discount_percent: 8,
    final_price: 50600,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "Beach",
    rating: 4.6,
    reviews_count: 112,
    featured: false,
    badge: null,
    highlights: ["Gwadar Port", "Princess of Hope", "Ormara Beach", "Buzi Pass", "Fresh Seafood"],
    itinerary: [
      { day: 1, title: "Karachi → Gwadar", desc: "Fly from Karachi to Gwadar. Check-in hotel. Evening at Gwadar Beach." },
      { day: 2, title: "Gwadar City Tour", desc: "Gwadar Port visit. Hammerhead viewpoint. Local fish market." },
      { day: 3, title: "Princess of Hope", desc: "Drive to Princess of Hope rock formation. Buzi Pass hiking. Stunning Arabian Sea views." },
      { day: 4, title: "Ormara Beach", desc: "Drive to Ormara. White sandy beaches. Fresh seafood lunch. Sunset at beach." },
      { day: 5, title: "Return to Karachi", desc: "Fly back to Karachi. Tour ends." },
    ],
    included: ["Flight Karachi-Gwadar-Karachi", "Hotel Stay", "All Meals", "Local Transport", "Guide"],
    excluded: ["Personal Expenses", "Extra Orders", "Souvenirs"],
    description: "Experience the wild, untouched beauty of Pakistan's Arabian Sea coastline. Gwadar — the future city of Pakistan — offers dramatic rock formations, pristine beaches, and the freshest seafood.",
  },
  {
    id: "pkg-008",
    title: "Mohenjo-Daro Heritage",
    destination: "Larkana, Sindh",
    duration: "4 Days / 3 Nights",
    duration_nights: 3,
    base_price: 35000,
    discount_percent: 0,
    final_price: 35000,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    category: "Historical",
    rating: 4.5,
    reviews_count: 98,
    featured: false,
    badge: null,
    highlights: ["Mohenjo-Daro Ruins", "Indus Valley Civilization", "Sindh Museum", "Sukkur Barrage", "Local Culture"],
    itinerary: [
      { day: 1, title: "Arrival in Larkana", desc: "Fly/drive to Larkana. Check-in hotel. Evening brief by archaeologist guide." },
      { day: 2, title: "Mohenjo-Daro", desc: "Full-day exploration of UNESCO World Heritage Site. Visit the great bath, granary, and assembly hall." },
      { day: 3, title: "Sukkur & Local Culture", desc: "Drive to Sukkur Barrage. Local bazaar visit. Traditional Sindhi cultural experience." },
      { day: 4, title: "Return Journey", desc: "Departure. Tour ends." },
    ],
    included: ["Transport", "Hotel Stay", "Breakfast & Dinner", "Archaeologist Guide", "Museum Entry Fees"],
    excluded: ["Airfare", "Lunch", "Personal Expenses"],
    description: "Discover one of the world's oldest civilizations at Mohenjo-Daro — a UNESCO World Heritage Site. Walk through streets planned 5,000 years ago at the ancient Indus Valley.",
  },
];

const REVIEWS_DATA = [
  {
    id: "rev-001",
    package_id: "pkg-001",
    user_name: "Ahmed Raza",
    initials: "AR",
    rating: 5,
    comment: "Absolutely breathtaking! Hunza Valley exceeded all my expectations. The tour guide was exceptional and the views from Eagle's Nest were unforgettable. Roshan Travels made it seamless!",
    travel_date: "April 2025",
    gradient: "linear-gradient(135deg, #1a6b3c, #2d9b5a)",
  },
  {
    id: "rev-002",
    package_id: "pkg-002",
    user_name: "Fatima Khan",
    initials: "FK",
    rating: 5,
    comment: "Deosai Plains is literally heaven on Earth. The team arranged everything perfectly — from jeeps to camping. I cried seeing the sunset over the plateau. Will book again next year!",
    travel_date: "July 2025",
    gradient: "linear-gradient(135deg, #c75b2a, #e8894a)",
  },
  {
    id: "rev-003",
    package_id: "pkg-003",
    user_name: "Bilal Hussain",
    initials: "BH",
    rating: 5,
    comment: "Swat Valley was magical! Mahodand Lake is something else entirely. Great value for money and the hotel was very comfortable. Perfect family trip — kids loved every moment!",
    travel_date: "May 2025",
    gradient: "linear-gradient(135deg, #2563eb, #3b82f6)",
  },
  {
    id: "rev-004",
    package_id: "pkg-005",
    user_name: "Sara Malik",
    initials: "SM",
    rating: 5,
    comment: "Fairy Meadows camping was a dream come true. Waking up with Nanga Parbat right in front of you — no words. The guides kept us safe on the trek throughout. Absolute 10/10!",
    travel_date: "August 2025",
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
  },
  {
    id: "rev-005",
    package_id: "pkg-001",
    user_name: "Usman Tariq",
    initials: "UT",
    rating: 4,
    comment: "Great experience overall! Khunjerab Pass was incredible — standing at the Pak-China border felt surreal. Excellent food arrangements. Minor delay on Day 3 but all managed well!",
    travel_date: "June 2025",
    gradient: "linear-gradient(135deg, #0f766e, #14b8a6)",
  },
  {
    id: "rev-006",
    package_id: "pkg-004",
    user_name: "Zara Ahmed",
    initials: "ZA",
    rating: 5,
    comment: "Lahore Heritage Tour was eye-opening! I had no idea our history was so rich. The Wagah Border ceremony gave me goosebumps. The guide was incredibly knowledgeable and funny!",
    travel_date: "March 2025",
    gradient: "linear-gradient(135deg, #be185d, #ec4899)",
  },
];

const DESTINATIONS_DATA = [
  { name: "Hunza Valley", image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80", count: 8, category: "Northern", slug: "hunza" },
  { name: "Skardu", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", count: 6, category: "Adventure", slug: "skardu" },
  { name: "Swat Valley", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", count: 5, category: "Northern", slug: "swat" },
  { name: "Lahore", image: "https://images.unsplash.com/photo-1588416499018-d8c621e7d2c2?w=600&q=80", count: 4, category: "Historical", slug: "lahore" },
  { name: "Fairy Meadows", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80", count: 3, category: "Adventure", slug: "fairy-meadows" },
];

// Utility: Format PKR
function formatPKR(amount) {
  return "PKR " + amount.toLocaleString("en-PK");
}

// Utility: Render stars
function renderStars(rating) {
  let html = "";
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
  if (half) html += '<i class="fas fa-star-half-alt"></i>';
  while (html.split("fa-star").length - 1 < 5) html += '<i class="far fa-star"></i>';
  return html;
}

// Utility: Truncate text
function truncate(text, len = 100) {
  return text.length > len ? text.slice(0, len) + "…" : text;
}

// LocalStorage Auth helpers
const Auth = {
  STORAGE_KEY: "rt_user",
  ADMIN_KEY: "rt_admin",

  getUser() { try { return JSON.parse(localStorage.getItem(this.STORAGE_KEY)); } catch { return null; } },
  setUser(u) { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(u)); },
  removeUser() { localStorage.removeItem(this.STORAGE_KEY); },
  isLoggedIn() { return !!this.getUser(); },

  isAdmin() { return localStorage.getItem(this.ADMIN_KEY) === "true"; },
  setAdmin(v) { localStorage.setItem(this.ADMIN_KEY, v ? "true" : "false"); },

  // Simulated register
  register(name, email, password) {
    const users = JSON.parse(localStorage.getItem("rt_users") || "[]");
    if (users.find(u => u.email === email)) return { ok: false, msg: "Email already registered." };
    const user = { id: Date.now().toString(), name, email, password, joined: new Date().toISOString() };
    users.push(user);
    localStorage.setItem("rt_users", JSON.stringify(users));
    this.setUser({ id: user.id, name, email });
    return { ok: true };
  },

  // Simulated login
  login(email, password) {
    // Admin shortcut
    if (email === "admin@roshantravels.pk" && password === "admin123") {
      this.setUser({ id: "admin", name: "Admin", email });
      this.setAdmin(true);
      return { ok: true, isAdmin: true };
    }
    const users = JSON.parse(localStorage.getItem("rt_users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, msg: "Invalid email or password." };
    this.setUser({ id: user.id, name: user.name, email: user.email });
    this.setAdmin(false);
    return { ok: true, isAdmin: false };
  },

  logout() {
    this.removeUser();
    this.setAdmin(false);
  }
};

// Bookings (localStorage)
const BookingStore = {
  KEY: "rt_bookings",
  getAll() { try { return JSON.parse(localStorage.getItem(this.KEY) || "[]"); } catch { return []; } },
  getUserBookings(userId) { return this.getAll().filter(b => b.user_id === userId); },
  add(booking) {
    const all = this.getAll();
    all.push({ ...booking, id: "BK-" + Date.now(), created_at: new Date().toISOString() });
    localStorage.setItem(this.KEY, JSON.stringify(all));
  },
  cancel(id) {
    const all = this.getAll().map(b => b.id === id ? { ...b, status: "cancelled" } : b);
    localStorage.setItem(this.KEY, JSON.stringify(all));
  },
};

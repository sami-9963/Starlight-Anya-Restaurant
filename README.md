# Starlight Anya Restaurant - Luxury Website

Welcome to the official web application for **Starlight Anya Restaurant**, located in **Saidnagar, Gulshan, Dhaka-1212**.

Designed with a bespoke **Black & Gold** luxury aesthetic, this multi-page responsive web experience showcases the restaurant's multi-cuisine artistry, 5-star hygiene standards, and 6:00 AM – 2:00 AM operating hours.

---

## 🌟 Key Features

1. **Luxury Black & Gold Visual Identity**:
   - Palette: Obsidian black (`#070709`), deep onyx (`#0f0f14`), and royal gold gradients (`#d4af37`, `#f5e297`).
   - Typography: Regal serif typography (`Cinzel`, `Playfair Display`) paired with clean modern sans-serif (`Plus Jakarta Sans`).
   - Micro-animations, subtle gold starfield orbs, and glassmorphism.

2. **World Cuisine Menu Showcase**:
   - Covers all 6 featured cuisines + Beverages + Gourmet Desserts:
     - 🇧🇩 **Bangladeshi**: Shahi Mutton Kacchi Biryani, Chittagong Beef Kala Bhuna, Padma Shorshe Ilish, Royal Morog Polao.
     - 🇮🇳 **Indian**: Royal Murgh Makhani (Butter Chicken), Kashmiri Mutton Rogan Josh, Paneer Tikka Lababdar, Garlic Naan.
     - 🇮🇹 **Italian**: Black Truffle Fettuccine Alfredo, Wood-Fired Diavola & Burrata Pizza, Beef Lasagna Bolognese.
     - 🇨🇳 **Chinese**: Szechuan Firecracker Chili Chicken, Golden Jumbo Kung Pao Prawns, Crystal Dim Sum, Hakka Chowmein.
     - 🇺🇸 **American**: Starlight Gold Wagyu Smash Burger, Smoked Texas BBQ Short Ribs, Nashville Hot Chicken Burger.
     - 🇲🇽 **Mexican**: Birria Beef Tacos with Consomé, Sizzling Fajitas Trio, Loaded Anya Fiesta Nachos Supreme.
     - 🍹 **Beverages & Desserts**: 24K Gold Signature Mocktail, Royal Saffron Borhani, Spanish Gold Iced Latte, Molten Lava Cake, Venetian Tiramisu.
   - Realistic pricing in Bangladeshi Taka (**৳**), formatted to upscale Gulshan standards.
   - Interactive filtering by cuisine, instant search bar, dietary badges (Halal, Chef Special, Spicy with chili indicators, Vegetarian), and direct "Order via WhatsApp" button.

3. **5-Star Hygiene & Kitchen Cleanliness Charter**:
   - UV-C Cutlery Sterilization.
   - Transparent glass-paneled open kitchen culinary theatre.
   - Continuous HEPA and UV air purification.
   - Certified master cooks & courteous, well-groomed waitstaff.

4. **Table Reservation System (6:00 AM – 2:00 AM)**:
   - Dynamic time slots covering breakfast (6 AM), executive lunch, high tea, dinner, and late-night supper (2 AM).
   - Seating zones: Grand Starlight Hall, VIP Anya Gold Lounge, Starlight Outdoor Terrace, Candlelight Booths.
   - Instant booking reference generation (`STA-XXXXXX`) with interactive confirmation modal and one-click WhatsApp dispatch.

5. **Interior & Ambiance Showcase**:
   - Filterable high-resolution gallery of the luxury dining hall, VIP gold lounge, open kitchen, and outdoor terrace.
   - Fullscreen interactive lightbox modal with keyboard escape support.

6. **Guest Rating & Review System**:
   - 4.9/5 Star breakdown based on 840+ guest reviews.
   - Interactive **"Rate Us / Write a Review"** modal with clickable 1–5 star rating picker, instant feedback, and live addition to reviews.

7. **Delivery & Takeaway Integration**:
   - Direct WhatsApp ordering hotline with pre-filled dish details.
   - Integration cards for Foodpanda and Pathao Food.
   - Curbside pickup with 10% discount callout.

8. **Location & Google Maps Integration**:
   - Saidnagar, Gulshan, Dhaka-1212 address.
   - Embedded interactive Google Map and direct link to Google Maps navigation.
   - Valet parking and accessibility information.

9. **Floating WhatsApp Hotline**:
   - Accessible from any page on mobile, tablet, or desktop with a single tap.

---

## 📁 Project Structure

```
Starlight Anya Restaurant/
├── index.html            # Main luxury portal (Hero, Menu, Hygiene, Ambiance, Reviews, Location)
├── about.html            # Dedicated page for Hygiene Charter, Master Chefs & Waitstaff
├── menu.html             # Full-catalog interactive menu with search and filters
├── reservation.html      # Dedicated VIP lounge & table booking experience
├── contact.html          # Location directions, operating hours, and inquiry form
├── css/
│   └── style.css         # Luxury Black & Gold styling, animations, glassmorphism, modals
├── js/
│   ├── data.js           # Structured database of dishes, prices (BDT), gallery, and reviews
│   └── main.js           # Interactive controller (filtering, reservations, lightbox, toasts)
└── README.md             # Documentation and customization guide
```

---

## 🚀 How to Run the Website

### Option 1: Double-Click (Zero Install Required)
Simply double-click [`index.html`](file:///c:/Users/Ador/Desktop/Starlight%20Anya%20Restaurant/index.html) in your file explorer. It will open instantly in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

### Option 2: Local HTTP Server (Recommended for Developers)
If you have Node.js installed:
```powershell
# In the project directory:
npx serve .
# Or run with python (if available):
# python -m http.server 8000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ How to Customize Menu, Prices, and Photos

All dish names, descriptions, prices in BDT (৳), images, and badges are centralized inside [`js/data.js`](file:///c:/Users/Ador/Desktop/Starlight%20Anya%20Restaurant/js/data.js).

To edit or add a dish:
1. Open `js/data.js`.
2. Locate the `menuData` array.
3. Edit the `name`, `price`, `formattedPrice`, `description`, or `image` URL.
4. Save the file and refresh your browser!

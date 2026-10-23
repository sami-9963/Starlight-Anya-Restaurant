// Starlight Anya Restaurant - Data Repository
const restaurantInfo = {
    name: "Starlight Anya Restaurant",
    tagline: "Dhaka's Premier Gold & Black Fine Dining Haven",
    subtitle: "A Symphony of Multi-Cuisine Excellence in Saidnagar, Gulshan",
    address: "Saidnagar, Gulshan, Dhaka-1212, Bangladesh",
    hours: "Open Daily: 6:00 AM – 2:00 AM",
    phone: "+880 1711-234567",
    altPhone: "+880 1899-887766",
    email: "reservations@starlightanya.com",
    whatsapp: "+8801711234567",
    googleMapsUrl: "https://maps.google.com/?q=Saidnagar+Gulshan+Dhaka+1212",
    rating: 4.9,
    totalReviews: 840,
    established: 2024
};

const menuData = [
    // --- BANGLADESHI CUISINE ---
    {
        id: "bd-1",
        name: "Shahi Mutton Kacchi Biryani",
        category: "bangladeshi",
        price: 680,
        formattedPrice: "৳680",
        description: "Fragrant Chinigura rice layered with tender baby mutton, saffron-infused potatoes, boiled egg, served with Shahi Borhani and fresh salad.",
        tags: ["Chef Special", "Halal", "Popular"],
        spiceLevel: 2,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        calories: "780 kcal",
        cuisineName: "Bangladeshi"
    },
    {
        id: "bd-2",
        name: "Chittagong Traditional Beef Kala Bhuna",
        category: "bangladeshi",
        price: 750,
        formattedPrice: "৳750",
        description: "Prime beef cubes slow-cooked in traditional mustard oil, toasted dark spices, fried shallots, and aromatic Radhuni masala.",
        tags: ["Popular", "Halal", "Spicy"],
        spiceLevel: 3,
        image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
        calories: "620 kcal",
        cuisineName: "Bangladeshi"
    },
    {
        id: "bd-3",
        name: "Padma River Shorshe Ilish",
        category: "bangladeshi",
        price: 1150,
        formattedPrice: "৳1,150",
        description: "Fresh Padma Hilsa fish steak braised in sharp yellow-black mustard gravy with split green chilies and cold-pressed mustard oil.",
        tags: ["Heritage", "Halal", "Specialty"],
        spiceLevel: 2,
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        calories: "510 kcal",
        cuisineName: "Bangladeshi"
    },
    {
        id: "bd-4",
        name: "Royal Morog Polao with Jali Kabab",
        category: "bangladeshi",
        price: 590,
        formattedPrice: "৳590",
        description: "Deshi chicken leg quarter simmered in clarified ghee, whole aromatic spices, accompanied by crispy spiced Jali kabab.",
        tags: ["Halal", "Popular"],
        spiceLevel: 1,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
        calories: "690 kcal",
        cuisineName: "Bangladeshi"
    },

    // --- INDIAN CUISINE ---
    {
        id: "in-1",
        name: "Royal Murgh Makhani (Butter Chicken)",
        category: "indian",
        price: 680,
        formattedPrice: "৳680",
        description: "Charcoal-tandoored boneless chicken morsels swirled in a velvety tomato, cashew, and golden dairy butter sauce with kasoori methi.",
        tags: ["Chef Special", "Halal"],
        spiceLevel: 1,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
        calories: "590 kcal",
        cuisineName: "Indian"
    },
    {
        id: "in-2",
        name: "Kashmiri Mutton Rogan Josh",
        category: "indian",
        price: 850,
        formattedPrice: "৳850",
        description: "Succulent bone-in lamb slow-simmered in a ruby-red gravy flavored with Kashmiri chilies, mace, cardamom, and mountain fennel.",
        tags: ["Halal", "Spicy"],
        spiceLevel: 3,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
        calories: "640 kcal",
        cuisineName: "Indian"
    },
    {
        id: "in-3",
        name: "Paneer Tikka Lababdar",
        category: "indian",
        price: 560,
        formattedPrice: "৳560",
        description: "Fresh cottage cheese cubes char-grilled in tandoor then finished in rich onion-tomato gravy with cream and crushed coriander seeds.",
        tags: ["Vegetarian", "Popular"],
        spiceLevel: 2,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
        calories: "480 kcal",
        cuisineName: "Indian"
    },
    {
        id: "in-4",
        name: "Tandoori Garlic Butter Naan Basket",
        category: "indian",
        price: 240,
        formattedPrice: "৳240",
        description: "Clay-oven baked fluffy leavened flatbread brushed with organic garlic butter and fresh cilantro.",
        tags: ["Vegetarian", "Freshly Baked"],
        spiceLevel: 0,
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
        calories: "280 kcal",
        cuisineName: "Indian"
    },

    // --- ITALIAN CUISINE ---
    {
        id: "it-1",
        name: "Black Truffle Fettuccine Alfredo",
        category: "italian",
        price: 890,
        formattedPrice: "৳890",
        description: "Handmade fettuccine ribbons tossed in 24-month aged Parmigiano Reggiano cream, forest mushrooms, and Italian black truffle emulsion.",
        tags: ["Chef Special", "Vegetarian"],
        spiceLevel: 0,
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281711?auto=format&fit=crop&w=800&q=80",
        calories: "650 kcal",
        cuisineName: "Italian"
    },
    {
        id: "it-2",
        name: "Wood-Fired Diavola & Burrata Pizza",
        category: "italian",
        price: 1150,
        formattedPrice: "৳1,150",
        description: "48-hour fermented Neapolitan dough with San Marzano tomatoes, spicy pepperoni, whole creamy burrata cheese, and hot honey drizzle.",
        tags: ["Popular", "Halal"],
        spiceLevel: 2,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        calories: "890 kcal",
        cuisineName: "Italian"
    },
    {
        id: "it-3",
        name: "Slow-Braised Beef Lasagna Bolognese",
        category: "italian",
        price: 820,
        formattedPrice: "৳820",
        description: "Layered pasta sheets with 6-hour slow-cooked beef ragù, silky béchamel sauce, mozzarella, and golden gratinated crust.",
        tags: ["Halal", "Comfort Food"],
        spiceLevel: 1,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
        calories: "730 kcal",
        cuisineName: "Italian"
    },

    // --- CHINESE CUISINE ---
    {
        id: "ch-1",
        name: "Szechuan Firecracker Chili Chicken",
        category: "chinese",
        price: 640,
        formattedPrice: "৳640",
        description: "Crispy chicken bites wok-tossed with roasted red chilies, numbing Szechuan peppercorns, scallions, and toasted sesame.",
        tags: ["Spicy", "Halal", "Popular"],
        spiceLevel: 3,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
        calories: "540 kcal",
        cuisineName: "Chinese"
    },
    {
        id: "ch-2",
        name: "Golden Jumbo Kung Pao Prawns",
        category: "chinese",
        price: 920,
        formattedPrice: "৳920",
        description: "Bay of Bengal king prawns glazed in sweet-savory aged soy glaze, crunchy roasted peanuts, and bell peppers in a fiery wok.",
        tags: ["Chef Special", "Seafood"],
        spiceLevel: 2,
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        calories: "510 kcal",
        cuisineName: "Chinese"
    },
    {
        id: "ch-3",
        name: "Steamed Crystal Dim Sum Basket (6 pcs)",
        category: "chinese",
        price: 520,
        formattedPrice: "৳520",
        description: "Delicate translucent dumplings stuffed with minced prawn and scallion, served with house chili crisp and ginger-black vinegar dip.",
        tags: ["Freshly Steamed", "Halal"],
        spiceLevel: 1,
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        calories: "320 kcal",
        cuisineName: "Chinese"
    },
    {
        id: "ch-4",
        name: "Wok-Tossed Hakka Special Chowmein",
        category: "chinese",
        price: 490,
        formattedPrice: "৳490",
        description: "High-heat stir-fried egg noodles with shredded chicken, shrimp, crunchy julienned veggies, and dark mushroom soy.",
        tags: ["Halal", "Popular"],
        spiceLevel: 1,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
        calories: "480 kcal",
        cuisineName: "Chinese"
    },

    // --- AMERICAN CUISINE ---
    {
        id: "am-1",
        name: "Starlight Gold Wagyu Smash Burger",
        category: "american",
        price: 780,
        formattedPrice: "৳780",
        description: "Double smashed prime beef patties, melted sharp cheddar, caramelized balsamic onions, secret truffle sauce on toasted brioche with golden fries.",
        tags: ["Chef Special", "Halal", "Popular"],
        spiceLevel: 1,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        calories: "850 kcal",
        cuisineName: "American"
    },
    {
        id: "am-2",
        name: "Smoked Texas BBQ Beef Short Ribs",
        category: "american",
        price: 1850,
        formattedPrice: "৳1,850",
        description: "8-hour hickory-smoked prime beef ribs glazed with house bourbon-honey glaze, served with creamy coleslaw and loaded mashed potatoes.",
        tags: ["Premium Cut", "Halal"],
        spiceLevel: 1,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        calories: "980 kcal",
        cuisineName: "American"
    },
    {
        id: "am-3",
        name: "Nashville Crispy Hot Chicken Burger",
        category: "american",
        price: 580,
        formattedPrice: "৳580",
        description: "Buttermilk fried chicken breast dipped in spicy cayenne oil, dill pickles, garlic aioli, served in a warm brioche bun with seasoned wedges.",
        tags: ["Spicy", "Halal"],
        spiceLevel: 3,
        image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
        calories: "720 kcal",
        cuisineName: "American"
    },

    // --- MEXICAN CUISINE ---
    {
        id: "mx-1",
        name: "Birria Beef Tacos with Rich Consomé",
        category: "mexican",
        price: 720,
        formattedPrice: "৳720",
        description: "Three corn tortillas dipped in chile broth, filled with braised shredded beef and Oaxaca cheese, griddled crispy with cilantro, lime, and dipping consomé.",
        tags: ["Chef Special", "Halal", "Popular"],
        spiceLevel: 2,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
        calories: "670 kcal",
        cuisineName: "Mexican"
    },
    {
        id: "mx-2",
        name: "Sizzling Steak & Chicken Fajita Platter",
        category: "mexican",
        price: 980,
        formattedPrice: "৳980",
        description: "Cast-iron skillet loaded with grilled marinated flank steak and chicken, bell peppers, onions, served with warm flour tortillas, guacamole, and salsa.",
        tags: ["Halal", "Sharing"],
        spiceLevel: 2,
        image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=800&q=80",
        calories: "740 kcal",
        cuisineName: "Mexican"
    },
    {
        id: "mx-3",
        name: "Loaded Anya Fiesta Nachos Supreme",
        category: "mexican",
        price: 620,
        formattedPrice: "৳620",
        description: "Stone-ground tortilla chips topped with spiced minced beef, warm queso sauce, jalapeños, pico de gallo, guacamole, and sour cream swirl.",
        tags: ["Popular", "Halal", "Sharing"],
        spiceLevel: 2,
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80",
        calories: "820 kcal",
        cuisineName: "Mexican"
    },

    // --- DRINKS & BEVERAGES ---
    {
        id: "dr-1",
        name: "Starlight Gold 24K Signature Mocktail",
        category: "drinks",
        price: 450,
        formattedPrice: "৳450",
        description: "Exotic passionfruit purée, yuzu citrus, sparkling white grape nectar, and edible 24K gold flakes served in a chilled crystal coupe.",
        tags: ["Signature", "Non-Alcoholic", "Luxury"],
        spiceLevel: 0,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
        calories: "140 kcal",
        cuisineName: "Beverages"
    },
    {
        id: "dr-2",
        name: "Royal Saffron Shahi Borhani",
        category: "drinks",
        price: 220,
        formattedPrice: "৳220",
        description: "Creamy whole-milk yogurt churned with toasted cumin, black salt, fresh mint, green chili extract, and Kashmiri saffron.",
        tags: ["Traditional", "Digestive"],
        spiceLevel: 1,
        image: "https://images.unsplash.com/photo-1571328003758-4a3921661729?auto=format&fit=crop&w=800&q=80",
        calories: "180 kcal",
        cuisineName: "Beverages"
    },
    {
        id: "dr-3",
        name: "Spanish Gold Caramel Iced Latte",
        category: "drinks",
        price: 360,
        formattedPrice: "৳360",
        description: "Double shot of 100% Arabica espresso, sweetened condensed milk, velvety chilled milk, topped with gold dusted caramel drizzle.",
        tags: ["Coffee", "Popular"],
        spiceLevel: 0,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
        calories: "220 kcal",
        cuisineName: "Beverages"
    },
    {
        id: "dr-4",
        name: "Midnight Blackberry & Mint Sparkler",
        category: "drinks",
        price: 340,
        formattedPrice: "৳340",
        description: "Muddled wild blackberries, fresh lime wedges, garden mint, topped with chilled sparkling club soda and crushed ice.",
        tags: ["Refreshing", "Non-Alcoholic"],
        spiceLevel: 0,
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
        calories: "110 kcal",
        cuisineName: "Beverages"
    },

    // --- DESSERTS ---
    {
        id: "ds-1",
        name: "Golden Molten Belgian Chocolate Lava",
        category: "dessert",
        price: 480,
        formattedPrice: "৳480",
        description: "Warm 70% dark Belgian cocoa cake with molten chocolate core, dusted with edible gold powder and paired with Tahitian vanilla bean ice cream.",
        tags: ["Chef Special", "Popular"],
        spiceLevel: 0,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        calories: "490 kcal",
        cuisineName: "Dessert"
    },
    {
        id: "ds-2",
        name: "Venetian Gold Tiramisu Classico",
        category: "dessert",
        price: 450,
        formattedPrice: "৳450",
        description: "Espresso-soaked Italian ladyfingers layered with whipped mascarpone cream and dusted with raw cocoa and gold chocolate pearls.",
        tags: ["Classic", "Artisanal"],
        spiceLevel: 0,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
        calories: "420 kcal",
        cuisineName: "Dessert"
    }
];

// Interior Showcase & Gallery Data
const galleryData = [
    {
        id: 1,
        title: "The Grand Starlight Hall",
        subtitle: "Black Marble & Gold Chandelier Main Dining",
        category: "interior",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 2,
        title: "VIP Anya Gold Lounge",
        subtitle: "Exclusive Private Dining for Special Celebrations",
        category: "interior",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 3,
        title: "Master Chef's Open Kitchen",
        subtitle: "100% Sanitized, Transparent Culinary Theatre",
        category: "hygiene",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 4,
        title: "Late-Night Starlight Terrace",
        subtitle: "Al-fresco Seating Under Dhaka's Night Sky (Open till 2 AM)",
        category: "interior",
        image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 5,
        title: "Gold Bar & Mocktail Station",
        subtitle: "Handcrafted Artisan Drinks & Specialty Brews",
        category: "drinks",
        image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 6,
        title: "Executive Private Booths",
        subtitle: "Secluded Ambiance for Intimate Conversations",
        category: "interior",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
    }
];

// Testimonials & Reviews
const reviewsData = [
    {
        id: 1,
        name: "Tanvir Ahmed",
        role: "Gulshan Resident & Food Critic",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "October 18, 2026",
        comment: "Starlight Anya is hands down the most stunning restaurant in Gulshan. The black and gold interior is breathtaking, but what impressed me most was the spotless hygiene. You can literally watch the chefs work in an immaculate kitchen. The Mutton Kacchi and Truffle Fettuccine are absolute masterclasses!",
        favoriteDish: "Shahi Mutton Kacchi & Truffle Fettuccine"
    },
    {
        id: 2,
        name: "Nusrat Jahan",
        role: "Corporate Director",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "October 14, 2026",
        comment: "Hosted our executive dinner in the VIP Gold Lounge. The waitstaff were exceptionally polite, well-groomed, and attentive without being intrusive. Having 6:00 AM to 2:00 AM hours is a blessing for Gulshan. The Birria Tacos and Gold Mocktail are must-tries!",
        favoriteDish: "Birria Beef Tacos & Gold Mocktail"
    },
    {
        id: 3,
        name: "Rahat Chowdhury",
        role: "Diplomatic Enclave Member",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "October 09, 2026",
        comment: "Exceptional dining standards in Dhaka! Every cutlery piece is sealed and sanitized. The Beef Kala Bhuna carries authentic Chittagonian depth, while the Wagyu Smash Burger beats anything in Banani. Highly recommended for family celebrations.",
        favoriteDish: "Traditional Beef Kala Bhuna"
    },
    {
        id: 4,
        name: "Sarah Miller",
        role: "Expat in Dhaka",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        date: "September 28, 2026",
        comment: "Finding authentic multi-cuisine where both Italian pizza and Indian butter chicken taste world-class is rare. Starlight Anya nailed both. Also, the late-night 1 AM terrace vibe is magical with the gold ambient lighting.",
        favoriteDish: "Butter Chicken & Wood-Fired Pizza"
    }
];

// Hygiene & Cleanliness Commitments
const hygienePillars = [
    {
        icon: "fa-shield-virus",
        title: "Medical-Grade Sanitization",
        desc: "All cutlery, crockery, and glassware are treated with commercial high-temperature dishwashing and UV-C sterilization chambers before every single service."
    },
    {
        icon: "fa-temperature-low",
        title: "Cold-Chain Integrity",
        desc: "Strict temperature-controlled ingredient storage ensuring all meats, seafood, and dairy maintain pristine freshness with zero cross-contamination."
    },
    {
        icon: "fa-user-nurse",
        title: "Groomed & Certified Staff",
        desc: "Our culinary brigade and service personnel undergo bi-weekly health screenings, wear food-grade protective gear, and practice contactless food staging."
    },
    {
        icon: "fa-wind",
        title: "HEPA & UV Air Purification",
        desc: "Continuous hospital-grade air exchange and dual filtration systems throughout the dining halls, lounges, and kitchen to ensure pure ambient air."
    }
];

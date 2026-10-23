/**
 * Starlight Anya Restaurant - Core JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMenu();
    initGallery();
    initReviews();
    initReservations();
    initToast();
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
    const navbar = document.getElementById('main-navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Scroll Navbar Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar?.classList.add('nav-scrolled');
        } else {
            navbar?.classList.remove('nav-scrolled');
        }
    });

    // Mobile Menu Toggle
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                mobileToggle.innerHTML = '<i class="fa-solid fa-bars text-2xl text-[#d4af37]"></i>';
            } else {
                mobileMenu.classList.remove('hidden');
                mobileToggle.innerHTML = '<i class="fa-solid fa-xmark text-2xl text-[#d4af37]"></i>';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (mobileToggle) {
                    mobileToggle.innerHTML = '<i class="fa-solid fa-bars text-2xl text-[#d4af37]"></i>';
                }
            });
        });
    }
}

/* ==========================================================================
   2. MENU FILTERING & RENDERING
   ========================================================================== */
function initMenu() {
    const menuContainer = document.getElementById('menu-grid-container');
    const filterButtons = document.querySelectorAll('.menu-filter-btn');
    const searchInput = document.getElementById('menu-search-input');

    if (!menuContainer || typeof menuData === 'undefined') return;

    let currentCategory = 'all';
    let searchQuery = '';

    function renderMenuItems() {
        const filtered = menuData.filter(item => {
            const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  item.cuisineName.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            menuContainer.innerHTML = `
                <div class="col-span-full text-center py-16 text-gray-400">
                    <i class="fa-solid fa-utensils text-4xl text-[#d4af37]/40 mb-4 block"></i>
                    <p class="text-xl font-cinzel text-white">No dishes found matching your selection.</p>
                    <p class="text-sm mt-1">Try another cuisine filter or search term.</p>
                </div>
            `;
            return;
        }

        menuContainer.innerHTML = filtered.map(item => {
            const tagsHtml = item.tags.map(tag => {
                let badgeClass = 'badge-gold';
                if (tag === 'Chef Special') badgeClass = 'bg-[#d4af37] text-black font-semibold';
                if (tag === 'Spicy') badgeClass = 'bg-red-950/80 text-red-300 border border-red-800';
                if (tag === 'Vegetarian') badgeClass = 'bg-emerald-950/80 text-emerald-300 border border-emerald-800';
                return `<span class="text-[11px] px-2.5 py-0.5 rounded-full ${badgeClass}">${tag}</span>`;
            }).join('');

            // Spice level peppers
            let spiceHtml = '';
            if (item.spiceLevel > 0) {
                spiceHtml = `<span class="text-red-400 text-xs flex items-center gap-0.5" title="Spice level: ${item.spiceLevel}/3">
                    ${'<i class="fa-solid fa-pepper-hot"></i>'.repeat(item.spiceLevel)}
                </span>`;
            }

            return `
                <div class="luxury-card rounded-lg overflow-hidden flex flex-col justify-between group">
                    <div class="relative img-zoom-container h-52 bg-neutral-900">
                        <img src="${item.image}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-transparent to-black/20"></div>
                        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                            ${tagsHtml}
                        </div>
                        <div class="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-[#d4af37]/40 text-[#f5e297] font-bold text-sm">
                            ${item.formattedPrice}
                        </div>
                        <div class="absolute bottom-2 left-3 text-xs text-amber-300/80 font-cinzel uppercase tracking-wider">
                            ${item.cuisineName}
                        </div>
                    </div>

                    <div class="p-5 flex-1 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between gap-2 mb-2">
                                <h3 class="text-lg font-cinzel font-bold text-white group-hover:text-[#f5e297] transition-colors leading-snug">
                                    ${item.name}
                                </h3>
                                ${spiceHtml}
                            </div>
                            <p class="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
                                ${item.description}
                            </p>
                        </div>

                        <div class="pt-4 border-t border-[#d4af37]/15 flex items-center justify-between">
                            <span class="text-xs text-gray-500"><i class="fa-regular fa-clock mr-1 text-[#d4af37]"></i> Freshly prepared</span>
                            <button onclick="orderViaWhatsApp('${encodeURIComponent(item.name)}', '${item.formattedPrice}')" 
                                    class="text-xs bg-[#d4af37]/10 hover:bg-[#d4af37] text-[#f5e297] hover:text-black border border-[#d4af37]/40 font-semibold px-3 py-1.5 rounded transition-all flex items-center gap-1.5">
                                <i class="fa-brands fa-whatsapp text-sm"></i> Order ৳
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Filter Buttons Click
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('bg-[#d4af37]', 'text-black', 'active');
                b.classList.add('bg-neutral-900', 'text-gray-300', 'border-[#d4af37]/30');
            });
            btn.classList.add('bg-[#d4af37]', 'text-black', 'active');
            btn.classList.remove('bg-neutral-900', 'text-gray-300', 'border-[#d4af37]/30');
            
            currentCategory = btn.getAttribute('data-category') || 'all';
            renderMenuItems();
        });
    });

    // Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderMenuItems();
        });
    }

    // Initial Render
    renderMenuItems();
}

// Quick WhatsApp Order Action
window.orderViaWhatsApp = function(dishName, price) {
    const text = `Hello Starlight Anya! I would like to order the *${decodeURIComponent(dishName)}* (${price}) from your Saidnagar, Gulshan restaurant. Please let me know the preparation time and delivery/takeaway details.`;
    const url = `https://wa.me/8801711234567?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
};

/* ==========================================================================
   3. GALLERY & LIGHTBOX
   ========================================================================== */
function initGallery() {
    const galleryContainer = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxSubtitle = document.getElementById('lightbox-subtitle');
    const lightboxClose = document.getElementById('lightbox-close');

    if (!galleryContainer || typeof galleryData === 'undefined') return;

    galleryContainer.innerHTML = galleryData.map(item => `
        <div class="relative group img-zoom-container rounded-lg overflow-hidden cursor-pointer h-72 border border-[#d4af37]/20"
             onclick="openLightbox('${item.image}', '${item.title}', '${item.subtitle}')">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span class="text-xs text-[#d4af37] font-cinzel tracking-wider uppercase mb-1">
                    <i class="fa-solid fa-sparkles mr-1"></i> ${item.category}
                </span>
                <h4 class="text-lg font-cinzel font-bold text-white group-hover:text-[#f5e297] transition-colors">
                    ${item.title}
                </h4>
                <p class="text-xs text-gray-300 mt-1 line-clamp-1">${item.subtitle}</p>
                <div class="mt-3 inline-flex items-center text-xs text-[#d4af37] font-semibold gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Enlarge view</span> <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </div>
            </div>
        </div>
    `).join('');

    window.openLightbox = function(src, title, subtitle) {
        if (!lightbox) return;
        lightboxImg.src = src;
        lightboxTitle.innerText = title;
        lightboxSubtitle.innerText = subtitle;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/* ==========================================================================
   4. TESTIMONIALS & RATING SYSTEM
   ========================================================================== */
function initReviews() {
    const reviewsContainer = document.getElementById('reviews-slider');
    const reviewForm = document.getElementById('review-form');
    const starsContainer = document.getElementById('star-rating-select');
    let selectedStar = 5;

    if (!reviewsContainer || typeof reviewsData === 'undefined') return;

    function renderReviews() {
        reviewsContainer.innerHTML = reviewsData.map(rev => {
            const stars = Array(5).fill(0).map((_, i) => 
                `<i class="fa-solid fa-star ${i < rev.rating ? 'text-[#d4af37]' : 'text-gray-600'} text-sm"></i>`
            ).join('');

            return `
                <div class="luxury-card p-6 rounded-lg relative flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <img src="${rev.avatar}" alt="${rev.name}" class="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37]/60">
                                <div>
                                    <h4 class="font-cinzel font-bold text-white text-base">${rev.name}</h4>
                                    <p class="text-xs text-[#d4af37]">${rev.role}</p>
                                </div>
                            </div>
                            <div class="flex gap-1">${stars}</div>
                        </div>
                        <p class="text-sm text-gray-300 leading-relaxed italic mb-4">
                            "${rev.comment}"
                        </p>
                    </div>
                    <div class="pt-3 border-t border-[#d4af37]/15 flex items-center justify-between text-xs text-gray-500">
                        <span><i class="fa-solid fa-heart text-[#d4af37]/80 mr-1"></i> ${rev.favoriteDish}</span>
                        <span>${rev.date}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderReviews();

    // Star Selector in Modal
    if (starsContainer) {
        const stars = starsContainer.querySelectorAll('i');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                selectedStar = parseInt(star.getAttribute('data-value'));
                stars.forEach(s => {
                    const val = parseInt(s.getAttribute('data-value'));
                    if (val <= selectedStar) {
                        s.classList.remove('text-gray-600');
                        s.classList.add('text-[#d4af37]');
                    } else {
                        s.classList.add('text-gray-600');
                        s.classList.remove('text-[#d4af37]');
                    }
                });
            });
        });
    }

    // Submit Review Form
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('rev-name')?.value.trim() || 'Valued Guest';
            const role = document.getElementById('rev-role')?.value.trim() || 'Gulshan Diner';
            const dish = document.getElementById('rev-dish')?.value.trim() || 'Multi-Cuisine Specialties';
            const comment = document.getElementById('rev-comment')?.value.trim() || '';

            if (!comment) {
                showToast('Please enter your feedback comment.', 'error');
                return;
            }

            const newReview = {
                id: reviewsData.length + 1,
                name: name,
                role: role,
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
                rating: selectedStar,
                date: "Just now",
                comment: comment,
                favoriteDish: dish
            };

            reviewsData.unshift(newReview);
            renderReviews();
            reviewForm.reset();
            closeReviewModal();
            showToast('Thank you! Your review has been published.', 'success');
        });
    }
}

window.openReviewModal = function() {
    const modal = document.getElementById('review-modal');
    if (modal) modal.classList.remove('hidden');
};

window.closeReviewModal = function() {
    const modal = document.getElementById('review-modal');
    if (modal) modal.classList.add('hidden');
};

/* ==========================================================================
   5. RESERVATION SYSTEM (6 AM – 2 AM SLOTS)
   ========================================================================== */
function initReservations() {
    const reservationForm = document.getElementById('reservation-form');
    const timeSelect = document.getElementById('res-time');

    // Populate 6 AM to 2 AM slots dynamically if timeSelect is present
    if (timeSelect && timeSelect.children.length <= 1) {
        const slots = [
            "06:00 AM (Early Breakfast)", "07:00 AM", "08:30 AM", "10:00 AM",
            "11:30 AM", "01:00 PM (Executive Lunch)", "02:30 PM", "04:00 PM (High Tea)",
            "05:30 PM", "07:00 PM (Prime Dinner)", "08:30 PM (Prime Dinner)",
            "10:00 PM (Late Dining)", "11:30 PM (Midnight Supper)", "01:00 AM (Starlight Late Hour)"
        ];

        slots.forEach(slot => {
            const opt = document.createElement('option');
            opt.value = slot;
            opt.textContent = slot;
            opt.className = 'bg-[#15151e] text-white';
            timeSelect.appendChild(opt);
        });
    }

    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('res-name')?.value.trim();
            const phone = document.getElementById('res-phone')?.value.trim();
            const email = document.getElementById('res-email')?.value.trim();
            const guests = document.getElementById('res-guests')?.value;
            const date = document.getElementById('res-date')?.value;
            const time = document.getElementById('res-time')?.value;
            const zone = document.getElementById('res-zone')?.value || 'Grand Starlight Hall';
            const notes = document.getElementById('res-notes')?.value.trim() || 'None';

            if (!name || !phone || !date || !time) {
                showToast('Please fill in all mandatory reservation details.', 'error');
                return;
            }

            // Generate Booking ID
            const bookingId = 'STA-' + Math.floor(100000 + Math.random() * 900000);

            // Populate confirmation modal
            const confModal = document.getElementById('confirmation-modal');
            const confDetails = document.getElementById('conf-details');
            const whatsappBtn = document.getElementById('conf-whatsapp-btn');

            if (confDetails) {
                confDetails.innerHTML = `
                    <div class="space-y-2 text-sm text-gray-300">
                        <div class="flex justify-between border-b border-[#d4af37]/20 pb-1.5">
                            <span class="text-gray-400">Booking Reference:</span>
                            <span class="font-bold text-[#f5e297] font-cinzel">${bookingId}</span>
                        </div>
                        <div class="flex justify-between border-b border-[#d4af37]/20 pb-1.5">
                            <span class="text-gray-400">Guest Name:</span>
                            <span class="text-white font-medium">${name}</span>
                        </div>
                        <div class="flex justify-between border-b border-[#d4af37]/20 pb-1.5">
                            <span class="text-gray-400">Guests:</span>
                            <span class="text-white font-medium">${guests} Person(s)</span>
                        </div>
                        <div class="flex justify-between border-b border-[#d4af37]/20 pb-1.5">
                            <span class="text-gray-400">Date & Time:</span>
                            <span class="text-[#d4af37] font-medium">${date} at ${time}</span>
                        </div>
                        <div class="flex justify-between border-b border-[#d4af37]/20 pb-1.5">
                            <span class="text-gray-400">Seating Zone:</span>
                            <span class="text-white font-medium">${zone}</span>
                        </div>
                        <div class="flex justify-between border-b border-[#d4af37]/20 pb-1.5">
                            <span class="text-gray-400">Location:</span>
                            <span class="text-white font-medium">Saidnagar, Gulshan, Dhaka-1212</span>
                        </div>
                        <div class="pt-2 text-xs text-gray-400">
                            *Our host will hold your reserved table for 15 minutes past the booking time.
                        </div>
                    </div>
                `;
            }

            if (whatsappBtn) {
                const message = `Hello Starlight Anya! I just requested a table reservation:\n\n*Reference:* ${bookingId}\n*Name:* ${name}\n*Guests:* ${guests}\n*Date & Time:* ${date} at ${time}\n*Zone:* ${zone}\n*Phone:* ${phone}\n*Notes:* ${notes}\n\nPlease confirm availability. Thank you!`;
                whatsappBtn.href = `https://wa.me/8801711234567?text=${encodeURIComponent(message)}`;
            }

            if (confModal) confModal.classList.remove('hidden');
            reservationForm.reset();
            showToast('Table reservation submitted successfully!', 'success');
        });
    }
}

window.closeConfirmationModal = function() {
    const confModal = document.getElementById('confirmation-modal');
    if (confModal) confModal.classList.add('hidden');
};

/* ==========================================================================
   6. TOAST SYSTEM
   ========================================================================== */
function initToast() {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
}

window.showToast = function(message, type = 'info') {
    const container = document.getElementById('toast-container') || document.body;
    const toast = document.createElement('div');
    toast.className = 'toast';

    let icon = '<i class="fa-solid fa-circle-check text-[#d4af37] text-lg"></i>';
    if (type === 'error') {
        icon = '<i class="fa-solid fa-circle-exclamation text-red-400 text-lg"></i>';
    }

    toast.innerHTML = `${icon}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 4500);
};

/* ==========================================================================
   7. TAKEAWAY & DELIVERY MODAL
   ========================================================================== */
window.openDeliveryModal = function() {
    const modal = document.getElementById('delivery-modal');
    if (modal) modal.classList.remove('hidden');
};

window.closeDeliveryModal = function() {
    const modal = document.getElementById('delivery-modal');
    if (modal) modal.classList.add('hidden');
};

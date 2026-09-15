/* ==========================================================================
   BLU IDOL - BRAND REDESIGN INTERACTIVE LOGIC
   ========================================================================== */

// --- Product Database ---
const products = [
  {
    id: 5,
    name: "Anti tarnish 3D Puffy Heart Pendant chain",
    category: "necklaces",
    price: 210,
    originalPrice: 399,
    image: "images/puffy-heart-pendant.png",
    stars: 5,
    reviews: 34,
    badge: "Trending",
    description: "Charming 3D puffy heart pendant suspended on a delicate 18K gold-plated beaded snake chain. Crafted from premium anti-tarnish, waterproof, and hypoallergenic stainless steel for effortless daily elegance."
  },
  {
    id: 6,
    name: "Dainty Ruby Tulip Pendant Chain",
    category: "necklaces",
    price: 210,
    originalPrice: 399,
    image: "images/ruby-tulip-pendant.png",
    stars: 5,
    reviews: 29,
    badge: "New",
    description: "Graceful floral-inspired pendant featuring sparkling faceted ruby-red crystals in a delicate tulip leaf motif. Set on an 18K gold-plated anti-tarnish chain designed for waterproof daily wear."
  },
  {
    id: 7,
    name: "Stainless crystal tulip pendant necklace",
    category: "necklaces",
    price: 239,
    originalPrice: 449,
    image: "images/crystal-tulip-necklace.png",
    stars: 5,
    reviews: 41,
    badge: "Trending",
    description: "Delicate crystal tulip pendant featuring sparkling faceted cubic zirconia petals set in an 18K gold-plated stainless steel setting. Anti-tarnish, waterproof, and hypoallergenic for everyday luxury."
  },
  {
    id: 8,
    name: "Gold-Plated Rectangular Moonstone Pendant Necklace",
    category: "necklaces",
    price: 289,
    originalPrice: 499,
    image: "images/rectangular-moonstone-necklace.png",
    stars: 5,
    reviews: 38,
    badge: "Bestseller",
    description: "Elegantly crafted rectangular luminous moonstone pendant encased in an 18K gold-plated bezel on a sleek snake chain. Anti-tarnish, waterproof, and hypoallergenic for everyday sophistication."
  },
  {
    id: 9,
    name: "Anti-Tarnish Vintage Gold-Plated Tulip Flower Pendant Necklace",
    category: "necklaces",
    price: 249,
    originalPrice: 449,
    image: "images/vintage-tulip-necklace.png",
    stars: 5,
    reviews: 36,
    badge: "Trending",
    description: "Vintage-inspired oval pendant featuring an embossed gold tulip on a mother-of-pearl enamel medallion, suspended on an 18K gold-plated beaded snake chain. Anti-tarnish, waterproof, and hypoallergenic."
  },
  {
    id: 10,
    name: "Stainless Modern Gold Pendant Necklace",
    category: "necklaces",
    price: 259,
    originalPrice: 499,
    image: "images/modern-gold-pendant-necklace.png",
    stars: 5,
    reviews: 44,
    badge: "New",
    description: "Modern geometric bar necklace featuring four bezel-set sparkling pear-cut crystal drops on an 18K gold-plated stainless steel chain. Anti-tarnish, waterproof, and hypoallergenic."
  },
  {
    id: 11,
    name: "Diamond Wave Bar Necklace",
    category: "necklaces",
    price: 199,
    originalPrice: 399,
    image: "images/diamond-wave-necklace.png",
    stars: 5,
    reviews: 32,
    badge: "Trending",
    description: "Graceful curved wave bar pendant adorned with pavé-set shimmering cubic zirconia stones on a delicate sterling-finish chain. Anti-tarnish, waterproof, and hypoallergenic."
  },
  {
    id: 12,
    name: "Gold-Plated Maple Leaf Station Charm Necklace",
    category: "necklaces",
    price: 265,
    originalPrice: 499,
    image: "images/maple-leaf-necklace.png",
    stars: 5,
    reviews: 27,
    badge: "New",
    description: "Whimsical autumn-inspired station necklace featuring finely detailed gold maple leaf charms and bezel-set sparkling crystals on a satellite chain. Anti-tarnish, waterproof, and hypoallergenic."
  },
  {
    id: 13,
    name: "Oxidized Silver Floral Jewelry Set",
    category: "necklaces",
    price: 165,
    originalPrice: 349,
    image: "images/oxidized-silver-floral-set.png",
    stars: 5,
    reviews: 53,
    badge: "Bestseller",
    description: "Traditional heritage oxidized silver necklace set embellished with vibrant ruby-red and emerald-green floral motifs, complete with matching stud earrings. Hypoallergenic and skin-safe."
  },
  {
    id: 14,
    name: "Gold-Plated Green Cat's Eye Heart Pendant Necklace",
    category: "necklaces",
    price: 199,
    originalPrice: 399,
    image: "images/green-heart-catseye-necklace.png",
    stars: 5,
    reviews: 39,
    badge: "Trending",
    description: "Captivating two-tone heart pendant featuring a lustrous green cat's eye stone paired with mirror-polished 18K gold plating on a dainty chain. Waterproof and hypoallergenic."
  },
  {
    id: 15,
    name: "Minimalist Gold-Plated Stainless Steel Charm Bracelet",
    category: "bracelets",
    price: 189,
    originalPrice: 349,
    image: "images/gold-charm-bracelet.png",
    stars: 5,
    reviews: 45,
    badge: "New",
    description: "Dainty 18K gold-plated stainless steel charm bracelet adorned with dangling polished disc charms and multicolor jewel-toned crystal accents. 100% waterproof and rust-proof."
  },
  {
    id: 16,
    name: "Gold-Plated Beaded Snake Chain Anklet",
    category: "anklets",
    price: 90,
    originalPrice: 199,
    image: "images/beaded-snake-chain-anklets.png",
    stars: 5,
    reviews: 68,
    badge: "Bestseller",
    description: "Shimmering 18K gold-plated beaded satellite snake chain anklet (Price ₹90 each). Features micro-bead stations on a fluid snake chain with secure lobster clasp. Waterproof and tarnish-free."
  },
  {
    id: 17,
    name: "Gold-Plated Emerald-Cut Purple Gemstone Leaf Stud Earrings",
    category: "earrings",
    price: 259,
    originalPrice: 499,
    image: "images/purple-gemstone-leaf-stud-earrings.png",
    stars: 5,
    reviews: 42,
    badge: "New Drop",
    description: "Stunning leaf-motif stud earrings featuring an emerald-cut vibrant purple gemstone bordered by pavé-set shimmering cubic zirconia leaves in rich 18K gold plating. Hypoallergenic and lightweight for daily luxury."
  },
  {
    id: 18,
    name: "Gold-Plated CZ Violet Blossom Ear Tops",
    category: "earrings",
    price: 259,
    originalPrice: 499,
    image: "images/cz-violet-blossom-ear-tops.png",
    stars: 5,
    reviews: 38,
    badge: "Trending",
    description: "Delicate circular spiral ear tops showcasing a five-petal blooming violet crystal flower framed by a dazzling pavé crystal orbit in 18K gold plating. Waterproof, hypoallergenic, and perfect for special occasions."
  },
  {
    id: 19,
    name: "Gold-Plated Emerald Blossom CZ Stud Earrings",
    category: "earrings",
    price: 249,
    originalPrice: 449,
    image: "images/emerald-blossom-cz-earrings.png",
    stars: 5,
    reviews: 46,
    badge: "Bestseller",
    description: "Captivating dual-halo open circle earrings adorned with pear-cut ruby-pink and emerald-green gemstones, encircled by sparkling cubic zirconia pavé. Crafted with 18K gold plating for sensitive skin."
  },
  {
    id: 20,
    name: "Gold-Plated Ruby Floral Halo Stud Earrings",
    category: "earrings",
    price: 249,
    originalPrice: 449,
    image: "images/ruby-floral-halo-stud-earrings.png",
    stars: 5,
    reviews: 35,
    badge: "New",
    description: "Exquisite concentric halo stud earrings featuring a five-petal ruby-pink crystal blossom crowned with micro pavé cubic zirconia. Finished in durable 18K gold plating for anti-tarnish everyday wear."
  },
  {
    id: 21,
    name: "Gold-Plated Sparkling Floral Stud Earrings",
    category: "earrings",
    price: 289,
    originalPrice: 529,
    image: "images/sparkling-floral-stud-earrings.png",
    stars: 5,
    reviews: 52,
    badge: "Bestseller",
    description: "Lustrous flower stud earrings crafted with faceted teardrop cubic zirconia petals and a rich amethyst-purple center stone, mounted on 18K gold-plated setting. High-shine, tarnish-resistant, and skin-safe."
  },
  {
    id: 22,
    name: "Gold-Plated American Diamond Emerald Stud Earrings",
    category: "earrings",
    price: 259,
    originalPrice: 499,
    image: "images/american-diamond-emerald-stud-earrings.png",
    stars: 5,
    reviews: 41,
    badge: "Trending",
    description: "Regal teardrop-shaped stud earrings centered with a brilliant round emerald-green gemstone within concentric pavé American diamond halos and a marquise crown. 18K gold-plated demi-fine elegance."
  },
  {
    id: 23,
    name: "Gold-Plated American Diamond Floral Stud Earrings",
    category: "earrings",
    price: 199,
    originalPrice: 399,
    image: "images/american-diamond-floral-stud-earrings.png",
    stars: 5,
    reviews: 49,
    badge: "Trending",
    description: "Intricate sunburst floral stud earrings featuring a luminous pear-cut central stone encircled by an openwork filigree of glittering American diamonds. Anti-tarnish, lightweight, and skin-friendly."
  },
  {
    id: 24,
    name: "Gold-Plated Crescent Stud Earrings",
    category: "earrings",
    price: 259,
    originalPrice: 499,
    image: "images/crescent-stud-earrings.png",
    stars: 5,
    reviews: 33,
    badge: "New",
    description: "Artisan fan-shaped crescent earrings featuring a vibrant square-cut amethyst-purple gemstone blooming into marquise crystal petals and tiered diamond arches. 18K gold-plated statement design."
  },
  {
    id: 25,
    name: "Gold-Plated Dual-Tone Blossom Halo Earrings",
    category: "earrings",
    price: 249,
    originalPrice: 449,
    image: "images/dualtone-blossom-halo-earrings.png",
    stars: 5,
    reviews: 39,
    badge: "Bestseller",
    description: "Radiant double halo circular earrings featuring an artisanal floral crest with ruby-pink and peridot-green marquise petals accented by clear cubic zirconia. Hypoallergenic 18K gold vacuum plating."
  },
  {
    id: 26,
    name: "Charming Gold-Plated Floral Stud Earrings",
    category: "earrings",
    price: 165,
    originalPrice: 349,
    image: "images/charming-floral-stud-earrings.png",
    stars: 5,
    reviews: 57,
    badge: "Trending",
    description: "Charming floral branch stud earrings featuring a sparkling six-petal ruby flower blooming over faceted ruby and clear marquise leaves. 18K gold-plated, featherweight, and gentle on sensitive ears."
  },
  {
    id: 27,
    name: "Gold-Plated Cubic Zirconia Drop Earrings",
    category: "earrings",
    price: 249,
    originalPrice: 449,
    image: "images/cz-drop-earrings.png",
    stars: 5,
    reviews: 44,
    badge: "New Drop",
    description: "Graceful chandelier-style geometric drop earrings with intricate crystal lace framework suspending a faceted pear-cut crystal teardrop. 18K gold-plated, waterproof, and designed to turn heads."
  },
  {
    id: 28,
    name: "Premium Antique Gold Elephant Motif Jhumka (Black)",
    category: "jhumkas",
    price: 99,
    originalPrice: 199,
    image: "images/antique-gold-elephant-jhumka-black.png",
    stars: 5,
    reviews: 65,
    badge: "Bestseller",
    description: "Majestic antique gold jhumka earrings featuring intricately carved royal elephant studs adorned with black teardrop crystals, suspending grand filigree bell domes with dangling black beads. Lightweight and hypoallergenic."
  },
  {
    id: 29,
    name: "Premium Antique Gold Elephant Motif Jhumka (Maroon)",
    category: "jhumkas",
    price: 99,
    originalPrice: 199,
    image: "images/antique-gold-elephant-jhumka-maroon.png",
    stars: 5,
    reviews: 58,
    badge: "Trending",
    description: "Royal elephant motif antique gold jhumka earrings embellished with rich maroon-red crystals and tiered bell domes finished with faceted maroon bead drops. Perfect for festive celebrations."
  },
  {
    id: 30,
    name: "Antique Gold Traditional Bell Jhumka Earrings (Ruby Red)",
    category: "jhumkas",
    price: 119,
    originalPrice: 249,
    image: "images/antique-gold-bell-jhumka-ruby.png",
    stars: 5,
    reviews: 47,
    badge: "New",
    description: "Classic Indian heritage jhumkas featuring an embossed geometric square top with ruby red enamel accents, suspending ornate antique gold bell domes fringed with vivid ruby-red beads."
  },
  {
    id: 31,
    name: "Antique Gold Traditional Bell Jhumka Earrings (Black)",
    category: "jhumkas",
    price: 119,
    originalPrice: 249,
    image: "images/antique-gold-bell-jhumka-black.png",
    stars: 5,
    reviews: 54,
    badge: "Bestseller",
    description: "Sophisticated antique gold traditional jhumkas with filigree square posts centered with jet-black stones, suspending textured bell domes with dangling black glass beads."
  },
  {
    id: 32,
    name: "Antique Gold Traditional Bell Jhumka Earrings (Emerald Green)",
    category: "jhumkas",
    price: 119,
    originalPrice: 249,
    image: "images/antique-gold-bell-jhumka-green.png",
    stars: 5,
    reviews: 42,
    badge: "Trending",
    description: "Traditional temple-inspired antique gold jhumkas adorned with radiant emerald-green enamel centers and matching green droplet beads. Tarnish-resistant and nickel-free."
  },
  {
    id: 33,
    name: "Antique Goddess Lakshmi Jhumka Earrings",
    category: "jhumkas",
    price: 45,
    originalPrice: 99,
    image: "images/antique-lakshmi-jhumka-earrings.png",
    stars: 5,
    reviews: 89,
    badge: "Bestseller",
    description: "Auspicious temple jewellery earrings featuring seated Goddess Lakshmi on a blooming lotus, accented by an arc of black beaded droplets. Antique matte gold finish for timeless elegance."
  },
  {
    id: 34,
    name: "Antique Radha Krishna Gold-Plated Jhumka Earrings",
    category: "jhumkas",
    price: 45,
    originalPrice: 99,
    image: "images/antique-radha-krishna-jhumka-earrings.png",
    stars: 5,
    reviews: 76,
    badge: "Trending",
    description: "Devotional handcrafted earrings depicting Lord Krishna playing the flute with Radha, bordered by floral filigree and lustrous champagne-pearl bead drops in warm antique gold plating."
  },
  {
    id: 35,
    name: "Gold-Plated Lakshmi Temple Design Grand Jhumkas",
    category: "jhumkas",
    price: 185,
    originalPrice: 399,
    image: "images/gold-plated-lakshmi-temple-grand-jhumkas.png",
    stars: 5,
    reviews: 63,
    badge: "Royal Drop",
    description: "Grand three-tier temple jhumkas featuring Goddess Lakshmi crowned above twin peacock motifs with emerald stones, suspending intricately filigreed bell domes with dangling blush-pink pearls."
  },
  {
    id: 36,
    name: "Antique Peacock Jhumkas (Black Bead Drops)",
    category: "jhumkas",
    price: 165,
    originalPrice: 349,
    image: "images/antique-peacock-jhumkas-black.png",
    stars: 5,
    reviews: 59,
    badge: "Bestseller",
    description: "Majestic sculpted peacock posts encrusted with black crystals, gracefully carrying large carved antique gold jhumka bells finished with polished black bead hangings."
  },
  {
    id: 37,
    name: "Antique Peacock Jhumkas (Emerald Green Drops)",
    category: "jhumkas",
    price: 165,
    originalPrice: 349,
    image: "images/antique-peacock-jhumkas-green.png",
    stars: 5,
    reviews: 51,
    badge: "Trending",
    description: "Exquisite antique gold peacock jhumkas with emerald-green micro crystal pavé wings, holding traditional jhumka domes with vibrant emerald bead fringes."
  },
  {
    id: 38,
    name: "Antique Butterfly Minimal Jhumkas (Turquoise)",
    category: "jhumkas",
    price: 89,
    originalPrice: 189,
    image: "images/antique-butterfly-minimal-jhumkas-turquoise.png",
    stars: 5,
    reviews: 48,
    badge: "New",
    description: "Playful butterfly-top jhumka earrings set with luminous sea-green/turquoise glass petals, suspending delicate textured jhumka bells with cluster bead tassels in antique gold finish."
  },
  {
    id: 39,
    name: "Palakya Long Jhumkas (Magenta Pink)",
    category: "jhumkas",
    price: 155,
    originalPrice: 329,
    image: "images/palakya-long-jhumkas-magenta.png",
    stars: 5,
    reviews: 61,
    badge: "Bestseller",
    description: "Elongated Palakya-style chandelier jhumkas featuring two tiers of geometric magenta crystal stations leading to a prominent bell dome adorned with vibrant magenta bead hangings."
  },
  {
    id: 40,
    name: "Oxidised Gold-Plated Rhombus Pearl Jhumkas",
    category: "jhumkas",
    price: 185,
    originalPrice: 399,
    image: "images/oxidised-gold-rhombus-pearl-jhumkas.png",
    stars: 5,
    reviews: 55,
    badge: "Royal Drop",
    description: "Regal drop jhumkas featuring a diamond-shaped post set with a cushion-cut ruby stone, elongated fluted stem, and grand antique gold bell dome fringed with glowing white pearls."
  },
  {
    id: 41,
    name: "Traditional Antique Temple Chandelier Earrings (Royal Blue)",
    category: "jhumkas",
    price: 125,
    originalPrice: 259,
    image: "images/traditional-antique-temple-earrings-blue.png",
    stars: 5,
    reviews: 43,
    badge: "New",
    description: "Ornate temple earrings showcasing a fan crest with Goddess Lakshmi flanked by twin dancing peacocks, finished with a crescent fringe of vibrant royal-blue beaded droplets."
  },
  {
    id: 42,
    name: "Traditional Antique Temple Chandelier Earrings (Ruby Red)",
    category: "jhumkas",
    price: 125,
    originalPrice: 259,
    image: "images/traditional-antique-temple-earrings-red.png",
    stars: 5,
    reviews: 49,
    badge: "Trending",
    description: "Festive temple chandelier earrings featuring Goddess Lakshmi with peacocks in antique gold, accented with sparkling ruby-red stones and matching hanging ruby bead tassels."
  },
  {
    id: 43,
    name: "Palakya Long Jhumkas (Jet Black)",
    category: "jhumkas",
    price: 155,
    originalPrice: 329,
    image: "images/palakya-long-jhumkas-black.png",
    stars: 5,
    reviews: 58,
    badge: "Bestseller",
    description: "Statement Palakya two-tier long jhumkas featuring clover and shield jet-black stone posts, suspending a deep fluted antique gold bell dome with swaying black glass beads."
  },
  {
    id: 44,
    name: "Lotus Choker Necklace Set",
    category: "necklaces",
    price: 155,
    originalPrice: 349,
    image: "images/lotus-choker-necklace-set.png",
    stars: 5,
    reviews: 52,
    badge: "Bestseller",
    description: "Traditional antique gold-finish lotus choker necklace featuring alternating ruby-pink and emerald-green gemstone lotus petals, complete with matching lotus floral stud earrings. Hypoallergenic and skin-safe."
  }
];

// --- Application State ---
let cart = JSON.parse(localStorage.getItem('blu_idol_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('blu_idol_wishlist')) || [];

// --- DOM Elements ---
document.addEventListener('DOMContentLoaded', () => {
  initAnnouncementBar();
  initHeaderScroll();
  initMobileMenu();
  initProductFilters();
  initCategoryHashNav();
  initTestimonialSlider();
  initCart();
  initWishlist();
  initQuickView();
  initBackToTop();
  initNewsletter();
  initMobileBottomBar();
  initWhatsAppTracking();
  initFAQ();
});

// --- 1. Announcement Bar ---
function initAnnouncementBar() {
  const annBar = document.getElementById('announcement-bar');
  const closeBtn = document.getElementById('ann-close');
  
  if (closeBtn && annBar) {
    closeBtn.addEventListener('click', () => {
      annBar.style.maxHeight = '0';
      annBar.style.padding = '0';
      setTimeout(() => annBar.remove(), 400);
    });
  }
}

// --- 2. Header Scroll Effect ---
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- 3. Mobile Menu Toggle ---
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');
  const navOverlay = document.getElementById('nav-mobile-overlay');
  const navClose = document.getElementById('nav-mobile-close');
  const searchInput = document.getElementById('mobile-search-input');
  
  function openMenu() {
    if (hamburger) {
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.classList.add('open');
    }
    if (navMobile) navMobile.classList.add('active');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (hamburger) {
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
    }
    if (navMobile) navMobile.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMobile && navMobile.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (navClose) navClose.addEventListener('click', closeMenu);
  if (navOverlay) navOverlay.addEventListener('click', closeMenu);

  // Close menu when clicking any nav link
  if (navMobile) {
    const mobLinks = navMobile.querySelectorAll('a');
    mobLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Mobile search input
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
          closeMenu();
          const shopSection = document.getElementById('shop');
          if (shopSection) {
            shopSection.scrollIntoView({ behavior: 'smooth' });
          }
          // Filter product cards matching query
          const productCards = document.querySelectorAll('.product-card');
          productCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? 'flex' : 'none';
          });
        }
      }
    });
  }
}

// --- 4. Product Filters ---
function initProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardCategories = (card.getAttribute('data-category') || '').split(' ');
        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease';
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- 5. Testimonial Slider ---
function initTestimonialSlider() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.slider-dot');
  let currentIndex = 0;
  let sliderInterval;

  function showSlide(index) {
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }

  function startInterval() {
    sliderInterval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % cards.length;
      showSlide(nextIndex);
    }, 5000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(sliderInterval);
      showSlide(index);
      startInterval();
    });
  });

  if (cards.length > 0) {
    startInterval();
  }
}

// --- 6. Cart Management ---
function initCart() {
  const cartBtn = document.getElementById('cart-btn');
  const cartClose = document.getElementById('cart-close');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartFooter = document.getElementById('cart-footer');

  const mobBarCart = document.getElementById('mob-bar-cart');
  const mobCartCount = document.getElementById('mob-cart-count');

  // Toggle Cart Drawer
  function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    const isVisible = cartSidebar.classList.contains('active');
    cartSidebar.setAttribute('aria-hidden', !isVisible);
    cartOverlay.setAttribute('aria-hidden', !isVisible);
    document.body.classList.toggle('cart-open', isVisible);
  }

  if (cartBtn) cartBtn.addEventListener('click', toggleCart);
  if (mobBarCart) mobBarCart.addEventListener('click', toggleCart);
  if (cartClose) cartClose.addEventListener('click', toggleCart);
  if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);

  // GA4 Begin Checkout Tracking
  const checkoutBtn = document.getElementById('cart-checkout');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      if (typeof gtag === 'function') {
        gtag('event', 'begin_checkout', {
          currency: 'INR',
          value: totalSum,
          items: cart.map(item => ({
            item_id: String(item.id),
            item_name: item.name,
            item_category: item.category,
            price: item.price,
            quantity: item.quantity
          }))
        });
      }
    });
  }

  // Add to Cart Handlers
  document.body.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.btn-add-cart');
    if (addBtn) {
      const productId = parseInt(addBtn.getAttribute('data-product'));
      addToCart(productId);
      
      // Animate button
      const originalText = addBtn.innerHTML;
      addBtn.innerHTML = `<i class="fa fa-check"></i> Added!`;
      addBtn.style.backgroundColor = 'var(--primary-glow)';
      addBtn.style.color = '#ffffff';
      setTimeout(() => {
        addBtn.innerHTML = originalText;
        addBtn.style.backgroundColor = '';
        addBtn.style.color = '';
      }, 1500);
    }
  });

  function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      if (product) {
        cart.push({ ...product, quantity: 1 });
      }
    }
    updateCartUI();

    // GA4 Tracking
    if (product && typeof gtag === 'function') {
      gtag('event', 'add_to_cart', {
        currency: 'INR',
        value: product.price,
        items: [{
          item_id: String(product.id),
          item_name: product.name,
          item_category: product.category,
          price: product.price,
          quantity: 1
        }]
      });
    }
  }

  function removeFromCart(id) {
    const item = cart.find(p => p.id === id);
    cart = cart.filter(p => p.id !== id);
    updateCartUI();

    // GA4 Tracking
    if (item && typeof gtag === 'function') {
      gtag('event', 'remove_from_cart', {
        currency: 'INR',
        value: item.price * item.quantity,
        items: [{
          item_id: String(item.id),
          item_name: item.name,
          price: item.price,
          quantity: item.quantity
        }]
      });
    }
  }

  function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        removeFromCart(id);
      } else {
        updateCartUI();
      }
    }
  }

  function updateCartUI() {
    localStorage.setItem('blu_idol_cart', JSON.stringify(cart));
    
    // Update count badge
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalCount;
    if (mobCartCount) mobCartCount.textContent = totalCount;

    // Render cart items
    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = '';
      
      if (cart.length === 0) {
        cartEmpty.style.display = 'flex';
        cartFooter.style.display = 'none';
      } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';

        cart.forEach(item => {
          const itemEl = document.createElement('li');
          itemEl.className = 'cart-item';
          itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
              <h4 class="cart-item-name">${item.name}</h4>
              <span class="cart-item-price">₹${item.price}</span>
              <div class="cart-item-qty">
                <button class="qty-btn dec-qty" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn inc-qty" data-id="${item.id}">+</button>
              </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          `;
          cartItemsContainer.appendChild(itemEl);
        });

        // Add event listeners to quantity buttons and remove button
        cartItemsContainer.querySelectorAll('.dec-qty').forEach(btn => {
          btn.addEventListener('click', () => updateQuantity(parseInt(btn.getAttribute('data-id')), -1));
        });
        cartItemsContainer.querySelectorAll('.inc-qty').forEach(btn => {
          btn.addEventListener('click', () => updateQuantity(parseInt(btn.getAttribute('data-id')), 1));
        });
        cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
          btn.addEventListener('click', () => removeFromCart(parseInt(btn.getAttribute('data-id'))));
        });
      }
    }

    // Calculate Total
    const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `₹${totalSum}`;
  }

  // Run initial sync
  updateCartUI();
}

// --- 7. Wishlist Management ---
function initWishlist() {
  const wishlistBtn = document.getElementById('wishlist-btn');
  const wishlistCount = document.getElementById('wishlist-count');
  const mobWishlistCount = document.getElementById('mob-wishlist-count');
  const mobBarWishlist = document.getElementById('mob-bar-wishlist');

  // When clicking Wishlist button in header or bottom bar, scroll to products or filter
  function handleWishlistClick() {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (wishlist.length > 0) {
      // Filter products to show wishlisted items
      const productCards = document.querySelectorAll('.product-card');
      productCards.forEach(card => {
        const id = parseInt(card.id.replace('product-', ''));
        card.style.display = wishlist.includes(id) ? 'flex' : 'none';
      });
      // Deactivate all filter buttons
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    }
  }

  if (wishlistBtn) wishlistBtn.addEventListener('click', handleWishlistClick);
  if (mobBarWishlist) mobBarWishlist.addEventListener('click', handleWishlistClick);

  document.body.addEventListener('click', (e) => {
    const wishBtn = e.target.closest('.product-wishlist');
    if (wishBtn) {
      const id = parseInt(wishBtn.getAttribute('data-product'));
      toggleWishlist(id, wishBtn);
    }
  });

  function toggleWishlist(id, btnElement) {
    const index = wishlist.indexOf(id);
    if (index === -1) {
      wishlist.push(id);
      if (btnElement) {
        btnElement.innerHTML = `<i class="fa fa-heart"></i>`;
        btnElement.style.color = '#d90429';
      }
    } else {
      wishlist.splice(index, 1);
      if (btnElement) {
        btnElement.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        btnElement.style.color = '';
      }
    }
    updateWishlistUI();
  }

  function updateWishlistUI() {
    localStorage.setItem('blu_idol_wishlist', JSON.stringify(wishlist));
    if (wishlistCount) wishlistCount.textContent = wishlist.length;
    if (mobWishlistCount) mobWishlistCount.textContent = wishlist.length;

    // Highlight existing wishlist items on render
    document.querySelectorAll('.product-wishlist').forEach(btn => {
      const id = parseInt(btn.getAttribute('data-product'));
      if (wishlist.includes(id)) {
        btn.innerHTML = `<i class="fa fa-heart"></i>`;
        btn.style.color = '#d90429';
      } else {
        btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        btn.style.color = '';
      }
    });
  }

  updateWishlistUI();
}

// --- 8. Quick View Modal ---
function initQuickView() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalInfo = document.getElementById('modal-info');

  function openQuickView(id) {
    const item = products.find(p => p.id === id);
    if (!item) return;

    // GA4 View Item Tracking
    if (typeof gtag === 'function') {
      gtag('event', 'view_item', {
        currency: 'INR',
        value: item.price,
        items: [{
          item_id: String(item.id),
          item_name: item.name,
          item_category: item.category,
          price: item.price
        }]
      });
    }

    if (modalImg) {
      modalImg.innerHTML = `<img src="${item.image}" alt="${item.name}">`;
    }

    if (modalInfo) {
      modalInfo.innerHTML = `
        <p class="product-category">${item.category}</p>
        <h3 class="product-name">${item.name}</h3>
        <div class="product-stars">
          ${getStarsHTML(item.stars)}
          <span>(${item.reviews} reviews)</span>
        </div>
        <div class="product-price-row">
          <span class="price-current">₹${item.price}</span>
          <span class="price-original">₹${item.originalPrice}</span>
        </div>
        <p class="modal-desc">${item.description}</p>
        <a href="https://wa.me/919895432549?text=${encodeURIComponent('Hi Blu Idol, I would like to order the ' + item.name + ' (₹' + item.price + ').')}" target="_blank" rel="noopener" class="btn btn-whatsapp" id="modal-wa-btn" style="width: 100%; margin-top: 12px; font-size: 0.95rem; padding: 12px;">
          <i class="fa-brands fa-whatsapp" style="font-size: 1.25rem;"></i> Order on WhatsApp
        </a>
      `;
    }

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function closeQuickView() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }

  document.body.addEventListener('click', (e) => {
    const quickBtn = e.target.closest('.product-quick');
    if (quickBtn) {
      const id = parseInt(quickBtn.getAttribute('data-product'));
      openQuickView(id);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeQuickView);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeQuickView();
    });
  }

  function getStarsHTML(stars) {
    let html = '';
    const fullStars = Math.floor(stars);
    const hasHalf = stars % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        html += `<i class="fa fa-star"></i>`;
      } else if (i === fullStars && hasHalf) {
        html += `<i class="fa fa-star-half-stroke"></i>`;
      } else {
        html += `<i class="fa-regular fa-star"></i>`;
      }
    }
    return html;
  }
}

// --- 9. Back To Top ---
function initBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  
  if (backBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backBtn.classList.add('active');
      } else {
        backBtn.classList.remove('active');
      }
    });

    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// --- 10. Newsletter Form Simulation ---
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const email = emailInput ? emailInput.value.trim() : '';

      if (email === "") return;

      // GA4 Generate Lead Tracking
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'newsletter'
        });
      }

      // Animate Success response
      const container = document.getElementById('newsletter-inner');
      if (container) {
        container.innerHTML = `
          <div class="newsletter-success" style="text-align: center; width: 100%; padding: 20px 0;">
            <i class="fa fa-circle-check" style="font-size: 3rem; color: var(--accent-color); margin-bottom: 16px;"></i>
            <h3 style="font-family: var(--font-serif); font-size: 2rem; color: var(--primary-color); margin-bottom: 8px;">Thank You for Subscribing!</h3>
            <p style="color: var(--text-dark); opacity: 0.85;">We've sent a welcome gift code to <strong>${email}</strong>. Check your inbox soon!</p>
          </div>
        `;
      }
    });
  }
}

// --- 11. Mobile Bottom Sticky Navigation Bar ---
function initMobileBottomBar() {
  const homeBtn = document.getElementById('mob-bar-home');
  const shopBtn = document.getElementById('mob-bar-shop');
  const items = document.querySelectorAll('.mobile-bar-item');

  function setActive(targetBtn) {
    items.forEach(el => el.classList.remove('active'));
    if (targetBtn) targetBtn.classList.add('active');
  }

  if (homeBtn) {
    homeBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActive(homeBtn);
    });
  }

  if (shopBtn) {
    shopBtn.addEventListener('click', () => {
      setActive(shopBtn);
    });
  }

  // Update active state based on scroll
  const shopSec = document.getElementById('shop');
  if (shopSec) {
    window.addEventListener('scroll', () => {
      const rect = shopSec.getBoundingClientRect();
      if (rect.top <= 250 && rect.bottom >= 250) {
        setActive(shopBtn);
      } else if (window.scrollY < 300) {
        setActive(homeBtn);
      }
    }, { passive: true });
  }
}

// --- 12. WhatsApp Conversion Tracking ---
function initWhatsAppTracking() {
  document.body.addEventListener('click', (e) => {
    const waBtn = e.target.closest('.btn-whatsapp, #header-wa-btn, #mob-bar-whatsapp, #mob-whatsapp, #contact-wa, #contact-wa-btn, #modal-wa-btn');
    if (waBtn) {
      const productId = waBtn.getAttribute('data-product');
      const href = waBtn.getAttribute('href') || '';
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'whatsapp_order',
          event_label: href,
          product_id: productId || 'general'
        });
      }
    }
  });
}

// --- 13. FAQ Accordion (AEO Interactive) ---
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for a clean accordion effect
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const btn = other.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Category Hash Navigation Support
function initCategoryHashNav() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (['#earrings', '#jhumkas', '#necklaces', '#bracelets', '#anklets'].includes(href)) {
      anchor.addEventListener('click', (e) => {
        const cat = href.replace('#', '');
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
        if (filterBtn) {
          filterBtn.click();
          const shop = document.getElementById('shop');
          if (shop) shop.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
}

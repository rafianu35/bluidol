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
  },
  {
    id: 45,
    name: "Gold-Plated Stainless Steel Floral Daisy Bangle",
    category: "bangles",
    price: 225,
    originalPrice: 449,
    image: "images/gold-plated-stainless-steel-flower-bangle.png",
    stars: 5,
    reviews: 38,
    badge: "Trending",
    description: "Exquisite 18K gold-plated stainless steel hinged bangle featuring intricate openwork floral daisy cutouts with sparkling center crystal accents. Tarnish-free, waterproof, and hypoallergenic."
  },
  {
    id: 46,
    name: "Antique Gold-Toned Peacock Long Drop Jhumka Earrings",
    category: "jhumkas",
    price: 75,
    originalPrice: 169,
    image: "images/antique-gold-peacock-long-drop-jhumkas.png",
    stars: 5,
    reviews: 44,
    badge: "Popular",
    description: "Majestic antique gold-toned long drop jhumka earrings featuring an ornate peacock crown top and grand flared peacock feather plumage, suspending delicate textured bell domes fringed with shimmering white pearl drops. Hypoallergenic, lightweight, and skin-friendly."
  },
  {
    id: 47,
    name: "Matte Hibiscus Flower Mini Hair Claw Clips",
    category: "hair-clips",
    price: 25,
    originalPrice: 59,
    image: "images/matte-hibiscus-flower-hair-claw-clips.png",
    stars: 5,
    reviews: 48,
    badge: "Trending",
    description: "Vibrant pastel matte-finish hibiscus flower mini hair claw clips crafted from durable, non-slip acrylic resin with a strong metal spring. Gentle on hair, lightweight, and perfect for half-up hairstyles or aesthetic daily styling (Price ₹25 each)."
  },
  {
    id: 48,
    name: "Matte Seashell Hair Claw Clips",
    category: "hair-clips",
    price: 25,
    originalPrice: 59,
    image: "images/matte-seashell-hair-claw-clips.png",
    stars: 5,
    reviews: 42,
    badge: "Bestseller",
    description: "Chic matte-finish scalloped seashell hair claw clips crafted from durable, eco-friendly resin with an interlocking non-slip claw grip and strong steel spring. Available in 12 aesthetic pastel, neutral, and vibrant shades for effortless daily styling (Price ₹25 each)."
  },
  {
    id: 49,
    name: "Matte-Finish Double Flower Hair Claw Clips",
    category: "hair-clips",
    price: 25,
    originalPrice: 59,
    image: "images/matte-finish-double-flower-hair-claw-clips.png",
    stars: 5,
    reviews: 46,
    badge: "Popular",
    description: "Charming matte-finish double flower hair claw clips featuring twin blooming floral blossoms on an interlocking claw grip with high-tension metal spring. Designed for secure, all-day hold on fine to medium-thick hair in 12 stunning pastel, earthy, and neutral tones (Price ₹25 each)."
  },
  {
    id: 50,
    name: "Crystal Bloom Floral Hair Claw Clips",
    category: "hair-clips",
    price: 35,
    originalPrice: 79,
    image: "images/crystal-bloom-floral-hair-claw-clips.png",
    stars: 5,
    reviews: 45,
    badge: "Trending",
    description: "Dazzling translucent crystal-resin double flower hair claw clips adorned with sparkling iridescent aurora borealis gemstone centers. Features an interlocking non-slip claw grip with gold-tone steel spring, available in 6 jelly pastel shades (Price ₹35 each)."
  },
  {
    id: 51,
    name: "Crystal Flower Jaw Clamps",
    category: "hair-clips",
    price: 35,
    originalPrice: 79,
    image: "images/crystal-flower-jaw-clamps.png",
    stars: 5,
    reviews: 42,
    badge: "Trending",
    description: "Mini crystal flower jaw clamp hair clips featuring twin faceted crystal blossoms with iridescent aurora rhinestone centers and interlocking gold-finish grip teeth. Lightweight, secure hold for accents, bangs, and half-up styles across 6 luminous pastel shades (Price ₹35 each)."
  },
  {
    id: 52,
    name: "Floral Mini Hair Claw Clips",
    category: "hair-clips",
    price: 15,
    originalPrice: 39,
    image: "images/floral-mini-hair-claw-clips.png",
    stars: 5,
    reviews: 68,
    badge: "Bestseller",
    description: "Charming floral mini hair claw clips featuring five rounded translucent crystal flower petals centered with a dazzling multifaceted rhinestone on a gold-plated interlocking clamp. Pocket-friendly accent clips available in vibrant jewel tones (Price ₹15 each)."
  },
  {
    id: 53,
    name: "Matte Butterfly Hair Claw Clips",
    category: "hair-clips",
    price: 20,
    originalPrice: 49,
    image: "images/matte-butterfly-hair-claw-clips.png",
    stars: 5,
    reviews: 37,
    badge: "New",
    description: "Aesthetic dual-winged butterfly hair claw clips finished in ultra-soft velvety matte texture with contrasting two-tone layered wings and heavy-duty spring grip. Non-damaging secure hold in soothing pastel and neutral tones (Price ₹20 each)."
  },
  {
    id: 54,
    name: "Translucent Star-Shaped Hair Claw Clips",
    category: "hair-clips",
    price: 29,
    originalPrice: 69,
    image: "images/translucent-star-shaped-hair-claw-clips.png",
    stars: 5,
    reviews: 49,
    badge: "Trending",
    description: "Modern geometric hollow star hair claw clips crafted from glossy translucent amber, crystal clear, champagne, and smoky acrylic with sturdy interlocking comb teeth. Sleek celestial accessory for quick updos and half-buns (Price ₹29 each)."
  },
  {
    id: 55,
    name: "Matte Ribbon Bow Hair Clutcher",
    category: "hair-clips",
    price: 39,
    originalPrice: 89,
    image: "images/matte-ribbon-bow-hair-clutcher.png",
    stars: 5,
    reviews: 54,
    badge: "Bestseller",
    description: "Elegant sculpted double-shade ribbon bow hair clutcher in premium soft-touch matte finish. Features dual-tone contrast bow loops and strong interlocking teeth for medium to thick hair holding (Price ₹39 each)."
  },
  {
    id: 56,
    name: "Korean Style Tulip Hair Clips",
    category: "hair-clips",
    price: 69,
    originalPrice: 149,
    image: "images/korean-style-tulip-hair-clips.png",
    stars: 5,
    reviews: 33,
    badge: "New",
    description: "Graceful Korean-aesthetic twin tulip hair claw clip designed with sculpted matte floral buds and leafy stems set along an elegant translucent arched claw frame. Luxurious everyday statement accessory (Price ₹69 each)."
  },
  {
    id: 57,
    name: "Korean-Style Flower Wreath Hair Claw Clips (Combo of 2)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/korean-style-flower-wreath-claw-clips-combo.png",
    stars: 5,
    reviews: 48,
    badge: "Trending",
    description: "Charming Korean circular flower wreath hair claw clip combo of 2 featuring sculpted miniature daisies with iridescent crystal centers on a durable transparent hollow circular ring claw clamp. Pack of 2 coordinating clips (Price ₹99 for combo)."
  },
  {
    id: 58,
    name: "Navy Blue Matte Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/navy-blue-matte-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 52,
    badge: "Bestseller",
    description: "Gorgeous 3-piece combo set of Hawaiian hibiscus flower hair claw clips in rich navy blue velvety matte finish. Includes 1 large statement flower claw clip and 2 matching medium accent clips for versatile styling (Price ₹99 for combo)."
  },
  {
    id: 59,
    name: "Dark Dusty Rose Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/dark-dusty-rose-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 41,
    badge: "Trending",
    description: "Delicate 3-piece combo set of tropical hibiscus flower hair claw clips finished in sophisticated dark dusty rose matte texture. Features 1 jumbo statement clip and 2 medium companion clips with strong interlocking teeth (Price ₹99 for combo)."
  },
  {
    id: 60,
    name: "Matte Mustard Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/matte-mustard-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 36,
    badge: "New",
    description: "Warm sun-kissed matte mustard yellow hibiscus flower claw clip combo of 3. Crafted with velvety soft-touch matte acrylic and strong steel spring mechanism. Includes 1 large and 2 medium clips (Price ₹99 for combo)."
  },
  {
    id: 61,
    name: "Matte Black Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/matte-black-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 59,
    badge: "Bestseller",
    description: "Timeless monochrome matte black hibiscus flower hair claw clip combo of 3. Features textured ribbed petals, velvety grip, and reliable hold for all hair types. Includes 1 large statement and 2 medium clips (Price ₹99 for combo)."
  },
  {
    id: 62,
    name: "Matte White Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/matte-white-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 44,
    badge: "Trending",
    description: "Crisp clean matte ivory white hibiscus flower claw clips combo of 3. Elegant tropical aesthetic with ribbed petal contours and soft matte finish. Includes 1 jumbo and 2 medium hair claws (Price ₹99 for combo)."
  },
  {
    id: 63,
    name: "Baby Pink Matte Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/baby-pink-matte-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 50,
    badge: "Bestseller",
    description: "Charming pastel baby pink matte hibiscus flower hair claw clips combo of 3. Sweet floral design with soft-touch finish and comfortable non-slip teeth grip. Set of 1 large and 2 medium clips (Price ₹99 for combo)."
  },
  {
    id: 64,
    name: "Matte Grey Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/matte-grey-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 38,
    badge: "New",
    description: "Modern neutral matte light grey hibiscus flower claw clips combo of 3. Minimalist aesthetic pairing soft ribbed petals with secure interlocking hold. Includes 1 large and 2 medium claw clips (Price ₹99 for combo)."
  },
  {
    id: 65,
    name: "Matte Dark Grey Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/matte-dark-grey-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 43,
    badge: "Trending",
    description: "Sleek charcoal matte dark grey hibiscus flower claw clips combo of 3. Understated urban chic design with soft matte finish and reliable spring grip. Contains 1 jumbo and 2 medium clips (Price ₹99 for combo)."
  },
  {
    id: 66,
    name: "Matte Green Floral Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/matte-green-floral-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 47,
    badge: "Trending",
    description: "Earthy sage matte green hibiscus flower hair claw clips combo of 3. Nature-inspired sculpted floral design with non-pulling teeth and durable steel spring. Includes 1 large and 2 medium clips (Price ₹99 for combo)."
  },
  {
    id: 67,
    name: "Dark Wine Hibiscus Hair Claw Clips (3pc Combo)",
    category: "clip-combos",
    price: 99,
    originalPrice: 199,
    image: "images/dark-wine-hibiscus-hair-claw-clips-combo.png",
    stars: 5,
    reviews: 55,
    badge: "Bestseller",
    description: "Rich luxurious dark wine burgundy matte hibiscus flower hair claw clips combo of 3. Deep berry tones with soft velvety texture and firm interlocking grip. Set of 1 statement large and 2 medium clips (Price ₹99 for combo)."
  },
  {
    id: 68,
    name: "Antique Gold Elephant Pink Stone Dangling Earrings",
    category: "earrings",
    price: 65,
    originalPrice: 149,
    image: "images/antique-gold-elephant-pink-stone-dangling-earrings.png",
    stars: 5,
    reviews: 39,
    badge: "Trending",
    description: "Opulent antique gold-toned dangling drop earrings featuring an intricately carved royal elephant motif crowned above a luminous oval magenta pink stone, bordered with teardrop petal cabochons and swinging fuchsia pink bead drops."
  },
  {
    id: 69,
    name: "Shiny Gold-Toned Twisted Half-Hoop Earrings",
    category: "earrings",
    price: 40,
    originalPrice: 89,
    image: "images/shiny-gold-toned-twisted-half-hoop-earrings.png",
    stars: 5,
    reviews: 44,
    badge: "Bestseller",
    description: "Bold high-polish 18K gold-plated twisted croissant-style half-hoop earrings. Designed with fluid spiraling ribbing and lightweight hollow construction for effortless everyday glam and secure post fastening."
  },
  {
    id: 70,
    name: "3-Pair Gold-Plated Fashion Stud Earrings Combo Set",
    category: "earrings",
    price: 95,
    originalPrice: 199,
    image: "images/gold-plated-fashion-stud-earrings-3-pair-combo.png",
    stars: 5,
    reviews: 58,
    badge: "Bestseller",
    description: "Versatile 3-pair earring curation comprising high-polish minimalist golden ball studs, delicate mother-of-pearl butterfly openwork studs, and sculptural double-bloom golden flower stud statement earrings."
  },
  {
    id: 71,
    name: "Multi-Pair Korean Fashion Stud & Hoop Earring Set",
    category: "earrings",
    price: 65,
    originalPrice: 139,
    image: "images/korean-fashion-stud-and-hoop-earring-set.png",
    stars: 5,
    reviews: 47,
    badge: "Trending",
    description: "Curated Korean aesthetic 3-pair earring wardrobe featuring classic lustrous cream pearl studs, brilliant round-cut cubic zirconia solitaire studs, and sleek rectangular hollow chunky gold huggie hoops."
  },
  {
    id: 72,
    name: "Korean Geometric Link Chain Hoop Earrings Combo (3 Pairs)",
    category: "earrings",
    price: 89,
    originalPrice: 189,
    image: "images/korean-geometric-link-chain-hoop-earrings-combo.png",
    stars: 5,
    reviews: 36,
    badge: "New",
    description: "Chic 3-pair combo set of Korean geometric open-link rectangular chain C-hoop earrings in smooth velvety matte pastel finishes: dusty coral pink, earthy olive green, and clean ivory cream."
  },
  {
    id: 73,
    name: "Gold Plated CZ Studded Floral Sunburst Stud Earrings",
    category: "earrings",
    price: 165,
    originalPrice: 349,
    image: "images/gold-plated-cz-floral-sunburst-stud-earrings.png",
    stars: 5,
    reviews: 63,
    badge: "Bestseller",
    description: "Radiant luxury 18K gold-plated sunburst stud earrings featuring an open circular center surrounded by 10 sparkling marquise-cut AAA cubic zirconia stones tipped with delicate golden prongs."
  },
  {
    id: 74,
    name: "Gold-Plated Multi-Layered Triple Band Hoop Earrings",
    category: "earrings",
    price: 65,
    originalPrice: 139,
    image: "images/gold-plated-multi-layered-triple-band-hoop-earrings.png",
    stars: 5,
    reviews: 41,
    badge: "Trending",
    description: "Modern stacked triple-row huggie hoop earrings featuring twin twisted braided rope outer borders sandwiching a sleek polished mirror-finish center band. Lightweight click-top clasp for all-day comfort."
  },
  {
    id: 75,
    name: "Mirror-Finish Water Drop Teardrop Stud Earrings",
    category: "earrings",
    price: 40,
    originalPrice: 89,
    image: "images/mirror-finish-water-drop-teardrop-stud-earrings.png",
    stars: 5,
    reviews: 52,
    badge: "Trending",
    description: "Iconic sculptural water-drop teardrop earrings boasting ultra-smooth liquid gold mirror plating. High-fashion designer-inspired chunky silhouette with hollow lightweight structure for everyday elegance."
  },
  {
    id: 76,
    name: "Floral Enamel Korean Pearl Stud Earrings",
    category: "earrings",
    price: 30,
    originalPrice: 69,
    image: "images/floral-enamel-korean-pearl-stud-earrings.png",
    stars: 5,
    reviews: 35,
    badge: "New",
    description: "Dreamy Korean three-petal floral stud earrings detailed with hand-painted watercolor ombre rose pink and soft seafoam green enamel bordered in gold, centered with an iridescent faux pearl."
  },
  {
    id: 77,
    name: "Sculptural Bubble Beaded Half-Hoop Earrings",
    category: "earrings",
    price: 35,
    originalPrice: 79,
    image: "images/sculptural-bubble-beaded-half-hoop-earrings.png",
    stars: 5,
    reviews: 42,
    badge: "Trending",
    description: "Playful architectural C-shaped half hoop earrings composed of interconnected glossy golden bubble spheres that graduate in size. Radiant high-shine gold plating with secure stud push backs."
  },
  {
    id: 78,
    name: "Liquid Metal Molten Chunky Huggie Earrings",
    category: "earrings",
    price: 45,
    originalPrice: 99,
    image: "images/liquid-metal-molten-chunky-huggie-earrings.png",
    stars: 5,
    reviews: 38,
    badge: "Trending",
    description: "Avant-garde liquid metal organic molten chunky huggie earrings in bright chrome silver finish. Sculpted with asymmetric undulating curves that reflect light dynamically from every angle."
  },
  {
    id: 79,
    name: "Korean Two-Tone Green & Pearl Leaf Motif Earrings",
    category: "earrings",
    price: 35,
    originalPrice: 79,
    image: "images/korean-two-tone-green-pearl-leaf-motif-earrings.png",
    stars: 5,
    reviews: 31,
    badge: "New",
    description: "Nature-inspired Korean leaf motif stud earrings featuring an overlapping twin-leaf design: one leaf in shimmering marbled emerald green enamel and one in lustrous mother-of-pearl white resin with gold rims."
  },
  {
    id: 80,
    name: "Opaline Winged Fairy Stud Earrings",
    category: "earrings",
    price: 35,
    originalPrice: 79,
    image: "images/opaline-winged-fairy-stud-earrings.png",
    stars: 5,
    reviews: 46,
    badge: "Trending",
    description: "Whimsical enchanted fairy stud earrings featuring shimmering iridescent opaline resin wings with subtle glitter accents, delicate paved crystal dresses, and sculpted golden fairy silhouettes in flight."
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
        <a href="https://wa.me/919895432549?text=${encodeURIComponent('Hi Blu Idol, I would like to order the ' + item.name + ' (₹' + item.price + ').')}" target="_blank" rel="noopener" class="btn btn-whatsapp" id="modal-wa-btn" style="width: 100%; margin-top: 12px; font-size: 0.82rem; padding: 8px 14px;">
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
    if (['#earrings', '#jhumkas', '#necklaces', '#bangles', '#bracelets', '#anklets', '#hair-clips', '#clip-combos'].includes(href)) {
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

export interface Product {
  id: number;
  slug: string;
  title: string;
  price: number;
  image: string;
  description: string;
  shortDescription: string;
  features: string[];
  metaDescription: string;
  keywords: string[];
  category: string;
  discount?: number;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "all-white-floral-canopy-wedding-room-decoration-teddy-bear-theme",
    title: "All-White Floral Canopy Wedding Room Decoration – Teddy Bear Theme",
    price: 29000,
    image: "/images/all-white-floral-canopy-wedding-room-decoration-teddy-bear-theme.webp",
    description: "Create a dreamy first-night room with this full all-white floral canopy wedding room decoration. Fresh white flowers with soft red accents are arranged over a four-post canopy, with sheer fabric drapes, warm fairy lights and a cosy teddy bear on the bed for a playful touch. Ideal for couples who want a luxury wedding room with a bright, elegant look – perfect for hotel rooms or home bedrooms in Lahore. Includes bed design, canopy, side arrangements and petal work on the floor.",
    shortDescription: "All-white floral canopy wedding room decoration with fresh flowers, fairy lights and a cute teddy bear theme. Perfect luxury first-night setup in Lahore.",
    features: [
      "All-white fresh flowers with red accents",
      "Four-post canopy with fabric drapes",
      "Warm fairy lights",
      "Teddy bear on bed",
      "Bed design and petal work",
      "Side arrangements"
    ],
    metaDescription: "Book an all-white floral canopy wedding room decoration in Lahore with fresh flowers, fairy lights and teddy bear theme. Luxury first-night room setup for bride & groom.",
    keywords: ["all white wedding room", "floral canopy", "teddy bear theme", "luxury wedding room decoration Lahore", "first night room"],
    category: "Room Decor"
  },
  {
    id: 2,
    slug: "elegant-bridal-room-flower-decoration-red-roses-gold-theme",
    title: "Elegant Bridal Room Flower Decoration – Red Roses & Gold Theme",
    price: 6000,
    image: "/images/elegant-bridal-room-flower-decoration-red-roses-gold-theme.webp",
    description: "This elegant bridal room flower decoration is designed for couples who want a classy look without heavy canopy structures. Fresh red rose bunches are arranged on the headboard and bed corners, matching beautifully with the golden bedspread. Ideal for small or medium bedrooms at home or in guest houses, this design gives a clean, premium wedding night feel while staying budget-friendly.",
    shortDescription: "Simple, elegant bridal room decoration with fresh red roses on a classic gold bed setup – perfect for a decent wedding night room in Lahore.",
    features: [
      "Fresh red rose bunches",
      "Headboard and bed corner arrangements",
      "Golden bedspread matching",
      "Clean premium look",
      "Budget-friendly design",
      "Perfect for small/medium rooms"
    ],
    metaDescription: "Elegant bridal room flower decoration in Lahore with fresh red roses and gold bed theme. Simple, classy wedding night room décor starting from Rs 6,000.",
    keywords: ["elegant bridal room", "red roses decoration", "gold theme", "simple wedding room Lahore", "budget wedding decoration"],
    category: "Room Decor"
  },
  {
    id: 3,
    slug: "fairy-lights-floral-canopy-wedding-room-decoration",
    title: "Fairy Lights & Floral Canopy Wedding Room Decoration",
    price: 11800,
    image: "/images/fairy-lights-floral-canopy-wedding-room-decoration.webp",
    description: "This design combines fairy lights and floral canopy wedding room decoration for a warm, romantic atmosphere. Metal poles around the bed are wrapped with soft fabric, fresh flowers and warm string lights, with petals scattered on the bed and floor. Perfect for couples who want a cosy, golden glow for their wedding night or anniversary surprise at home or in a hotel.",
    shortDescription: "Romantic wedding room canopy with fairy lights, soft fabric drapes and fresh flowers – perfect for first-night room decoration in Lahore.",
    features: [
      "Fairy lights canopy",
      "Soft fabric drapes",
      "Fresh flowers on poles",
      "Petal work on bed and floor",
      "Warm golden glow",
      "Romantic atmosphere"
    ],
    metaDescription: "Book fairy lights and floral canopy wedding room decoration in Lahore. Romantic first-night room décor with fresh flowers, fabric drapes and warm lighting.",
    keywords: ["fairy lights canopy", "floral canopy", "romantic wedding room", "first night decoration Lahore", "fairy lights decoration"],
    category: "Room Decor"
  },
  {
    id: 4,
    slug: "gold-canopy-floral-wedding-room-decoration",
    title: "Gold Canopy Floral Wedding Room Decoration",
    price: 10000,
    image: "/images/gold-canopy-floral-wedding-room-decoration.webp",
    description: "This gold canopy floral wedding room decoration features a full canopy frame covered with red and white flowers, soft fabric panels and a clean bed setup. The look is elegant and bright without being overcrowded. Suitable for both bridal room decoration and first-night room decoration, especially where you want a premium feel that still photographs very well.",
    shortDescription: "Gold canopy wedding room decoration with red and white fresh flowers and soft fabric drapes – ideal for bridal or honeymoon room décor in Lahore.",
    features: [
      "Gold canopy frame",
      "Red and white fresh flowers",
      "Soft fabric panels",
      "Clean bed setup",
      "Elegant bright look",
      "Photo-ready design"
    ],
    metaDescription: "Gold canopy floral wedding room decoration in Lahore with red & white flowers and fabric drapes. Ideal for bridal, wedding night and honeymoon bedroom décor.",
    keywords: ["gold canopy", "floral canopy", "bridal room decoration", "wedding night room Lahore", "honeymoon decoration"],
    category: "Room Decor"
  },
  {
    id: 5,
    slug: "grand-canopy-bridal-room-flower-decoration-red-white",
    title: "Grand Canopy Bridal Room Flower Decoration – Red & White",
    price: 9900,
    image: "/images/grand-canopy-bridal-room-flower-decoration-red-white.webp",
    description: "For families who want a strong bridal room statement look, this design offers a thick red and white floral canopy around the entire bed. Vertical floral pillars and a full frame create a proper saij / masehri style, ideal for photos when the bride first enters her room. Works beautifully for home bridal rooms in Lahore where you need decoration that looks rich and festive.",
    shortDescription: "Grand red & white floral canopy bridal room decoration with full frame around the bed – perfect for traditional Pakistani masehri or bridal entry.",
    features: [
      "Thick red and white floral canopy",
      "Full frame around bed",
      "Vertical floral pillars",
      "Saij / masehri style",
      "Rich festive look",
      "Perfect for bridal entry photos"
    ],
    metaDescription: "Grand red & white canopy bridal room decoration in Lahore. Full floral frame around the bed for masehri, saij and bridal bedroom photos.",
    keywords: ["grand canopy", "bridal room decoration", "masehri decoration", "saij design", "red white flowers Lahore"],
    category: "Room Decor"
  },
  {
    id: 6,
    slug: "grand-red-white-wedding-room-decoration-lahore",
    title: "Grand Red & White Wedding Room Decoration in Lahore | Lahore Blooms",
    price: 16900,
    image: "/images/grand-red-white-wedding-room-decoration-lahore.webp",
    description: "This is one of our most premium grand wedding room decoration setups. A heavy arch canopy of red and white flowers surrounds the bed, combined with warm fairy lights, petal work and matching side arrangements. Perfect for couples who want a proper \"wow\" moment when the door opens – ideal for hotel rooms or larger bedrooms in Lahore for wedding night or honeymoon stays.",
    shortDescription: "High-impact grand red & white wedding room decoration with full arch canopy, fairy lights and fresh flowers – designed for premium first-night rooms in Lahore.",
    features: [
      "Heavy arch canopy",
      "Red and white flowers",
      "Warm fairy lights",
      "Petal work",
      "Matching side arrangements",
      "Premium wow factor"
    ],
    metaDescription: "Grand red & white wedding room decoration in Lahore with full floral arch, lights and petals. Premium first-night and honeymoon bedroom décor by Lahore Blooms.",
    keywords: ["grand wedding room", "red white decoration", "premium wedding room", "arch canopy", "luxury first night Lahore"],
    category: "Room Decor"
  },
  {
    id: 7,
    slug: "luxury-bridal-canopy-room-decoration-white-red-flowers",
    title: "Luxury Bridal Canopy Room Decoration – White & Red Flowers",
    price: 15000,
    image: "/images/luxury-bridal-canopy-room-decoration-white-red-flowers.webp",
    description: "This luxury bridal canopy room decoration combines a rich canopy of white and red flowers above the bed with matching side arrangements and soft fabric drapes. The design looks royal and elegant, perfect for bridal photos and wedding night entry. Suitable for both traditional bridal room decoration and romantic first-night setups in Lahore.",
    shortDescription: "Luxury bridal canopy room decoration with white and red fresh flowers, side arrangements and soft draping – ideal for bridal room & first-night décor in Lahore.",
    features: [
      "Rich canopy of white and red flowers",
      "Matching side arrangements",
      "Soft fabric drapes",
      "Royal elegant look",
      "Perfect for bridal photos",
      "Wedding night entry design"
    ],
    metaDescription: "Luxury bridal canopy wedding room decoration in Lahore with white & red flowers and soft draping. Royal bridal bedroom décor and first-night setup.",
    keywords: ["luxury bridal canopy", "white red flowers", "royal decoration", "bridal room Lahore", "luxury wedding night"],
    category: "Room Decor"
  },
  {
    id: 8,
    slug: "luxury-bridal-room-rose-petal-decoration-full-bed-setup",
    title: "Luxury Bridal Room Rose Petal Decoration – Full Bed Setup",
    price: 7500,
    image: "/images/luxury-bridal-room-rose-petal-decoration-full-bed-setup.webp",
    description: "This design focuses on rose petal wedding room decoration. Fresh red rose petals are spread across the bed and floor, with a thick floral border at the foot of the bed and matching vases on the side tables. Perfect for couples who love flowers but prefer no canopy or heavy structures – just a clean, luxurious petal-based first-night room.",
    shortDescription: "Full bed rose petal wedding room decoration with floral border and scattered petals – a simple but rich first-night setup in Lahore.",
    features: [
      "Fresh red rose petals",
      "Petal work on bed and floor",
      "Thick floral border",
      "Matching side vases",
      "No canopy structure",
      "Clean luxurious look"
    ],
    metaDescription: "Luxury bridal room rose petal decoration in Lahore with full bed setup, floral border and scattered petals. Simple, rich first-night room décor.",
    keywords: ["rose petal decoration", "full bed setup", "petal decoration Lahore", "simple wedding room", "luxury petals"],
    category: "Room Decor"
  },
  {
    id: 9,
    slug: "pastel-pink-canopy-wedding-room-decoration-gold-bed-setup",
    title: "Pastel Pink Canopy Wedding Room Decoration – Gold Bed Setup",
    price: 25000,
    image: "/images/pastel-pink-canopy-wedding-room-decoration-gold-bed-setup.webp",
    description: "This pastel pink canopy wedding room decoration is designed for couples who want a soft, modern look instead of classic red. A full canopy of blush pink and white flowers sits above the gold bed, with pastel fabric drapes and matching side pieces. Ideal for luxury hotel rooms, honeymoon stays or premium bridal bedroom décor in Lahore.",
    shortDescription: "High-end pastel pink canopy wedding room decoration with gold bed, blush flowers and soft fabric drapes – perfect for luxury bridal or honeymoon room in Lahore.",
    features: [
      "Full canopy of blush pink and white flowers",
      "Gold bed setup",
      "Pastel fabric drapes",
      "Matching side pieces",
      "Soft modern look",
      "Luxury design"
    ],
    metaDescription: "Pastel pink canopy wedding room decoration in Lahore with blush flowers, soft drapes and gold bed setup. Luxury bridal and honeymoon bedroom décor.",
    keywords: ["pastel pink canopy", "gold bed", "blush flowers", "luxury wedding room", "honeymoon decoration Lahore"],
    category: "Room Decor"
  },
  {
    id: 10,
    slug: "premium-bridal-room-flower-canopy-decoration-red-white",
    title: "Premium Bridal Room Flower Canopy Decoration – Red & White",
    price: 7400,
    image: "/images/premium-bridal-room-flower-canopy-decoration-red-white.webp",
    description: "This premium bridal flower canopy decoration features a red and white floral cluster on a canopy frame, with sheer drapes falling around the bed and matching side arrangements. Great for families who want a proper canopy look for bridal room or wedding night, but within a mid-range budget. Works well in both home bedrooms and guest houses.",
    shortDescription: "Premium red & white flower canopy bridal room decoration with net drapes – a beautiful, mid-budget wedding night room setup in Lahore.",
    features: [
      "Red and white floral cluster",
      "Canopy frame",
      "Sheer drapes",
      "Matching side arrangements",
      "Mid-range budget",
      "Perfect for home and guest houses"
    ],
    metaDescription: "Premium bridal room flower canopy decoration in Lahore with red & white flowers and net drapes. Beautiful mid-budget wedding night room décor.",
    keywords: ["premium canopy", "red white flowers", "mid budget", "bridal room decoration", "net drapes Lahore"],
    category: "Room Decor"
  },
  {
    id: 11,
    slug: "purple-net-wedding-room-decoration-lahore",
    title: "Purple Net Wedding Room Decoration – Red & White Flowers (Lahore)",
    price: 11500,
    image: "/images/purple-net-wedding-room-decoration-lahore.webp",
    description: "Create a dreamy first-night bedroom with this Purple Net Wedding Room Decoration by Lahore Blooms. Fresh red and white flowers line the headboard and bed base, while soft purple net is draped across the room to give a romantic canopy effect. The clean design keeps the bed comfortable while still looking premium in photos. Ideal for bridal room decoration, wedding night surprises or simple honeymoon bedroom décor at home or in hotels across Lahore. Our team brings all flowers, net and lights, decorates the full room and leaves everything photo-ready before the couple arrives.",
    shortDescription: "Romantic purple net wedding room decoration with fresh red and white flowers on the headboard and base of the bed. Perfect for first-night and bridal room setups in Lahore.",
    features: [
      "Purple net canopy effect",
      "Fresh red and white flowers",
      "Headboard and bed base decoration",
      "Romantic design",
      "Comfortable bed setup",
      "Photo-ready room"
    ],
    metaDescription: "Romantic purple net wedding room decoration in Lahore with fresh red & white flowers. Perfect bridal & first-night bedroom décor by Lahore Blooms from Rs11,500.",
    keywords: ["purple net decoration", "red white flowers", "bridal room Lahore", "first night decoration", "purple canopy"],
    category: "Room Decor"
  },
  {
    id: 12,
    slug: "red-white-artificial-flower-canopy-wedding-room-decoration",
    title: "Red & White Artificial Flower Canopy Wedding Room Decoration",
    price: 20000,
    image: "/images/red-white-artificial-flower-canopy-wedding-room-decoration.webp",
    description: "This Red & White Artificial Flower Canopy Wedding Room Decoration is designed for families who want a grand look that lasts many hours. A full four-post canopy is covered with high-quality artificial roses in red and white, combined with net drapes and warm fairy lights around the bed. The design creates a royal bridal room look while staying fresh throughout mehndi, baraat and walima days. Best for homes and guest houses where the setup needs to stay beautiful for longer and where couples prefer low-maintenance décor with a luxury feel. Our Lahore Blooms team handles complete installation and removal.",
    shortDescription: "Full canopy wedding room decoration with premium red and white artificial flowers, fairy lights and draped net – ideal for long events or late-night functions in Lahore.",
    features: [
      "High-quality artificial roses",
      "Full four-post canopy",
      "Net drapes",
      "Warm fairy lights",
      "Long-lasting design",
      "Royal bridal room look"
    ],
    metaDescription: "Grand red & white artificial flower canopy wedding room decoration in Lahore. Long-lasting bridal room & first-night setup with lights and net by Lahore Blooms.",
    keywords: ["artificial flowers", "red white canopy", "long lasting decoration", "bridal room", "artificial flower decoration Lahore"],
    category: "Room Decor"
  },
  {
    id: 13,
    slug: "red-white-canopy-wedding-room-decoration-lahore",
    title: "Red & White Canopy Wedding Room Decoration – Simple & Elegant",
    price: 8500,
    image: "/images/red-white-canopy-wedding-room-decoration-lahore.webp",
    description: "For couples who like a simple yet classy look, this Red & White Canopy Wedding Room Decoration is the perfect choice. The design features a slim canopy frame with white net, red and white flower bunches on the pillars, and fresh petals on the bed. Soft colours keep the room bright and airy while still giving a clear wedding-night feel. Ideal for smaller rooms or low-ceiling spaces where a heavy canopy would feel too much. Lahore Blooms decorates your bedroom or hotel room and leaves it ready for photos and a comfortable night's sleep.",
    shortDescription: "Light canopy wedding room decoration with red and white flowers and soft net draping – a clean, elegant first-night room design for Lahore couples.",
    features: [
      "Slim canopy frame",
      "White net",
      "Red and white flower bunches",
      "Fresh petals on bed",
      "Bright and airy",
      "Perfect for small rooms"
    ],
    metaDescription: "Simple and elegant red & white canopy wedding room decoration in Lahore. Fresh flowers, net and petals for bridal & first-night bedroom décor from Rs8,500.",
    keywords: ["simple canopy", "red white decoration", "elegant wedding room", "small room decoration", "light canopy Lahore"],
    category: "Room Decor"
  },
  {
    id: 14,
    slug: "red-white-fresh-flower-wedding-room-decoration-heart-petals-bed",
    title: "Red & White Fresh Flower Wedding Room Decoration – Heart Petals Bed",
    price: 9500,
    image: "/images/red-white-fresh-flower-wedding-room-decoration-heart-petals-bed.webp",
    description: "This Red & White Fresh Flower Wedding Room Decoration is a timeless choice for traditional families in Lahore. Fresh red and white flowers create a full border around the bed, with matching arrangements on the headboard and side tables. The centre of the bed features a heart-shape design made with rose petals for a romantic surprise when the couple enters. Great for first-night room decoration at home or in guest houses, especially when you want a strong floral presence without a canopy structure. Our team uses premium fresh flowers and completes the setup in 1–2 hours.",
    shortDescription: "Classic red & white fresh flower wedding room decoration with full bed border and heart-shape petals design – perfect for romantic first-night setups in Lahore.",
    features: [
      "Full bed border with flowers",
      "Headboard arrangements",
      "Side table arrangements",
      "Heart-shape petal design",
      "No canopy structure",
      "Premium fresh flowers"
    ],
    metaDescription: "Traditional red & white fresh flower wedding room decoration in Lahore with full bed border and heart-shape petals design. Ideal first-night setup by Lahore Blooms.",
    keywords: ["red white fresh flowers", "heart petals", "bed border decoration", "first night room", "traditional decoration Lahore"],
    category: "Room Decor"
  },
  {
    id: 15,
    slug: "red-white-luxury-canopy-wedding-room-decoration-lahore",
    title: "Red & White Luxury Canopy Wedding Room Decoration",
    price: 14700,
    image: "/images/red-white-luxury-canopy-wedding-room-decoration-lahore.webp",
    description: "Give your bridal room a five-star makeover with this Red & White Luxury Canopy Wedding Room Decoration. A strong canopy frame is completely covered with lush red and white fresh flowers on all four sides, with soft net panels and warm lighting around the bed. The design looks stunning in professional photos and videos and creates a true \"wow\" moment when the bride and groom enter. Ideal for premium weddings, hotel suites and large bedrooms in Lahore where families want an unforgettable first-night or bridal room experience.",
    shortDescription: "Premium red & white luxury canopy wedding room decoration with dense flowers on all sides, creating a royal bridal bedroom look for Lahore weddings.",
    features: [
      "Strong canopy frame",
      "Dense red and white flowers",
      "All four sides covered",
      "Soft net panels",
      "Warm lighting",
      "Five-star makeover"
    ],
    metaDescription: "High-end red & white luxury canopy wedding room decoration in Lahore with dense fresh flowers and net. Perfect bridal & first-night bedroom décor by Lahore Blooms.",
    keywords: ["luxury canopy", "red white luxury", "dense flowers", "premium wedding room", "royal bridal room Lahore"],
    category: "Room Decor"
  },
  {
    id: 16,
    slug: "royal-red-white-full-canopy-wedding-room-decoration-lahore",
    title: "Royal Red & White Full Canopy Wedding Room Decoration",
    price: 18000,
    image: "/images/royal-red-white-full-canopy-wedding-room-decoration-lahore.webp",
    description: "This Royal Red & White Full Canopy Wedding Room Decoration is made for families who want a proper royal look. The full canopy is packed with fresh red and white flowers from top to bottom, with flowing white net creating a soft curtain effect around the bed. Combined with a classic furniture style, the setup looks incredibly rich in both mobile and professional photography. Best suited for main wedding nights, special bridal entries and premium home or hotel rooms in Lahore. Lahore Blooms manages the entire installation, so your family can focus on the celebrations.",
    shortDescription: "Royal red & white full canopy wedding room decoration with heavy flowers and flowing net – a grand bridal bedroom design for big Lahore weddings.",
    features: [
      "Full canopy packed with flowers",
      "Top to bottom coverage",
      "Flowing white net",
      "Soft curtain effect",
      "Rich royal look",
      "Professional photography ready"
    ],
    metaDescription: "Royal red & white full canopy wedding room decoration in Lahore with heavy fresh flowers and net. Grand bridal & first-night bedroom décor by Lahore Blooms.",
    keywords: ["royal canopy", "full canopy", "red white royal", "grand wedding room", "bridal entry decoration Lahore"],
    category: "Room Decor"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug);
}

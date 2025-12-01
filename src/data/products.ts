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
    slug: "red-roses-garland-wedding-car-decoration-white-suv",
    title: "Full Red Roses Garland Wedding Car Decoration – White SUV",
    price: 3500,
    image: "/images/red-roses-garland-wedding-car-decoration-white-suv.webp",
    description: "Turn a simple white SUV into a proper bridal car. This design uses fresh red roses and lush green leaves to create a full garland around the bonnet and front of the vehicle, with matching side trails and neat ribbon bows on the doors. Perfect if you want a decorative car for wedding that looks grand in photos but still feels clean and modern. Ideal for: Dulha or dulhan bridal car decoration, Barat or engagement car, Larger vehicles like Tucson / Sportage / other white SUVs. Our team installs the flowers at your home or venue anywhere in Lahore and fixes everything safely so it's easy to remove after the event.",
    shortDescription: "Fresh red rose garlands wrapped around the bonnet and sides of a white SUV, finished with soft bridal ribbons on the doors. A bold wedding car flower decoration for dulha or dulhan entry in Lahore.",
    features: [
      "Full red rose garlands on bonnet and sides",
      "Matching side trails",
      "Neat ribbon bows on doors",
      "Fresh roses and green leaves",
      "Perfect for white SUVs",
      "Easy removal after event"
    ],
    metaDescription: "Full red roses garland wedding car decoration on a white SUV in Lahore. Fresh flower bridal car design with bonnet and side garlands, perfect for dulha or dulhan entry.",
    keywords: ["red roses garland", "white SUV wedding car", "bridal car decoration", "dulha car", "wedding car flowers Lahore"],
    category: "Car Decor"
  },
  {
    id: 2,
    slug: "ribbon-roses-wedding-car-decoration-garden-style-honda",
    title: "Full Ribbon & Roses Wedding Car Decoration – Garden Style Honda",
    price: 2800,
    image: "/images/ribbon-roses-wedding-car-decoration-garden-style-honda.webp",
    description: "This garden-style bridal car combines classic red wedding car ribbon with fresh roses for a simple but eye-catching look. Two wide ribbons sweep across the bonnet and roof, leading to central floral clusters at the front and small rose accents across the body. Perfect for: Couples wanting car decoration for wedding simple but not boring, Honda City / Civic or similar sedans, Daytime barat, nikkah or engagement events in parks or farmhouses. If you're searching for car decor for marriage near me in Lahore, this budget-friendly design gives you a complete bridal look without heavy flowers.",
    shortDescription: "Diagonal red wedding car ribbons with fresh rose clusters across a white Honda sedan, giving a soft \"garden style\" look for simple, elegant car decoration for marriage.",
    features: [
      "Diagonal red ribbons across bonnet and roof",
      "Central floral clusters",
      "Small rose accents",
      "Garden style design",
      "Perfect for Honda City/Civic",
      "Budget-friendly option"
    ],
    metaDescription: "Simple ribbon and roses wedding car decoration on a white Honda sedan in Lahore. Garden style bridal car with diagonal red ribbons and fresh flower clusters.",
    keywords: ["ribbon roses wedding car", "garden style", "Honda wedding car", "simple car decoration", "budget wedding car Lahore"],
    category: "Car Decor"
  },
  {
    id: 3,
    slug: "grand-red-white-garland-wedding-car-decoration-black-civic",
    title: "Grand Red & White Full Garland Wedding Car Decoration – Black Civic",
    price: 7000,
    image: "/images/grand-red-white-garland-wedding-car-decoration-black-civic.webp",
    description: "For couples who want an all-out wedding car decoration, this grand design covers your black Civic in sweeping red and white floral garlands. The arrangement frames the entire car – bonnet, roofline and sides – with carefully spaced rose clusters for a premium, high-impact look. Best for: Main dulha car decoration at barat, Evening weddings and photo shoots, Black Civic or similar sedans (City, Corolla, Elantra). This is one of our most requested best marriage car decoration styles in Lahore and ideal when you want the groom's car to stand out from the whole barat line.",
    shortDescription: "Luxury bridal car decoration on a black Honda Civic with red and white full-length garlands wrapping the bonnet, roof and sides – a dramatic choice for dulha barat entry.",
    features: [
      "Full-length red and white garlands",
      "Bonnet, roofline and sides coverage",
      "Carefully spaced rose clusters",
      "Premium high-impact look",
      "Perfect for black Civic",
      "Ideal for main dulha car"
    ],
    metaDescription: "Grand red and white full garland wedding car decoration on a black Honda Civic in Lahore. Luxury dulha car design with complete floral coverage.",
    keywords: ["grand garland wedding car", "black Civic decoration", "dulha car", "luxury wedding car", "full garland Lahore"],
    category: "Car Decor"
  },
  {
    id: 4,
    slug: "red-roses-full-garland-wedding-car-decoration-kia-suv",
    title: "Grand Red Roses Full Garland Wedding Car Decoration – White Kia SUV",
    price: 5900,
    image: "/images/red-roses-full-garland-wedding-car-decoration-kia-suv.webp",
    description: "This design turns your white Kia (Sportage or similar SUV) into a classic flower wedding car. A thick red rose garland frames the bonnet and winds up to the roof, with a round bouquet at the centre and extra touches on mirrors and sides. Perfect when you want: A traditional shadi car decoration with full flowers, Strong contrast on a white SUV, A main car that looks great in wide-angle photos and drone shots. Ideal for dulha, dulhan or couple's car, and can be matched with simpler ribbon décor on family cars.",
    shortDescription: "Fresh red rose garlands circling the bonnet and roof of a white Kia SUV with a bold central bouquet – a classic wedding car flower decoration for barat and walima in Lahore.",
    features: [
      "Thick red rose garland",
      "Bonnet and roof coverage",
      "Round central bouquet",
      "Mirror and side touches",
      "Perfect for white Kia SUV",
      "Great for drone shots"
    ],
    metaDescription: "Red roses full garland wedding car decoration on a white Kia SUV in Lahore. Classic bridal car flower setup with bonnet and roof garlands.",
    keywords: ["red roses garland", "Kia SUV wedding car", "full garland", "bridal car flowers", "white SUV decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 5,
    slug: "pink-red-string-wedding-car-decoration-white-suv",
    title: "Pink & Red Wedding Car Decoration – String Style on White SUV",
    price: 2900,
    image: "/images/pink-red-string-wedding-car-decoration-white-suv.webp",
    description: "This design mixes soft pink fabric with bright red flowers for a lively wedding car decoration that works perfectly for outdoor venues. Net ribbons are pulled from the bonnet to the roof in straight lines, while clusters of roses decorate the mirrors, sides and bonnet. Great choice for: Couples who like colourful bridal car decoration without full coverage, Daytime garden weddings or farmhouse barat, White SUVs such as Prado, Fortuner, Tucson and similar models. If you're searching \"wedding car decoration near me\" and want something modern but desi, this pink-and-red setup is a strong option.",
    shortDescription: "White SUV with pink net ribbons, red flower strings and bonnet bouquet – a colourful car decoration for wedding at home or farmhouse functions.",
    features: [
      "Pink net ribbons in straight lines",
      "Red flower clusters",
      "Bonnet bouquet",
      "Mirror and side decoration",
      "Perfect for outdoor venues",
      "Modern desi style"
    ],
    metaDescription: "Pink net ribbons and red flower wedding car decoration on a white SUV in Lahore. Colourful bridal car design with string style layout.",
    keywords: ["pink red wedding car", "string style", "white SUV decoration", "colourful bridal car", "net ribbons Lahore"],
    category: "Car Decor"
  },
  {
    id: 6,
    slug: "red-white-bridal-car-decoration-black-audi-sedan",
    title: "Red & White Garland Bridal Car Decoration – Black Audi Sedan",
    price: 10000,
    image: "/images/red-white-bridal-car-decoration-black-audi-sedan.webp",
    description: "Make a strong entrance with this elegant Audi car wedding decoration. Fresh white gladiolus and red roses are arranged in a dense garland across the bonnet, complemented by a compact bouquet on the roof and neat ribbons on the mirrors. Best for: High-end dulha or dulhan bridal car decoration, Walima or reception arrivals, Black Audi, BMW or Mercedes sedans. We fix every stem carefully to protect the paint, making this a safe choice for rented luxury vehicles as well.",
    shortDescription: "Premium bridal car décor on a black Audi sedan with a wide red-and-white bonnet garland and matching roof bouquet – a luxury option for Audi wedding car decoration in Lahore.",
    features: [
      "Dense red and white garland",
      "White gladiolus and red roses",
      "Compact roof bouquet",
      "Neat ribbons on mirrors",
      "Paint-safe installation",
      "Perfect for luxury sedans"
    ],
    metaDescription: "Luxury red and white garland bridal car decoration on a black Audi sedan in Lahore. Premium wedding car flowers with bonnet and roof arrangements.",
    keywords: ["Audi wedding car", "luxury bridal car", "red white garland", "premium car decoration", "black Audi Lahore"],
    category: "Car Decor"
  },
  {
    id: 7,
    slug: "pink-drape-lilac-flowers-wedding-car-decoration-jaguar",
    title: "Pink Drape & Lilac Flowers Wedding Car Decoration – White Jaguar",
    price: 4900,
    image: "/images/pink-drape-lilac-flowers-wedding-car-decoration-jaguar.webp",
    description: "This pastel look is perfect for couples who prefer subtle, romantic wedding car decoration. A sheer pink fabric sheet flows over the bonnet while a side bouquet of lilac, pink and white flowers creates a beautiful focal point. Additional floral touches on the mirrors complete the design. Ideal for: Reception and walima days, Pastel or English-style themes, Jaguar, BMW, Mercedes and other premium white sedans. If you're searching for \"beautiful wedding car decoration\" with soft colours instead of classic red, this is an excellent choice.",
    shortDescription: "Soft pink drape across the bonnet of a white Jaguar with lilac and white flower bouquet – a stylish bridal car design for pastel-themed weddings.",
    features: [
      "Sheer pink fabric drape",
      "Lilac, pink and white bouquet",
      "Side focal point",
      "Mirror floral touches",
      "Pastel theme",
      "Perfect for premium sedans"
    ],
    metaDescription: "Pink drape and lilac flower wedding car decoration on a white Jaguar in Lahore. Elegant pastel bridal car design for modern weddings.",
    keywords: ["pink drape wedding car", "pastel bridal car", "Jaguar decoration", "lilac flowers", "elegant car decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 8,
    slug: "pink-drape-pastel-roses-wedding-car-decoration-white-suv",
    title: "Pink Drape & Pastel Roses Wedding Car Decoration – White SUV",
    price: 3500,
    image: "/images/pink-drape-pastel-roses-wedding-car-decoration-white-suv.webp",
    description: "This design gives you a dreamy pastel bridal car decoration. A blush-pink fabric sheet is laid across the bonnet while two rounded bouquets of pastel roses (pink and cream) sit at the centre front and on the roof. Small rose details on the doors tie the whole look together. Perfect for: Walima, engagement or nikkah ceremony, White SUVs such as Creta, Sportage, Tucson, Couples who search for \"simple car decor for wedding\" but want a premium touch. It pairs nicely with simple ribbon décor on barati cars in the same colour family.",
    shortDescription: "White SUV with soft pink drape on the bonnet and pastel rose bouquets on bonnet and roof – a modern, light wedding car decoration for brides who prefer soft colours.",
    features: [
      "Blush-pink fabric drape",
      "Two rounded pastel bouquets",
      "Pink and cream roses",
      "Door rose details",
      "Dreamy pastel look",
      "Perfect for white SUVs"
    ],
    metaDescription: "Pink drape and pastel roses wedding car decoration on a white SUV in Lahore. Soft bridal car look with bonnet and roof bouquets.",
    keywords: ["pink drape pastel", "white SUV decoration", "pastel roses", "soft bridal car", "dreamy car decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 9,
    slug: "pink-ribbon-red-roses-wedding-car-decoration-white-suv",
    title: "Pink Ribbon & Red Roses Wedding Car Decoration – White SUV",
    price: 3900,
    image: "/images/pink-ribbon-red-roses-wedding-car-decoration-white-suv.webp",
    description: "If you love ribbons, this design is made for you. Bright pink wedding car ribbons and bows wrap the bonnet, mirrors and door handles, while clusters of red roses add a floral pop on the bonnet and roof. The result is a lively, photogenic car that stands out in barat queues. Ideal for: Couples who want colourful bridal car decoration diy look without heavy garlands, White 4x4 or SUV vehicles, Daytime barat or mehndi processions. This style is also perfect for car decoration for wedding with ribbon searchers who still want real flowers included.",
    shortDescription: "Playful car ribbon decoration with bright pink bows and red rose clusters on a white SUV – a fun choice for shadi car decoration in Lahore.",
    features: [
      "Bright pink ribbons and bows",
      "Bonnet, mirrors and door handles",
      "Red rose clusters",
      "Lively photogenic look",
      "Perfect for white SUVs",
      "Fun shadi car style"
    ],
    metaDescription: "Pink ribbon and red roses wedding car decoration on a white SUV in Lahore. Fun shadi car decoration with bows and fresh flower clusters.",
    keywords: ["pink ribbon wedding car", "red roses", "white SUV", "shadi car", "ribbon decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 10,
    slug: "full-rose-garland-wedding-car-decoration-brown-sedan",
    title: "Premium Full Rose Garland Wedding Car Decoration – Brown Sedan",
    price: 7000,
    image: "/images/full-rose-garland-wedding-car-decoration-brown-sedan.webp",
    description: "This is one of our most detailed wedding car decoration designs. The car is framed with dense red rose garlands around the bonnet, roofline and rear, while single long-stem roses are placed neatly along the sides and boot. From every angle, the vehicle looks packed with flowers. Best for: Main dulha car or VIP guest car, Couples who want the best car decoration for wedding with full coverage, Sedans such as City, Civic, Corolla and similar models. If you're searching \"decoration for marriage car\" or \"decorative car for wedding\" and want something that looks truly premium, this full rose garland design is ideal.",
    shortDescription: "Complete wedding car flower decoration on a brown sedan with thick red rose garlands circling the roof and bonnet plus single roses all over the body – a show-stopping dulha car setup.",
    features: [
      "Dense red rose garlands",
      "Bonnet, roofline and rear coverage",
      "Single long-stem roses on sides",
      "Full coverage design",
      "Premium detailed look",
      "Perfect for main dulha car"
    ],
    metaDescription: "Premium full rose garland wedding car decoration on a brown sedan in Lahore. Complete bridal car flower setup with bonnet, roof and side roses.",
    keywords: ["full rose garland", "brown sedan", "premium car decoration", "dulha car", "complete flower coverage Lahore"],
    category: "Car Decor"
  },
  {
    id: 11,
    slug: "red-white-v-garland-wedding-car-decoration-corolla-lahore",
    title: "Red & White V-Garland Wedding Car Decoration – White Corolla",
    price: 3900,
    image: "/images/red-white-v-garland-wedding-car-decoration-corolla-lahore.webp",
    description: "Turn your everyday Corolla into a beautiful bridal car with this classic red & white V-garland setup. Fresh roses and seasonal fillers are arranged in a deep V shape across the bonnet and windscreen, giving the car a premium yet traditional Pakistani wedding look. Ideal for barat car decoration, nikah and reception events where you want something eye-catching but not overdone. Our team comes to your location in Lahore, installs the full wedding car flower decoration, and removes all extra stems and tape so the car stays neat. Best for couples who want a timeless wedding car ribbon and flowers style that looks great in photos and on video.",
    shortDescription: "Elegant wedding car decoration for white Corolla with full red & white floral V-garland on the bonnet and windscreen. Perfect bridal car decoration in Lahore with fresh roses and greenery.",
    features: [
      "Deep V-shape garland",
      "Bonnet and windscreen coverage",
      "Fresh roses and seasonal fillers",
      "Traditional Pakistani look",
      "Perfect for white Corolla",
      "Timeless design"
    ],
    metaDescription: "Red & white V-style wedding car decoration on white Corolla with fresh roses in Lahore. Perfect bridal car setup for barat & walima. Same-day booking available.",
    keywords: ["V garland wedding car", "white Corolla", "red white decoration", "bridal car", "traditional car decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 12,
    slug: "diagonal-red-white-garland-wedding-car-decoration-corolla-lahore",
    title: "Diagonal Red & White Garland Wedding Car Decoration – White Corolla",
    price: 3900,
    image: "/images/diagonal-red-white-garland-wedding-car-decoration-corolla-lahore.webp",
    description: "This design is a modern twist on classic bridal car decoration. A fresh floral garland runs diagonally across the bonnet towards the driver's side, balanced with a compact bouquet on the opposite corner and scattered red blooms across the hood. The look is clean, premium and perfect for couples who prefer a simple car decoration for wedding instead of full coverage. Works well for both day and night events, and suits barat, walima or engagement rides. Our decorators handle complete installation at your home, salon or venue anywhere in Lahore, so you can enjoy a stress-free wedding car decor experience.",
    shortDescription: "Stylish diagonal wedding car garland design for white Corolla with fresh red & white flowers and bonnet accents. Great option for simple car decoration for marriage in Lahore.",
    features: [
      "Diagonal garland across bonnet",
      "Compact bouquet on corner",
      "Scattered red blooms",
      "Clean premium look",
      "Modern twist design",
      "Perfect for white Corolla"
    ],
    metaDescription: "Red & white diagonal garland bridal car decoration for white Corolla in Lahore. Simple but stylish wedding car flowers with delivery and on-site setup.",
    keywords: ["diagonal garland", "white Corolla", "red white flowers", "simple car decoration", "modern bridal car Lahore"],
    category: "Car Decor"
  },
  {
    id: 13,
    slug: "premium-suv-red-white-garland-wedding-car-decoration-lahore",
    title: "Red & White Garland Wedding Car Decoration – Premium Black SUV",
    price: 3000,
    image: "/images/premium-suv-red-white-garland-wedding-car-decoration-lahore.webp",
    description: "Arrive like a king with this premium bridal car flower decoration built specially for black SUVs. A thick red & white garland runs in a graceful curve from side mirror to side mirror, framing the bonnet and front grille. A matching bouquet on the roof or bonnet completes the look. This design is perfect for barat entry, dulha car decoration and VIP family cars. The contrast of fresh flowers on a jet-black SUV makes the car stand out in every photo. We use fresh roses and seasonal fillers, safe tape and professional fitting so the flowers stay secure throughout your route in Lahore.",
    shortDescription: "Luxury SUV wedding car decoration with full red & white floral garland across the bonnet and windscreen. Ideal for groom car decoration in Lahore.",
    features: [
      "Thick red & white garland",
      "Curved from mirror to mirror",
      "Frames bonnet and grille",
      "Matching roof/bonnet bouquet",
      "Perfect for black SUVs",
      "Professional secure fitting"
    ],
    metaDescription: "Luxury red & white garland wedding car decoration for black SUV in Lahore. Perfect groom car setup with fresh flowers and professional on-site installation.",
    keywords: ["premium SUV", "black SUV decoration", "red white garland", "groom car", "luxury car decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 14,
    slug: "red-heart-bonnet-wedding-car-decoration-black-suv-lahore",
    title: "Red Heart Bonnet Wedding Car Decoration – Black SUV",
    price: 4900,
    image: "/images/red-heart-bonnet-wedding-car-decoration-black-suv-lahore.webp",
    description: "If you want your wedding photos to scream romance, this wedding car flower decoration is for you. A large heart-shaped bouquet made from fresh red roses sits proudly on the bonnet, with soft red net draping down towards the grille and matching side bows on the mirrors and doors. This design suits engagements, first-night drives and anniversary surprises, and looks especially striking on dark or black SUVs. It's a popular choice for couples who want a bold groom car decor without full car coverage. Our decorators come to your selected spot anywhere in Lahore, complete the full setup and make sure everything is secure before you leave.",
    shortDescription: "Romantic bridal car decoration with a big red heart bouquet on the bonnet of a black SUV, finished with flowing red net and side ribbons. Perfect for dulha & dulhan car decoration.",
    features: [
      "Large heart-shaped bouquet",
      "Fresh red roses",
      "Soft red net draping",
      "Side bows on mirrors and doors",
      "Perfect for black SUVs",
      "Romantic bold design"
    ],
    metaDescription: "Romantic red heart bonnet wedding car decoration on black SUV in Lahore. Fresh rose bouquet with ribbons and net for groom & bride entry.",
    keywords: ["red heart bonnet", "black SUV", "romantic car decoration", "heart bouquet", "dulha car decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 15,
    slug: "red-ribbon-roses-wedding-car-decoration-white-sedan-lahore",
    title: "Red Ribbon & Roses Wedding Car Decoration – White Sedan",
    price: 3000,
    image: "/images/red-ribbon-roses-wedding-car-decoration-white-sedan-lahore.webp",
    description: "This design combines soft red ribbons with fresh flower accents to create a neat and photogenic bridal car design. Two parallel ribbons cross the bonnet, meeting a compact bouquet at the centre and matching side arrangements near the mirrors and rear. It's a perfect option when you need an affordable yet proper decorative car for wedding – not too heavy, not too simple. Works well for barat, walima, mehndi or dholki pick-ups. We bring all material, install safely and leave the car ready for your big entry anywhere in Lahore.",
    shortDescription: "Classic wedding car ribbon decoration with red lines across the bonnet and fresh rose bouquets for a white sedan. Great for simple marriage car decoration in Lahore.",
    features: [
      "Two parallel red ribbons",
      "Compact centre bouquet",
      "Matching side arrangements",
      "Neat photogenic design",
      "Affordable option",
      "Perfect for white sedan"
    ],
    metaDescription: "Affordable red ribbon & roses wedding car decoration for white sedan in Lahore. Simple bridal car with ribbons, bouquets and fresh flowers.",
    keywords: ["red ribbon roses", "white sedan", "simple car decoration", "affordable wedding car", "ribbon decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 16,
    slug: "luxury-black-suv-red-ribbon-roses-wedding-car-decoration-lahore",
    title: "Red Ribbon & Roses Luxury Wedding Car Decoration – Black SUV",
    price: 3900,
    image: "/images/luxury-black-suv-red-ribbon-roses-wedding-car-decoration-lahore.webp",
    description: "This design is made for high-end SUVs and luxury black cars. Multiple red ribbons are draped from roof to bumper, forming a dramatic V pattern on the bonnet. A lush red rose bouquet sits in the centre, with scattered blooms and side ribbons running along the doors. The contrast of red on black gives a grand, cinematic look – perfect for videos, reels and professional photos. Suitable for dulha car decoration, VIP guest pickup or reception arrival. Our team handles everything from floral prep to on-site fitting, ensuring a secure and polished wedding car decoration service anywhere in Lahore.",
    shortDescription: "Luxury black wedding car decoration with criss-cross red ribbons and rich rose bouquets. Ideal for premium groom car decoration and barat entry in Lahore.",
    features: [
      "Multiple red ribbons",
      "Dramatic V pattern on bonnet",
      "Lush red rose bouquet",
      "Scattered blooms and side ribbons",
      "Grand cinematic look",
      "Perfect for luxury black SUVs"
    ],
    metaDescription: "Premium red ribbon & roses bridal car decoration for black SUV in Lahore. Best groom car design with fresh flowers and full bonnet styling.",
    keywords: ["luxury black SUV", "red ribbon roses", "premium car decoration", "groom car", "cinematic car decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 17,
    slug: "classic-red-ribbon-wedding-car-decoration-floral-bonnet-lahore",
    title: "Classic Red Ribbon Wedding Car Decoration – Floral Bonnet Design",
    price: 2800,
    image: "/images/classic-red-ribbon-wedding-car-decoration-floral-bonnet-lahore.webp",
    description: "This is our go-to design for couples who want something classic and elegant without going over budget. Two red ribbons cross the bonnet, leading up to a colourful bouquet in the centre and small matching flowers across the hood. The look is balanced and clean, suitable for all types of events – from nikah to walima. It works on any light-coloured sedan and is ideal as a simple car decor for wedding when you still want proper flowers and not only ribbon. We provide complete wedding car decoration near you anywhere in Lahore with fresh flowers and careful installation.",
    shortDescription: "Traditional wedding car ribbon styling with central floral bouquet and side accents on a silver sedan. A neat, budget-friendly car decoration for wedding in Lahore.",
    features: [
      "Two crossing red ribbons",
      "Colourful centre bouquet",
      "Small matching flowers",
      "Balanced clean look",
      "Budget-friendly design",
      "Perfect for light sedans"
    ],
    metaDescription: "Classic red ribbon wedding car decoration with floral bonnet bouquet for silver sedan in Lahore. Perfect simple bridal car design on a budget.",
    keywords: ["classic red ribbon", "floral bonnet", "silver sedan", "budget car decoration", "traditional wedding car Lahore"],
    category: "Car Decor"
  },
  {
    id: 18,
    slug: "red-roses-wedding-car-decoration-black-mg-suv-lahore",
    title: "Red Roses Wedding Car Decoration – Black MG SUV",
    price: 2500,
    image: "/images/red-roses-wedding-car-decoration-black-mg-suv-lahore.webp",
    description: "This design keeps the car's modern lines visible while adding rich red floral highlights. A bright rose bouquet sits on the bonnet, with matching blooms dotted along the sides and subtle ribbon drapes across the hood and mirrors. The warm red tones look stunning against the black MG body, especially at sunset or night events. Suitable for barat, engagement or reception drives when you want a smart but not overloaded bridal car decoration. We offer complete car decoration for wedding near you in Lahore with on-site fitting and fresh premium roses.",
    shortDescription: "Stylish black car wedding decoration with red roses, light ribbon detail and bonnet bouquet on MG SUV. Great choice for modern groom car decor in Lahore.",
    features: [
      "Bright rose bouquet on bonnet",
      "Matching blooms on sides",
      "Subtle ribbon drapes",
      "Modern lines visible",
      "Perfect for black MG SUV",
      "Smart elegant design"
    ],
    metaDescription: "Modern red roses wedding car flower decoration for black MG SUV in Lahore. Groom car with bonnet bouquet, side flowers and ribbon accents.",
    keywords: ["red roses MG SUV", "black car decoration", "modern groom car", "MG wedding car", "stylish car decoration Lahore"],
    category: "Car Decor"
  },
  {
    id: 19,
    slug: "elegant-red-roses-wedding-car-decoration-white-kia-suv-lahore",
    title: "Elegant Red Roses Wedding Car Decoration – White Kia SUV",
    price: 3000,
    image: "/images/elegant-red-roses-wedding-car-decoration-white-kia-suv-lahore.webp",
    description: "This design focuses on neat, well-placed floral work instead of heavy coverage. A medium-sized red rose bouquet sits on the bonnet, linked with flowing ribbon towards the windshield and smaller bouquets on the roof and side mirrors. The result is a clean, graceful wedding car decoration that suits both daytime and evening events. Perfect for couples who want something classy for photography without hiding the car. Works for barat, walima and even anniversary surprise drives. We provide full wedding car decoration service in Lahore, including delivery, setup and finishing touches.",
    shortDescription: "Elegant SUV wedding car decoration with red rose bouquets and soft ribbon lines on a white Kia. Ideal for bridal car decoration with flowers in Lahore.",
    features: [
      "Medium-sized bonnet bouquet",
      "Flowing ribbon to windshield",
      "Smaller roof and mirror bouquets",
      "Clean graceful design",
      "Perfect for white Kia SUV",
      "Classy photography-ready"
    ],
    metaDescription: "Elegant red roses & ribbon bridal car decoration for white Kia SUV in Lahore. Clean wedding car design with fresh flowers and on-site setup.",
    keywords: ["elegant red roses", "white Kia SUV", "bridal car flowers", "graceful car decoration", "Kia wedding car Lahore"],
    category: "Car Decor"
  },
  {
    id: 20,
    slug: "simple-ribbon-red-roses-wedding-car-decoration-budget-lahore",
    title: "Simple Ribbon & Red Roses Wedding Car Decoration – Budget Package",
    price: 1500,
    image: "/images/simple-ribbon-red-roses-wedding-car-decoration-budget-lahore.webp",
    description: "This design is made for couples who want a decent, photogenic wedding car decoration at the lowest possible cost. A neat red rose bouquet decorates the centre of the bonnet, with a single ribbon drape and scattered petals adding a soft romantic touch. Perfect for at-home nikah, small family functions or as a second decorative car for wedding for relatives. Works on any white or light-coloured sedan and keeps the car easy to drive and park. Even with a simple design, we still use fresh flowers and careful installation so your bridal car decoration looks tidy and professional.",
    shortDescription: "Minimal simple car decoration for wedding with soft ribbon and a small red rose bouquet on the bonnet. Best budget-friendly marriage car decoration in Lahore.",
    features: [
      "Neat red rose bouquet",
      "Single ribbon drape",
      "Scattered petals",
      "Minimal design",
      "Budget-friendly option",
      "Perfect for light sedans"
    ],
    metaDescription: "Affordable simple ribbon & red roses wedding car decoration in Lahore. Small bonnet bouquet and ribbon design – perfect budget bridal car setup.",
    keywords: ["simple ribbon roses", "budget wedding car", "minimal car decoration", "affordable bridal car", "budget package Lahore"],
    category: "Car Decor"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug);
}

export const COMPANY_INFO = {
  name: "Skyrock Interiors Limited",
  shortName: "Skyrock Interiors",
  tagline: "Professional Interior Solutions & Architectural Finishing",
  headline: "Transform Your House Into A Home You'll Love",
  bio: "Skyrock Interiors is Kenya's premier interior craftsmanship firm. We specialize in custom kitchens, bespoke wardrobes, designer TV media walls, gypsum suspended ceilings, and complete residential & commercial finishing. We deliver uncompromising quality, stylish contemporary designs, and reliable service nationwide.",
  phones: [
    { display: "0745 918 724", international: "+254745918724", label: "Primary Office / WhatsApp" },
    { display: "0716 223 230", international: "+254716223230", label: "Sales & Site Consultations" },
  ],
  whatsappNumber: "+254745918724",
  email: "info@skyrockinteriors.co.ke",
  address: "Enterprise Rd / Mombasa Rd Junction, Industrial Area, Nairobi, Kenya",
  serviceAreas: ["Nairobi (Kilimani, Westlands, Karen, Runda, Kileleshwa)", "Kiambu (Ruaka, Thika Rd, Kiambu Town)", "Machakos (Syokimau, Athi River)", "Nakuru", "Mombasa", "Nationwide Across Kenya"],
  hours: "Monday – Saturday: 8:00 AM – 6:00 PM | Sunday: By Appointment",
  stats: [
    { value: "350+", label: "Completed Projects", detail: "Homes, villas & offices" },
    { value: "100%", label: "Bespoke Customization", detail: "Tailored to your space" },
    { value: "5 Yrs", label: "Workmanship Warranty", detail: "Built to endure" },
    { value: "14-21", label: "Days Delivery", detail: "Fast precision turnaround" },
  ],
  socials: {
    facebook: "https://www.facebook.com/Skyrockinteriorslimited",
    instagram: "https://instagram.com/skyrock_interiors",
    tiktok: "https://tiktok.com/@skyrockinteriors",
  }
};

export const SERVICES = [
  {
    id: "kitchens",
    title: "Custom Luxury Kitchens",
    shortDesc: "Ergonomic, modern modular kitchens tailored to your cooking lifestyle and spatial layout.",
    fullDesc: "From contemporary open-plan minimalist kitchens to opulent classic cabinetry, we craft bespoke kitchens using moisture-resistant E1 boards, imported quartz and granite countertops, and premium Blum soft-closing hardware.",
    icon: "ChefHat",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Moisture-resistant high-density Marine & MDF cores",
      "Scratch-proof Acrylic, Matte & Wood-grain finishes",
      "German Blum soft-closing hinges & tandem drawers",
      "Engineered Quartz, Granite & Sintered Stone countertops",
      "Integrated pull-out larders, spice racks & corner carousels",
      "Recessed LED under-cabinet profile lighting"
    ],
    startingPrice: "From KES 180,000",
    popular: true
  },
  {
    id: "wardrobes",
    title: "Bespoke Wardrobes & Closets",
    shortDesc: "Floor-to-ceiling built-in wardrobes, walk-in dressing rooms, and smart storage organizers.",
    fullDesc: "Maximize your bedroom space with flawlessly fitted wardrobes. Whether you envision tinted bronze glass sliding doors with warm sensor LEDs or elegant matte lacquered hinged doors with velvet jewelry trays, we build it to perfection.",
    icon: "DoorClosed",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Custom walk-in closets & fitted dressing suites",
      "Floor-to-ceiling sliding & handleless push-to-open doors",
      "Tinted bronze & fluted glass display doors",
      "Automated motion-activated warm LED closet rails",
      "Dedicated shoe carousels, watch organizers & jewelry trays",
      "Full internal vanity mirrors with anti-fog backlights"
    ],
    startingPrice: "From KES 120,000",
    popular: true
  },
  {
    id: "tv-units",
    title: "Designer TV Units & Media Walls",
    shortDesc: "Statement feature walls combining acoustic fluted panels, marble stone, and floating consoles.",
    fullDesc: "Turn your living room or entertainment lounge into a five-star cinema experience. We build custom media walls with acoustic slatted wooden panels, backlit faux onyx or Italian porcelain slabs, and completely concealed cabling.",
    icon: "Tv",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Acoustic fluted wood slats (Oak, Walnut, Charcoal)",
      "Backlit UV marble / porcelain stone slab centerpieces",
      "Floating consoles with hidden cable channels & soundbar bays",
      "Remote & smart phone controlled RGBW ambient halo lighting",
      "Tempered glass display cubbies for decor & books",
      "Custom electric fireplace integration ready"
    ],
    startingPrice: "From KES 75,000",
    popular: true
  },
  {
    id: "finishing",
    title: "Complete Finishing & Revamps",
    shortDesc: "Turnkey residential transformations: gypsum ceilings, architectural lighting, tiling, and paint.",
    fullDesc: "As showcased in our signature project transformations, we take bare, raw structural houses and transform them into luxurious, livable dream homes. We handle suspended gypsum ceilings, modern electrical cove lighting, porcelain tiling, exterior textured coatings, and custom interior doors.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Architectural gypsum suspended ceilings with multi-level bulkheads",
      "Indirect warm LED cove lighting & magnetic track spotlights",
      "Large-format porcelain & marble floor/wall tiling",
      "Premium interior washable paints & exterior weatherproof coatings",
      "Custom modern flush interior doors & architraves",
      "Full exterior facade modernizing & facade cladding"
    ],
    startingPrice: "From KES 250,000",
    popular: false
  }
];

export const TRANSFORMATION_SHOWCASES = [
  {
    id: "exterior-villa-transformation",
    title: "Residential Villa Total Exterior Revamp",
    location: "Kiambu Road / Nairobi Outskirts",
    description: "From bare, scaffolded grey concrete blockwork to a breathtaking contemporary beige-and-white architectural estate with clean modern lines, tinted glazing, and weather-shield finishing.",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    beforeLabel: "Under Construction",
    afterLabel: "Skyrock Finished",
    scope: ["Exterior Textured Plaster", "Modern Window Framing", "Glass Balconies", "Boundary & Facade Lighting"]
  },
  {
    id: "living-tv-transformation",
    title: "Living Room & Media Wall Transformation",
    location: "Runda Estate, Nairobi",
    description: "Transformation of an empty plain white hall into an intimate, warm luxury lounge featuring fluted oak panels, backlit Italian statuario porcelain, and floating media cabinetry.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    beforeLabel: "Bare Shell Room",
    afterLabel: "Luxury Media Wall",
    scope: ["Fluted Timber Slats", "Integrated LED Strips", "Concealed Conduit", "Gypsum Bulkhead"]
  },
  {
    id: "kitchen-transformation",
    title: "Gourmet Chef's Kitchen Overhaul",
    location: "Kilimani, Nairobi",
    description: "Replacing outdated 1990s wooden cupboards with high-gloss champagne acrylic cabinets, waterfall quartz central island, and modern under-cabinet illumination.",
    beforeImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1200&auto=format&fit=crop",
    beforeLabel: "Old Dated Kitchen",
    afterLabel: "Modern Waterfall Island",
    scope: ["Custom Island with Bar Seating", "Quartz Stone Worktops", "Soft-Close Blum Runners", "Pantry Tower"]
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "The Obsidian & Gold Luxury Kitchen",
    category: "kitchens",
    categoryName: "Kitchens",
    location: "Karen, Nairobi",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=900&auto=format&fit=crop",
    details: "Super-matte anti-fingerprint black cabinets paired with warm champagne gold handles and Calacatta gold quartz.",
    timeframe: "18 Days",
    rating: 5
  },
  {
    id: 2,
    title: "Executive Master Walk-In Wardrobe",
    category: "wardrobes",
    categoryName: "Wardrobes",
    location: "Runda Water, Nairobi",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=900&auto=format&fit=crop",
    details: "Tinted bronze tempered glass doors, automated ambient warm strip LEDs, and center island jewelry showcase.",
    timeframe: "14 Days",
    rating: 5
  },
  {
    id: 3,
    title: "Fluted Acoustic Slat TV Feature Wall",
    category: "tv-units",
    categoryName: "TV Units",
    location: "Kileleshwa, Nairobi",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop",
    details: "Custom charred oak slats with backlit UV marble sheet and suspended 3-meter floating drawer console.",
    timeframe: "7 Days",
    rating: 5
  },
  {
    id: 4,
    title: "Contemporary Villa Facade Finishing",
    category: "finishing",
    categoryName: "Full Finishing",
    location: "Kiambu Road",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
    details: "Exterior architectural finishing, silicone textured plaster, aluminum composite panels, and LED perimeter lighting.",
    timeframe: "35 Days",
    rating: 5
  },
  {
    id: 5,
    title: "Nordic White & Oak Minimalist Kitchen",
    category: "kitchens",
    categoryName: "Kitchens",
    location: "Westlands, Nairobi",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=900&auto=format&fit=crop",
    details: "Handleless J-pull profile cabinets, solid oak butcher-block breakfast nook, and subway splashback.",
    timeframe: "16 Days",
    rating: 5
  },
  {
    id: 6,
    title: "Modern Bedroom Sliding Wardrobe Suite",
    category: "wardrobes",
    categoryName: "Wardrobes",
    location: "Syokimau, Machakos",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900&auto=format&fit=crop",
    details: "Smoked mirror sliding doors with soft-brake dampers, integrated vanity desk, and modular shoe towers.",
    timeframe: "10 Days",
    rating: 5
  },
  {
    id: 7,
    title: "Minimalist Floating TV Console & Wall Niche",
    category: "tv-units",
    categoryName: "TV Units",
    location: "South C, Nairobi",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=900&auto=format&fit=crop",
    details: "Curved gypsum wall niche with recessed warm light profiles and ultra-matte graphite floating cabinets.",
    timeframe: "6 Days",
    rating: 5
  },
  {
    id: 8,
    title: "Full Gypsum Ceiling & Architectural Lighting",
    category: "finishing",
    categoryName: "Full Finishing",
    location: "Muthaiga, Nairobi",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=900&auto=format&fit=crop",
    details: "Multi-level perimeter tray ceilings, magnetic track lighting with dimmable fixtures, and acoustic insulation.",
    timeframe: "20 Days",
    rating: 5
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Site Consultation & Measurements",
    desc: "Our lead designer visits your property to take laser-accurate measurements, inspect electrical/plumbing points, and understand your lifestyle vision.",
    duration: "Day 1 - 2"
  },
  {
    step: "02",
    title: "3D CAD Visualization & Quote",
    desc: "We produce photorealistic 3D renders showing how your kitchen, wardrobe, or TV unit will look, accompanied by a transparent itemized quotation.",
    duration: "Day 3 - 5"
  },
  {
    step: "03",
    title: "Precision Factory Fabrication",
    desc: "Your cabinetry is CNC-cut and edge-banded in our specialized workshop using moisture-resistant boards and high-grade laminates.",
    duration: "Day 6 - 15"
  },
  {
    step: "04",
    title: "Clean Installation & Handover",
    desc: "Our master carpenters install everything cleanly on site, testing every soft-close hinge and LED channel, backed by our 5-year warranty.",
    duration: "Day 16 - 21"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Eng. Davis Mwangi",
    location: "Runda Estate, Nairobi",
    role: "Homeowner",
    comment: "Skyrock Interiors completely transformed our 4-bedroom villa. Their TV feature wall with fluted wood and ambient lighting is the first thing guests compliment. On time, transparent pricing, and zero headaches.",
    project: "Full House Finishing & TV Media Wall",
    stars: 5,
    date: "October 2026"
  },
  {
    id: 2,
    name: "Dr. Faith Chebet",
    location: "Kilimani, Nairobi",
    role: "Apartment Owner",
    comment: "I was very particular about my kitchen storage. Skyrock designed a modern acrylic kitchen with a quartz island and pull-out pantry that utilized every single inch. Their attention to detail with Blum soft-close fittings is unmatched.",
    project: "Custom Modular Kitchen",
    stars: 5,
    date: "September 2026"
  },
  {
    id: 3,
    name: "Michael & Grace Kamau",
    location: "Ruaka, Kiambu",
    role: "Townhouse Owners",
    comment: "We saw Skyrock's work on Facebook and reached out on WhatsApp. Within 24 hours, they were at our site taking measurements. The walk-in closet with tinted bronze doors looks like a luxury showroom! Highly recommend them.",
    project: "Master Walk-in Wardrobe",
    stars: 5,
    date: "November 2026"
  }
];

export const FAQS = [
  {
    q: "Do you offer on-site consultations across Kenya?",
    a: "Yes! We conduct initial site visits and laser measurements across Nairobi, Kiambu, Machakos, Nakuru, and can travel countrywide for medium to large residential and commercial projects."
  },
  {
    q: "What materials do you use for kitchens and wardrobes?",
    a: "We only use premium moisture-resistant high-density Marine boards and E1-grade MDF. Countertops are genuine engineered quartz, marble, or granite. All hinges and runners are heavy-duty soft-closing Blum or equivalent German hardware."
  },
  {
    q: "How long does fabrication and installation take?",
    a: "A standard custom kitchen or wardrobe takes between 14 to 21 working days from 3D design approval to complete site handover. TV units typically take 5 to 10 days."
  },
  {
    q: "Do you provide 3D designs before we commit?",
    a: "Yes. Once we take site measurements, our design team produces high-definition 3D CAD renders so you can visualize the colors, handles, finishes, and lighting before any fabrication begins."
  },
  {
    q: "What warranty do you offer on your craftsmanship?",
    a: "We provide a comprehensive 5-Year Craftsmanship Guarantee covering cabinetry structure, joinery integrity, and hardware runners against manufacturing defects."
  }
];

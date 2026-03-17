export interface Review {
    name: string;
    location: string;
    rating: number;
    date: string;
    text: string;
    verified: boolean;
}

export interface Product {
    id: string;
    name: string;
    price: string;
    priceNumber: number;
    description: string;
    images: string[];
    rating: number;
    reviewsCount: number;
    badge?: string;
    benefits: string[];
    specifications: {
        capacity?: string;
        material?: string;
        dimensions?: string;
        care?: string;
    };
    category: string;
    reviews: Review[];
}

const oilDispenserReviews: Review[] = [
    { name: "Priya Sharma", location: "Mumbai, Maharashtra", rating: 5, date: "12 Feb 2025", text: "Bahut hi sundar product hai! Iske saath oil dispense karna bohot aasaan ho gaya. Meri kitchen ka look bilkul badal gaya hai. Quality ekdam first class hai — glass thick hai aur spout drip free hai. Highly recommended!", verified: true },
    { name: "Rajiv Menon", location: "Bengaluru, Karnataka", rating: 5, date: "28 Jan 2025", text: "I was skeptical about buying a glass oil dispenser online but this exceeded all my expectations. The glass is heavy and premium feeling, and the drip-free spout actually works! My wife loves it. Worth every rupee.", verified: true },
    { name: "Ananya Krishnan", location: "Chennai, Tamil Nadu", rating: 4, date: "5 Feb 2025", text: "Gorgeous product and very functional. I use it for both olive oil and coconut oil. The only thing I'd improve is the lid could be slightly more airtight. Overall very happy with the purchase and packaging was excellent.", verified: true },
    { name: "Siddharth Joshi", location: "Pune, Maharashtra", rating: 5, date: "19 Jan 2025", text: "My kitchen has been upgraded completely with GLOCASA products. This oil dispenser is the star of the show. My guests always comment on how beautiful it looks on the counter. The glass is spotlessly clear and very thick.", verified: true },
];

const spiceJarReviews: Review[] = [
    { name: "Deepa Nair", location: "Kochi, Kerala", rating: 5, date: "3 Mar 2025", text: "I ordered the 6-jar set for my modular kitchen and it's absolutely gorgeous. The bamboo lids are a lovely touch. My spices stay fresh for much longer now. The labels that come included are very stylish and won't peel off easily.", verified: true },
    { name: "Vikram Singh", location: "New Delhi, Delhi", rating: 5, date: "17 Feb 2025", text: "Yaar, yeh product dekh ke hi dil khush ho jaata hai! Glass ekdam crystal clear hai aur bamboo ki smell bhi nahi aati inside. Great quality for the price. My wife uses these daily and they still look brand new after 2 months.", verified: true },
    { name: "Meera Iyer", location: "Hyderabad, Telangana", rating: 4, date: "25 Jan 2025", text: "Very premium looking spice jars. I replaced all my old plastic ones with these. The airtight seal is excellent. I dock one star only because delivery took a couple extra days. The product itself is 5 stars without doubt.", verified: true },
    { name: "Arun Patel", location: "Ahmedabad, Gujarat", rating: 5, date: "8 Feb 2025", text: "Perfect gift for housewarmings! I bought 3 sets — one for my home, two as gifts. All my friends loved it. The packaging is premium too, comes in a nice gift-ready box. The glass quality is top notch.", verified: true },
];

const storageReviews: Review[] = [
    { name: "Kavitha Reddy", location: "Visakhapatnam, Andhra Pradesh", rating: 5, date: "22 Feb 2025", text: "I use this canister for storing rice flour and it keeps it so fresh! The wide mouth makes it easy to scoop. The glass is very thick and hasn't chipped or cracked at all even after dropping it once. 10/10 product.", verified: true },
    { name: "Harish Gupta", location: "Lucknow, Uttar Pradesh", rating: 5, date: "6 Jan 2025", text: "Kharidne ke baad se kitchen ki setting hi badal gayi! Finally ek proper glass container mili jisme atta aur chawal store kar sakta hoon without worrying about quality. The seal is very tight — no insects have gotten in at all.", verified: true },
    { name: "Sunita Malhotra", location: "Chandigarh, Punjab", rating: 4, date: "14 Feb 2025", text: "Very nice quality glass storage container. I store dry fruits in it and it keeps them perfectly fresh. The only feedback is I wish it came in a slightly larger size too. Please add a 2-litre option!", verified: true },
];

const measuringJugReviews: Review[] = [
    { name: "Rohit Banerjee", location: "Kolkata, West Bengal", rating: 5, date: "1 Mar 2025", text: "As someone who loves baking, this measuring jug is an absolute essential! The markings are clear and accurate. The glass is thick tempered glass—very reassuring. Has survived our microwave trips without any issue.", verified: true },
    { name: "Nalini Chakraborty", location: "Bhopal, Madhya Pradesh", rating: 5, date: "11 Jan 2025", text: "Ekdum perfect measuring jug! Glass ekdam heavy duty hai, microwave mein bhi use kar leti hoon. Jo markings hain woh sab clearly padh aati hain. Ghar mein sab log ab pastry banane me interest le rahe hain!", verified: true },
    { name: "Sanjay Kumar", location: "Patna, Bihar", rating: 4, date: "19 Feb 2025", text: "Good product, solid glass. The pour spout is precise. I use it for making lassi in bulk and it works perfectly. The handle is comfortable. Would recommend to anyone looking for a good quality glass measuring jug.", verified: true },
];

const bowlSetReviews: Review[] = [
    { name: "Pallavi Shinde", location: "Nagpur, Maharashtra", rating: 5, date: "27 Feb 2025", text: "These prep bowls are absolutely gorgeous! I use them for mise en place while cooking and also for serving chutneys and raita at the table. The glass is crystal clear and feels very premium. Already recommended to 5 friends!", verified: true },
    { name: "Ganesh Venkataraman", location: "Coimbatore, Tamil Nadu", rating: 5, date: "9 Jan 2025", text: "Superb quality! These stacking glass bowls are so functional. The 4 sizes are perfect — small for garnishes, large for salads. Cleaning is a breeze in the dishwasher. Kitchen looks like a professional chef's setup now!", verified: true },
    { name: "Ritu Agarwal", location: "Jaipur, Rajasthan", rating: 5, date: "3 Feb 2025", text: "Mujhe yeh set 2 mahine pahle gifted kiya gaya tha aur ab main khud doosron ko gift de rahi hoon! Quality dekhke aankhen khush ho jaati hai. Glass bilkul transparent aur sparkling clean dikhta hai. A true luxury product at a reasonable price.", verified: true },
];

export const products: Product[] = [
    {
        id: "precision-oil-dispenser",
        name: "Precision Pour Oil Dispenser",
        price: "₹1,299",
        priceNumber: 1299,
        description: "Experience perfect control with our engineered drip-free glass oil dispenser. Designed to keep your counters clean and your ingredients fresh, this dispenser features an ergonomic grip and an airtight silicone seal to preserve the quality and flavor of your premium oils.",
        images: ["/images/oil_dispenser.png", "/images/hero.png"],
        rating: 4.9,
        reviewsCount: 128,
        badge: "BESTSELLER",
        benefits: ["Drip-free spout", "Borosilicate glass", "Airtight silicone seal"],
        specifications: {
            capacity: "500ml",
            material: "High-grade Borosilicate Glass, Silicone, Stainless Steel",
            dimensions: "25cm height × 6.5cm diameter",
            care: "Dishwasher safe (glass body only). Hand wash the spout separately.",
        },
        category: "Dispensers",
        reviews: oilDispenserReviews,
    },
    {
        id: "minimalist-spice-jars-6",
        name: "Minimalist Spice Jar Set (6)",
        price: "₹1,899",
        priceNumber: 1899,
        description: "Transform your pantry with our minimalist glass spice jars. Crafted from high-clarity borosilicate glass with airtight bamboo lids, these stackable jars keep your favorite spices fresh while elevating your kitchen aesthetic.",
        images: ["/images/spice_jars.png", "/images/lifestyle.png"],
        rating: 4.8,
        reviewsCount: 95,
        benefits: ["Airtight bamboo lids", "Stackable design", "Includes waterproof labels"],
        specifications: {
            capacity: "200ml each",
            material: "Borosilicate Glass, Natural Bamboo, Silicone Ring",
            dimensions: "8cm height × 6.5cm diameter",
            care: "Glass is dishwasher safe. Wipe bamboo lids with a damp cloth only.",
        },
        category: "Jars",
        reviews: spiceJarReviews,
    },
    {
        id: "tall-storage-canister",
        name: "Tall Glass Storage Canister",
        price: "₹999",
        priceNumber: 999,
        description: "The perfect storage solution for pasta, grains, and cereals. This tall, elegant glass canister features a wide mouth for easy access and an airtight seal to ensure maximum freshness for your dry goods.",
        images: ["/images/containers.png", "/images/lifestyle.png"],
        rating: 4.9,
        reviewsCount: 210,
        badge: "SALE",
        benefits: ["Perfect for pasta/grains", "Wide mouth access", "Airtight freshness seal"],
        specifications: {
            capacity: "1200ml",
            material: "Borosilicate Glass, Bamboo, Silicone",
            dimensions: "28cm height × 9cm diameter",
            care: "Dishwasher safe.",
        },
        category: "Storage",
        reviews: storageReviews,
    },
    {
        id: "classic-measuring-jug",
        name: "Classic Glass Measuring Jug",
        price: "₹799",
        priceNumber: 799,
        description: "A staple for any baker. This heavy-duty glass measuring jug features clear, easy-to-read markings for liquids and solids, a comfortable handle, and a precision pour spout.",
        images: ["/images/oil_dispenser.png", "/images/hero.png"],
        rating: 4.7,
        reviewsCount: 64,
        benefits: ["Precise ml/oz markings", "Microwave safe", "Comfort grip handle"],
        specifications: {
            capacity: "1000ml (1 Litre)",
            material: "Tempered Glass",
            dimensions: "15cm height",
            care: "Dishwasher and Microwave safe.",
        },
        category: "Accessories",
        reviews: measuringJugReviews,
    },
    {
        id: "stackable-bowl-set",
        name: "Stackable Prep Bowl Set (4)",
        price: "₹1,499",
        priceNumber: 1499,
        description: "Mise en place made beautiful. These four nesting glass prep bowls are perfect for organizing ingredients while cooking or serving small sides and dips at the table.",
        images: ["/images/containers.png", "/images/spice_jars.png"],
        rating: 4.9,
        reviewsCount: 156,
        badge: "NEW",
        benefits: ["Nesting design saves space", "Multi-purpose use", "Ultra-clear glass"],
        specifications: {
            capacity: "150ml / 300ml / 500ml / 800ml",
            material: "Borosilicate Glass",
            dimensions: "Various sizes",
            care: "Dishwasher safe.",
        },
        category: "Storage",
        reviews: bowlSetReviews,
    },
];

export function getProductById(id: string): Product | undefined {
    return products.find(p => p.id === id);
}

export function getAllProducts(): Product[] {
    return products;
}

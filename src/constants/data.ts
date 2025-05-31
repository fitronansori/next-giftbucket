export const categoriesData = [
  { value: "all", label: "Semua Kategori" },
  { value: "wedding", label: "Wedding" },
  { value: "birthday", label: "Birthday" },
  { value: "anniversary", label: "Anniversary" },
  { value: "graduation", label: "Graduation" },
  { value: "valentine", label: "Valentine" },
  { value: "sympathy", label: "Sympathy" },
];

import {
  CrownIcon,
  Flower2Icon,
  GiftIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  HeartIcon,
  LucideIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";

export type TCategory = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  price: string;
  features: string[];
};

export const categories: TCategory[] = [
  {
    id: 1,
    title: "Wedding Bouquet",
    description:
      "Buket pernikahan elegan dengan rangkaian bunga pilihan terbaik untuk hari spesial Anda.",
    image: "/assets/images/cat1.png",
    icon: CrownIcon,
    price: "350.000",
    features: ["Bunga segar premium", "Desain eksklusif", "Konsultasi gratis"],
  },
  {
    id: 2,
    title: "Birthday Bouquet",
    description:
      "Buket ulang tahun yang ceria dan colorful untuk merayakan momen bahagia bersama orang tersayang.",
    image: "/assets/images/cat2.png",
    icon: GiftIcon,
    price: "150.000",
    features: ["Warna-warni cerah", "Kemasan menarik", "Kartu ucapan gratis"],
  },
  {
    id: 3,
    title: "Anniversary Bouquet",
    description:
      "Buket anniversary romantis dengan sentuhan klasik untuk mengungkapkan perasaan cinta Anda.",
    image: "/assets/images/cat3.png",
    icon: HeartIcon,
    price: "200.000",
    features: ["Mawar merah premium", "Kemasan elegan", "Pesan personal"],
  },
  {
    id: 4,
    title: "Graduation Bouquet",
    description:
      "Buket wisuda yang membanggakan untuk merayakan pencapaian akademik dengan bunga-bunga.",
    image: "/assets/images/cat4.png",
    icon: GraduationCapIcon,
    price: "180.000",
    features: ["Bunga kuning & putih", "Ribbon wisuda", "Kartu selamat"],
  },
  {
    id: 5,
    title: "Valentine Bouquet",
    description:
      "Buket valentine spesial dengan mawar merah dan pink untuk mengungkapkan cinta di hari kasih sayang.",
    image: "/assets/images/cat5.png",
    icon: HeartHandshakeIcon,
    price: "250.000",
    features: ["Mawar merah & pink", "Cokelat premium", "Kartu romantis"],
  },
  {
    id: 6,
    title: "Sympathy Bouquet",
    description:
      "Buket belasungkawa dengan rangkaian bunga yang elegan untuk menyampaikan simpati dan duka cita.",
    image: "/assets/images/cat6.png",
    icon: Flower2Icon,
    price: "200.000",
    features: ["Bunga putih elegant", "Kemasan sederhana", "Kartu simpati"],
  },
];

export type TProduct = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  badge: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
  inStock: boolean;
  discount: number | null;
};

export const productsData = [
  {
    id: 1,
    name: "Elegant Rose Wedding",
    category: "Wedding",
    price: 450000,
    originalPrice: 500000,
    image: "/assets/images/product1.png",
    rating: 4.9,
    reviews: 127,
    description:
      "Buket pernikahan mewah dengan 24 mawar putih premium dan baby breath",
    badge: "Best Seller",
    badgeVariant: "default" as const,
    inStock: true,
    discount: 10,
  },
  {
    id: 2,
    name: "Rainbow Birthday Joy",
    category: "Birthday",
    price: 175000,
    originalPrice: null,
    image: "/assets/images/product2.png",
    rating: 4.7,
    reviews: 89,
    description:
      "Buket ulang tahun colorful dengan campuran gerbera dan tulip warna-warni",
    badge: "Popular",
    badgeVariant: "secondary" as const,
    inStock: true,
    discount: null,
  },
  {
    id: 3,
    name: "Romantic Red Passion",
    category: "Anniversary",
    price: 320000,
    originalPrice: 380000,
    image: "/assets/images/product3.png",
    rating: 4.8,
    reviews: 156,
    description:
      "Buket anniversary dengan 18 mawar merah premium dan kemasan mewah",
    badge: "Sale",
    badgeVariant: "destructive" as const,
    inStock: true,
    discount: 16,
  },
  {
    id: 4,
    name: "Golden Achievement",
    category: "Graduation",
    price: 220000,
    originalPrice: null,
    image: "/assets/images/product3.png",
    rating: 4.6,
    reviews: 73,
    description:
      "Buket wisuda dengan bunga matahari dan mawar kuning plus ribbon wisuda",
    badge: "New",
    badgeVariant: "secondary" as const,
    inStock: true,
    discount: null,
  },
  {
    id: 5,
    name: "Valentine's Dream",
    category: "Valentine",
    price: 285000,
    originalPrice: 320000,
    image: "/assets/images/product3.png",
    rating: 4.9,
    reviews: 203,
    description:
      "Buket valentine eksklusif dengan mawar merah, pink dan cokelat premium",
    badge: "Limited",
    badgeVariant: "destructive" as const,
    inStock: false,
    discount: 11,
  },
  {
    id: 6,
    name: "Peaceful White Lily",
    category: "Sympathy",
    price: 250000,
    originalPrice: null,
    image: "/assets/images/product3.png",
    rating: 4.5,
    reviews: 45,
    description:
      "Buket belasungkawa dengan lily putih dan chrysanthemum dalam kemasan elegan",
    badge: "Respectful",
    badgeVariant: "secondary" as const,
    inStock: true,
    discount: null,
  },
  {
    id: 7,
    name: "Pink Paradise Delight",
    category: "Birthday",
    price: 195000,
    originalPrice: 230000,
    image: "/assets/images/product3.png",
    rating: 4.7,
    reviews: 112,
    description:
      "Buket pink cantik dengan mawar pink, peony dan eucalyptus segar",
    badge: "Trending",
    badgeVariant: "default" as const,
    inStock: true,
    discount: 15,
  },
  {
    id: 8,
    name: "Royal Purple Elegance",
    category: "Anniversary",
    price: 380000,
    originalPrice: null,
    image: "/assets/images/product3.png",
    rating: 4.8,
    reviews: 67,
    description:
      "Buket mewah dengan mawar ungu, lisianthus dan kemasan premium gold",
    badge: "Premium",
    badgeVariant: "default" as const,
    inStock: true,
    discount: null,
  },
  {
    id: 9,
    name: "Sunshine Graduation",
    category: "Graduation",
    price: 210000,
    originalPrice: 250000,
    image: "/assets/images/product3.png",
    rating: 4.6,
    reviews: 58,
    description: "Buket wisuda ceria dengan bunga matahari dan statice ungu",
    badge: "Favorite",
    badgeVariant: "secondary" as const,
    inStock: true,
    discount: 16,
  },
  {
    id: 10,
    name: "Sweetheart Pink Roses",
    category: "Valentine",
    price: 260000,
    originalPrice: 290000,
    image: "/assets/images/product3.png",
    rating: 4.8,
    reviews: 134,
    description:
      "Buket valentine dengan mawar pink dan baby breath, cocok untuk pasangan",
    badge: "Sweet",
    badgeVariant: "default" as const,
    inStock: true,
    discount: 10,
  },
  {
    id: 11,
    name: "Classic White Sympathy",
    category: "Sympathy",
    price: 230000,
    originalPrice: 260000,
    image: "/assets/images/product3.png",
    rating: 4.5,
    reviews: 39,
    description:
      "Buket belasungkawa klasik dengan lily putih dan daun hijau segar",
    badge: "Classic",
    badgeVariant: "secondary" as const,
    inStock: true,
    discount: 12,
  },
  {
    id: 12,
    name: "Golden Anniversary",
    category: "Anniversary",
    price: 400000,
    originalPrice: 450000,
    image: "/assets/images/product3.png",
    rating: 4.9,
    reviews: 98,
    description: "Buket anniversary dengan mawar emas dan kemasan premium",
    badge: "Exclusive",
    badgeVariant: "destructive" as const,
    inStock: false,
    discount: 11,
  },
  {
    id: 13,
    name: "Birthday Sunburst",
    category: "Birthday",
    price: 185000,
    originalPrice: 210000,
    image: "/assets/images/product3.png",
    rating: 4.6,
    reviews: 77,
    description: "Buket ulang tahun dengan bunga matahari dan gerbera kuning",
    badge: "Bright",
    badgeVariant: "default" as const,
    inStock: true,
    discount: 12,
  },
  {
    id: 14,
    name: "Royal Wedding Charm",
    category: "Wedding",
    price: 470000,
    originalPrice: 520000,
    image: "/assets/images/product3.png",
    rating: 4.9,
    reviews: 143,
    description:
      "Buket pernikahan elegan dengan mawar putih, peony, dan eucalyptus",
    badge: "Royal",
    badgeVariant: "secondary" as const,
    inStock: true,
    discount: 10,
  },
  {
    id: 15,
    name: "Pure White Sympathy",
    category: "Sympathy",
    price: 240000,
    originalPrice: 270000,
    image: "/assets/images/product3.png",
    rating: 4.7,
    reviews: 52,
    description:
      "Buket belasungkawa dengan lily putih, mawar putih, dan kemasan sederhana",
    badge: "Pure",
    badgeVariant: "secondary" as const,
    inStock: true,
    discount: 11,
  },
];

export type TPricingPlan = {
  id: number;
  name: string;
  price: number;
  popular: boolean;
  description: string;
  features: string[];
  badge?: string;
  badge_variant: "default" | "secondary" | "destructive" | "outline";
};

export const pricing_plans: TPricingPlan[] = [
  {
    id: 1,
    name: "Paket Basic",
    price: 150000,
    popular: false,
    description: "Perfect untuk hadiah sederhana dan momen spesial sehari-hari",
    features: [
      "5-7 tangkai bunga segar",
      "Kemasan kertas premium",
      "Kartu ucapan gratis",
      "Pengiriman area Jabodetabek",
      "Garansi kesegaran 3 hari",
    ],
    badge_variant: "outline",
  },
  {
    id: 2,
    name: "Paket Premium",
    price: 285000,
    popular: true,
    description: "Pilihan terbaik untuk acara special dan momen berkesan",
    features: [
      "10-15 tangkai bunga premium",
      "Kemasan kotak mewah",
      "Kartu ucapan custom",
      "Cokelat premium included",
      "Pengiriman seluruh Indonesia",
      "Garansi kesegaran 5 hari",
      "Konsultasi desain gratis",
    ],
    badge: "Most Popular",
    badge_variant: "default",
  },
  {
    id: 3,
    name: "Paket Luxury",
    price: 450000,
    popular: false,
    description: "Eksklusif untuk momen terpenting dalam hidup Anda",
    features: [
      "20-25 tangkai bunga import",
      "Kemasan luxury box + ribbon",
      "Kartu ucapan handwritten",
      "Premium chocolate & wine",
      "Express delivery 24/7",
      "Garansi kesegaran 7 hari",
      "Personal florist consultation",
      "Photo documentation",
    ],
    badge_variant: "secondary",
  },
];

export type TContactInfo = {
  icon: LucideIcon;
  title: string;
  content: string;
  sub_content: string;
};

export const contact_info: TContactInfo[] = [
  {
    icon: MapPinIcon,
    title: "Alamat Toko",
    content: "Jl. Merdeka No. 123, Jakarta Pusat",
    sub_content: "Jakarta 10110, Indonesia",
  },
  {
    icon: PhoneIcon,
    title: "Nomor Telepon",
    content: "+62 812-3456-7890",
    sub_content: "Senin - Sabtu: 08:00 - 20:00",
  },
  {
    icon: MailIcon,
    title: "Email",
    content: "info@giftbucket.com",
    sub_content: "Respons dalam 24 jam",
  },
];

export const business_hours = [
  {
    day: "Senin - Jumat",
    hours: "08:00 - 20:00",
    is_closed: false,
  },
  {
    day: "Sabtu",
    hours: "09:00 - 18:00",
    is_closed: false,
  },
  {
    day: "Minggu",
    hours: "Tutup",
    is_closed: true,
  },
];

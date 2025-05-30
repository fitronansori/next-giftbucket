import {
  CrownIcon,
  Flower2Icon,
  GiftIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  HeartIcon,
  LucideIcon,
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
    image: "/assets/images/p1.png",
    icon: CrownIcon,
    price: "350.000",
    features: ["Bunga segar premium", "Desain eksklusif", "Konsultasi gratis"],
  },
  {
    id: 2,
    title: "Birthday Bouquet",
    description:
      "Buket ulang tahun yang ceria dan colorful untuk merayakan momen bahagia bersama orang tersayang.",
    image: "/assets/images/p2.png",
    icon: GiftIcon,
    price: "150.000",
    features: ["Warna-warni cerah", "Kemasan menarik", "Kartu ucapan gratis"],
  },
  {
    id: 3,
    title: "Anniversary Bouquet",
    description:
      "Buket anniversary romantis dengan sentuhan klasik untuk mengungkapkan perasaan cinta Anda.",
    image: "/assets/images/p3.png",
    icon: HeartIcon,
    price: "200.000",
    features: ["Mawar merah premium", "Kemasan elegan", "Pesan personal"],
  },
  {
    id: 4,
    title: "Graduation Bouquet",
    description:
      "Buket wisuda yang membanggakan untuk merayakan pencapaian akademik dengan bunga-bunga.",
    image: "/assets/images/p4.png",
    icon: GraduationCapIcon,
    price: "180.000",
    features: ["Bunga kuning & putih", "Ribbon wisuda", "Kartu selamat"],
  },
  {
    id: 5,
    title: "Valentine Bouquet",
    description:
      "Buket valentine spesial dengan mawar merah dan pink untuk mengungkapkan cinta di hari kasih sayang.",
    image: "/assets/images/p5.png",
    icon: HeartHandshakeIcon,
    price: "250.000",
    features: ["Mawar merah & pink", "Cokelat premium", "Kartu romantis"],
  },
  {
    id: 6,
    title: "Sympathy Bouquet",
    description:
      "Buket belasungkawa dengan rangkaian bunga yang elegan untuk menyampaikan simpati dan duka cita.",
    image: "/assets/images/p6.png",
    icon: Flower2Icon,
    price: "200.000",
    features: ["Bunga putih elegant", "Kemasan sederhana", "Kartu simpati"],
  },
];

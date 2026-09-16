export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  coverImage: string;
  featured: boolean;
  gallery: string[];
  metadata: {
    location: string;
    year: string;
    client: string;
    projectType: string;
    role: string;
    status: string;
  };
  about: string;
  technical: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "proekt-01",
    title: "ПРОЄКТ 01",
    location: "[Локація проєкту]",
    year: "[Рік]",
    category: "Мостовий перехід",
    description: "Поле для тексту",
    coverImage:
      "https://images.pexels.com/photos/28855196/pexels-photo-28855196.jpeg?auto=compress&cs=tinysrgb&w=1920",
    featured: true,
    gallery: [
      "https://images.pexels.com/photos/28855196/pexels-photo-28855196.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/20502692/pexels-photo-20502692.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/30617051/pexels-photo-30617051.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/29419658/pexels-photo-29419658.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/33692776/pexels-photo-33692776.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/374630/pexels-photo-374630.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/20757812/pexels-photo-20757812.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/10319771/pexels-photo-10319771.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/35064405/pexels-photo-35064405.jpeg?auto=compress&cs=tinysrgb&w=1920",
    ],
    metadata: {
      location: "[Локація]",
      year: "[Рік]",
      client: "[Замовник]",
      projectType: "[Тип проєкту]",
      role: "[Роль компанії]",
      status: "[Статус]",
    },
    about: "Поле для тексту",
    technical: [
      { label: "Довжина", value: "[значення]" },
      { label: "Ширина", value: "[значення]" },
      { label: "Висота", value: "[значення]" },
      { label: "Конструктивна схема", value: "[значення]" },
      { label: "Матеріали", value: "[значення]" },
      { label: "Навантаження", value: "[значення]" },
    ],
  },
  {
    slug: "proekt-02",
    title: "ПРОЄКТ 02",
    location: "[Локація проєкту]",
    year: "[Рік]",
    category: "Реконструкція",
    description: "Поле для тексту",
    coverImage:
      "https://images.pexels.com/photos/36924968/pexels-photo-36924968.jpeg?auto=compress&cs=tinysrgb&w=1920",
    featured: true,
    gallery: [
      "https://images.pexels.com/photos/36924968/pexels-photo-36924968.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/4751795/pexels-photo-4751795.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/29865285/pexels-photo-29865285.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/37370843/pexels-photo-37370843.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/10320217/pexels-photo-10320217.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/16586346/pexels-photo-16586346.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/914115/pexels-photo-914115.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/18363592/pexels-photo-18363592.jpeg?auto=compress&cs=tinysrgb&w=1920",
    ],
    metadata: {
      location: "[Локація]",
      year: "[Рік]",
      client: "[Замовник]",
      projectType: "[Тип проєкту]",
      role: "[Роль компанії]",
      status: "[Статус]",
    },
    about: "Поле для тексту",
    technical: [
      { label: "Довжина", value: "[значення]" },
      { label: "Ширина", value: "[значення]" },
      { label: "Висота", value: "[значення]" },
      { label: "Конструктивна схема", value: "[значення]" },
      { label: "Матеріали", value: "[значення]" },
      { label: "Навантаження", value: "[значення]" },
    ],
  },
  {
    slug: "proekt-03",
    title: "ПРОЄКТ 03",
    location: "[Локація проєкту]",
    year: "[Рік]",
    category: "Естакада",
    description: "Поле для тексту",
    coverImage:
      "https://images.pexels.com/photos/38202276/pexels-photo-38202276.jpeg?auto=compress&cs=tinysrgb&w=1920",
    featured: false,
    gallery: [
      "https://images.pexels.com/photos/38202276/pexels-photo-38202276.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/8013087/pexels-photo-8013087.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/5649558/pexels-photo-5649558.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/38487655/pexels-photo-38487655.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/12693133/pexels-photo-12693133.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/9267439/pexels-photo-9267439.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/19814037/pexels-photo-19814037.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/8355942/pexels-photo-8355942.jpeg?auto=compress&cs=tinysrgb&w=1920",
    ],
    metadata: {
      location: "[Локація]",
      year: "[Рік]",
      client: "[Замовник]",
      projectType: "[Тип проєкту]",
      role: "[Роль компанії]",
      status: "[Статус]",
    },
    about: "Поле для тексту",
    technical: [
      { label: "Довжина", value: "[значення]" },
      { label: "Ширина", value: "[значення]" },
      { label: "Висота", value: "[значення]" },
      { label: "Конструктивна схема", value: "[значення]" },
      { label: "Матеріали", value: "[значення]" },
      { label: "Навантаження", value: "[значення]" },
    ],
  },
  {
    slug: "proekt-04",
    title: "ПРОЄКТ 04",
    location: "[Локація проєкту]",
    year: "[Рік]",
    category: "Пішохідний міст",
    description: "Поле для тексту",
    coverImage:
      "https://images.pexels.com/photos/19626459/pexels-photo-19626459.jpeg?auto=compress&cs=tinysrgb&w=1920",
    featured: false,
    gallery: [
      "https://images.pexels.com/photos/19626459/pexels-photo-19626459.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/39297830/pexels-photo-39297830.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/37796540/pexels-photo-37796540.png?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/31264085/pexels-photo-31264085.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/33702503/pexels-photo-33702503.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/36610453/pexels-photo-36610453.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/5549472/pexels-photo-5549472.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/8801423/pexels-photo-8801423.jpeg?auto=compress&cs=tinysrgb&w=1920",
    ],
    metadata: {
      location: "[Локація]",
      year: "[Рік]",
      client: "[Замовник]",
      projectType: "[Тип проєкту]",
      role: "[Роль компанії]",
      status: "[Статус]",
    },
    about: "Поле для тексту",
    technical: [
      { label: "Довжина", value: "[значення]" },
      { label: "Ширина", value: "[значення]" },
      { label: "Висота", value: "[значення]" },
      { label: "Конструктивна схема", value: "[значення]" },
      { label: "Матеріали", value: "[значення]" },
      { label: "Навантаження", value: "[значення]" },
    ],
  },
  {
    slug: "proekt-05",
    title: "ПРОЄКТ 05",
    location: "[Локація проєкту]",
    year: "[Рік]",
    category: "Інфраструктура",
    description: "Поле для тексту",
    coverImage:
      "https://images.pexels.com/photos/6594786/pexels-photo-6594786.jpeg?auto=compress&cs=tinysrgb&w=1920",
    featured: false,
    gallery: [
      "https://images.pexels.com/photos/6594786/pexels-photo-6594786.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/5057602/pexels-photo-5057602.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/37094519/pexels-photo-37094519.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/18505651/pexels-photo-18505651.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/5319296/pexels-photo-5319296.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/27987068/pexels-photo-27987068.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/36620570/pexels-photo-36620570.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/30668319/pexels-photo-30668319.jpeg?auto=compress&cs=tinysrgb&w=1920",
    ],
    metadata: {
      location: "[Локація]",
      year: "[Рік]",
      client: "[Замовник]",
      projectType: "[Тип проєкту]",
      role: "[Роль компанії]",
      status: "[Статус]",
    },
    about: "Поле для тексту",
    technical: [
      { label: "Довжина", value: "[значення]" },
      { label: "Ширина", value: "[значення]" },
      { label: "Висота", value: "[значення]" },
      { label: "Конструктивна схема", value: "[значення]" },
      { label: "Матеріали", value: "[значення]" },
      { label: "Навантаження", value: "[значення]" },
    ],
  },
  {
    slug: "proekt-06",
    title: "ПРОЄКТ 06",
    location: "[Локація проєкту]",
    year: "[Рік]",
    category: "Технічне обстеження",
    description: "Поле для тексту",
    coverImage:
      "https://images.pexels.com/photos/31728577/pexels-photo-31728577.jpeg?auto=compress&cs=tinysrgb&w=1920",
    featured: false,
    gallery: [
      "https://images.pexels.com/photos/31728577/pexels-photo-31728577.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/11505358/pexels-photo-11505358.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/11310492/pexels-photo-11310492.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/13511707/pexels-photo-13511707.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/35014445/pexels-photo-35014445.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/38400644/pexels-photo-38400644.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/11505438/pexels-photo-11505438.jpeg?auto=compress&cs=tinysrgb&w=1920",
      "https://images.pexels.com/photos/9304988/pexels-photo-9304988.jpeg?auto=compress&cs=tinysrgb&w=1920",
    ],
    metadata: {
      location: "[Локація]",
      year: "[Рік]",
      client: "[Замовник]",
      projectType: "[Тип проєкту]",
      role: "[Роль компанії]",
      status: "[Статус]",
    },
    about: "Поле для тексту",
    technical: [
      { label: "Довжина", value: "[значення]" },
      { label: "Ширина", value: "[значення]" },
      { label: "Висота", value: "[значення]" },
      { label: "Конструктивна схема", value: "[значення]" },
      { label: "Матеріали", value: "[значення]" },
      { label: "Навантаження", value: "[значення]" },
    ],
  },
];

export const heroImage =
  "https://images.pexels.com/photos/28855196/pexels-photo-28855196.jpeg?auto=compress&cs=tinysrgb&w=1920";
export const aboutImage =
  "https://images.pexels.com/photos/4740155/pexels-photo-4740155.jpeg?auto=compress&cs=tinysrgb&w=1920";
export const visualBreakImage =
  "https://images.pexels.com/photos/38487655/pexels-photo-38487655.jpeg?auto=compress&cs=tinysrgb&w=1920";

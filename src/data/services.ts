export interface Service {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "ПРОЄКТУВАННЯ",
    description: "Поле для тексту",
    icon: "compass",
  },
  {
    number: "02",
    title: "АРХІТЕКТУРНІ РІШЕННЯ",
    description: "Поле для тексту",
    icon: "ruler",
  },
  {
    number: "03",
    title: "ІНЖЕНЕРНІ РОЗРАХУНКИ",
    description: "Поле для тексту",
    icon: "calculator",
  },
  {
    number: "04",
    title: "РЕКОНСТРУКЦІЯ",
    description: "Поле для тексту",
    icon: "wrench",
  },
  {
    number: "05",
    title: "ТЕХНІЧНЕ ОБСТЕЖЕННЯ",
    description: "Поле для тексту",
    icon: "search",
  },
  {
    number: "06",
    title: "BIM / ЦИФРОВЕ ПРОЄКТУВАННЯ",
    description: "Поле для тексту",
    icon: "box",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Аналіз",
    description: "Поле для тексту",
  },
  {
    number: "02",
    title: "Концепція",
    description: "Поле для тексту",
  },
  {
    number: "03",
    title: "Проєктування",
    description: "Поле для тексту",
  },
  {
    number: "04",
    title: "Реалізація",
    description: "Поле для тексту",
  },
  {
    number: "05",
    title: "Контроль",
    description: "Поле для тексту",
  },
  {
    number: "06",
    title: "Завершення",
    description: "Поле для тексту",
  },
];

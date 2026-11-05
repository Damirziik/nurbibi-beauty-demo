export const studio = {
  instagram: "https://www.instagram.com/nurbibi.beauty.studio/",
  phone: "+7 708 488 07 84",
  address: "Каскелен, ул. Наурызбай батыра, 25",
  hours: "9:00–19:00",
};
export const services = [
  {
    name: "Макияж",
    en: "Makeup",
    text: "Макияж для особенного дня и образа, который хочется сохранить.",
  },
  {
    name: "Волосы",
    en: "Hair",
    text: "Укладки, причёски и окрашивание — от лёгкого акцента до нового образа.",
  },
  {
    name: "Ногти",
    en: "Nails",
    text: "Маникюр и педикюр. Детали процедуры и стоимость уточним при записи.",
  },
  {
    name: "Брови",
    en: "Brows",
    text: "Окрашивание, ламинирование и перманентный макияж бровей.",
  },
  {
    name: "Ресницы",
    en: "Lashes",
    text: "Наращивание ресниц для мягкого акцента или выразительного взгляда.",
  },
];
export const works = [
  {
    image: "evening",
    title: "Выразительный акцент",
    category: "Макияж",
    alt: "Вечерний макияж с выразительными стрелками и собранными волосами",
    post: "DdyALFBoGrP",
  },
  {
    image: "soft",
    title: "Мягкие оттенки",
    category: "Макияж и причёска",
    alt: "Макияж в мягких розовых оттенках и собранная причёска",
    post: "DetITrqIDKO",
  },
  {
    image: "bridal",
    title: "Особенный день",
    category: "Макияж и причёска",
    alt: "Праздничный образ с макияжем и причёской в красном национальном наряде",
    post: "DeouHbKISXE",
  },
  {
    image: "lashes",
    title: "Внимание к деталям",
    category: "Ресницы",
    alt: "Результат наращивания ресниц крупным планом",
    post: "DdorAdgI88l",
  },
];
export const whatsapp = (service = "") =>
  `https://wa.me/77084880784?text=${encodeURIComponent(`Здравствуйте! Хочу записаться${service ? ` на услугу «${service}»` : " в Nurbibi Beauty Studio"}. Подскажите, пожалуйста, стоимость и свободное время.`)}`;

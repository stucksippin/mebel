import { Product } from "@/types/catalog";

const products: Product[] = [
  // Кухни — угловые
  { id: "k-u-1", category: "kuhni", subcategory: "uglovye", name: "Угловая кухня «Классика»", material: "ЛДСП Egger", term: "18 дней", size: "от 2×2 м", priceFrom: 85000, badge: "Хит" },
  { id: "k-u-2", category: "kuhni", subcategory: "uglovye", name: "Угловая кухня «Лофт»", material: "МДФ + металл", term: "21 день", size: "от 2.5×2 м", priceFrom: 120000 },
  { id: "k-u-3", category: "kuhni", subcategory: "uglovye", name: "Угловая кухня «Модерн»", material: "МДФ глянец", term: "24 дня", size: "от 2×2.5 м", priceFrom: 145000 },
  { id: "k-u-4", category: "kuhni", subcategory: "uglovye", name: "Угловая кухня «Скандинавия»", material: "Массив дуб", term: "30 дней", size: "от 2×2 м", priceFrom: 210000, badge: "Премиум" },

  // Кухни — прямые
  { id: "k-p-1", category: "kuhni", subcategory: "pryamye", name: "Прямая кухня «Минимал»", material: "ЛДСП Egger", term: "14 дней", size: "от 2 пог. м", priceFrom: 55000 },
  { id: "k-p-2", category: "kuhni", subcategory: "pryamye", name: "Прямая кухня «Студио»", material: "МДФ матовый", term: "18 дней", size: "от 2.4 пог. м", priceFrom: 80000, badge: "Хит" },
  { id: "k-p-3", category: "kuhni", subcategory: "pryamye", name: "Прямая кухня «Итальяно»", material: "МДФ эмаль", term: "21 день", size: "от 3 пог. м", priceFrom: 130000 },

  // Кухни — с островом
  { id: "k-o-1", category: "kuhni", subcategory: "ostrovnye", name: "Кухня с островом «Openhome»", material: "МДФ + камень", term: "28 дней", size: "от 12 м²", priceFrom: 280000, badge: "Новинка" },
  { id: "k-o-2", category: "kuhni", subcategory: "ostrovnye", name: "Кухня с островом «Loft Island»", material: "МДФ + металл", term: "30 дней", size: "от 15 м²", priceFrom: 350000 },

  // Кухни — с барной стойкой
  { id: "k-b-1", category: "kuhni", subcategory: "s-barom", name: "Кухня с баром «Urban»", material: "ЛДСП + МДФ", term: "18 дней", size: "от 8 м²", priceFrom: 110000 },
  { id: "k-b-2", category: "kuhni", subcategory: "s-barom", name: "Кухня с баром «Milano»", material: "МДФ эмаль", term: "22 дня", size: "от 10 м²", priceFrom: 165000, badge: "Хит" },

  // Шкафы — купе
  { id: "sh-k-1", category: "shkafy", subcategory: "kupe", name: "Шкаф-купе «Базовый»", material: "ЛДСП Egger", term: "14 дней", size: "от 1.5 пог. м", priceFrom: 28000 },
  { id: "sh-k-2", category: "shkafy", subcategory: "kupe", name: "Шкаф-купе «Зеркало»", material: "ЛДСП + зеркало", term: "16 дней", size: "от 2 пог. м", priceFrom: 42000, badge: "Хит" },
  { id: "sh-k-3", category: "shkafy", subcategory: "kupe", name: "Шкаф-купе «Профи»", material: "МДФ + стекло", term: "20 дней", size: "от 2.5 пог. м", priceFrom: 68000 },
  { id: "sh-k-4", category: "shkafy", subcategory: "kupe", name: "Шкаф-купе «Угловой»", material: "ЛДСП Egger", term: "18 дней", size: "угловой", priceFrom: 55000 },

  // Шкафы — встроенные
  { id: "sh-v-1", category: "shkafy", subcategory: "vstroennye", name: "Встроенный шкаф в нишу", material: "ЛДСП Egger", term: "14 дней", size: "по размерам ниши", priceFrom: 35000 },
  { id: "sh-v-2", category: "shkafy", subcategory: "vstroennye", name: "Встроенный шкаф под скос", material: "ЛДСП + МДФ", term: "18 дней", size: "индивидуально", priceFrom: 48000, badge: "Сложный монтаж" },

  // Шкафы — гардеробные
  { id: "sh-g-1", category: "shkafy", subcategory: "garderobnyj", name: "Гардеробная «Walk-in»", material: "ЛДСП Egger", term: "21 день", size: "от 4 м²", priceFrom: 95000 },
  { id: "sh-g-2", category: "shkafy", subcategory: "garderobnyj", name: "Гардеробная «Люкс»", material: "МДФ + стекло", term: "28 дней", size: "от 6 м²", priceFrom: 180000, badge: "Премиум" },

  // Шкафы — угловые
  { id: "sh-u-1", category: "shkafy", subcategory: "uglovoj", name: "Угловой шкаф «Компакт»", material: "ЛДСП Egger", term: "14 дней", size: "от 1×1 м", priceFrom: 32000 },

  // Гостиная — стенки
  { id: "g-s-1", category: "gostinaya", subcategory: "stenki", name: "Стенка «Классик»", material: "ЛДСП Egger", term: "18 дней", size: "от 3 пог. м", priceFrom: 65000 },
  { id: "g-s-2", category: "gostinaya", subcategory: "stenki", name: "Горка «Модерн»", material: "МДФ + стекло", term: "21 день", size: "от 2.5 пог. м", priceFrom: 90000, badge: "Хит" },

  // Гостиная — ТВ-зоны
  { id: "g-tv-1", category: "gostinaya", subcategory: "tv-zony", name: "ТВ-зона «Floating»", material: "МДФ матовый", term: "14 дней", size: "от 2 пог. м", priceFrom: 38000 },
  { id: "g-tv-2", category: "gostinaya", subcategory: "tv-zony", name: "ТВ-зона с подсветкой", material: "МДФ + LED", term: "16 дней", size: "от 2.5 пог. м", priceFrom: 52000, badge: "Новинка" },

  // Гостиная — стеллажи
  { id: "g-st-1", category: "gostinaya", subcategory: "stellazhi", name: "Стеллаж «Библиотека»", material: "ЛДСП Egger", term: "12 дней", size: "от 1 пог. м", priceFrom: 22000 },

  // Спальня — кровати
  { id: "sp-k-1", category: "spalnya", subcategory: "krovati", name: "Кровать «Soft»", material: "МДФ + ткань", term: "18 дней", size: "160×200", priceFrom: 48000 },
  { id: "sp-k-2", category: "spalnya", subcategory: "krovati", name: "Кровать «Box»", material: "ЛДСП + ПУ кожа", term: "16 дней", size: "180×200", priceFrom: 65000, badge: "Хит" },

  // Спальня — изголовья
  { id: "sp-i-1", category: "spalnya", subcategory: "izgolovya", name: "Изголовье мягкое «Aria»", material: "Ткань велюр", term: "10 дней", size: "160 / 180 см", priceFrom: 18000 },

  // Спальня — тумбы
  { id: "sp-t-1", category: "spalnya", subcategory: "tumbochki", name: "Тумба прикроватная", material: "ЛДСП Egger", term: "10 дней", size: "50×40×50 см", priceFrom: 8500 },

  // Детская — кровати
  { id: "d-k-1", category: "detskaya", subcategory: "krovati", name: "Кровать детская «Лесная»", material: "МДФ краска", term: "16 дней", size: "80×160", priceFrom: 32000 },
  { id: "d-k-2", category: "detskaya", subcategory: "krovati", name: "Двухъярусная кровать «Дуэт»", material: "МДФ + массив", term: "20 дней", size: "90×200 (2 места)", priceFrom: 68000, badge: "Хит" },

  // Детская — школьники
  { id: "d-sh-1", category: "detskaya", subcategory: "shkoly", name: "Рабочее место «Студент»", material: "ЛДСП Egger", term: "14 дней", size: "120×60 см", priceFrom: 24000 },
  { id: "d-sh-2", category: "detskaya", subcategory: "shkoly", name: "Комплект «Школьник»", material: "МДФ краска", term: "18 дней", size: "стол + стеллаж + шкаф", priceFrom: 58000, badge: "Комплект" },

  // Прихожая — шкафы
  { id: "pr-sh-1", category: "prihozhaya", subcategory: "shkaf", name: "Шкаф в прихожую «Линия»", material: "ЛДСП Egger", term: "14 дней", size: "от 1 пог. м", priceFrom: 22000 },
  { id: "pr-sh-2", category: "prihozhaya", subcategory: "shkaf", name: "Шкаф с зеркалом «Прима»", material: "ЛДСП + зеркало", term: "16 дней", size: "от 1.2 пог. м", priceFrom: 32000, badge: "Хит" },

  // Прихожая — вешалки
  { id: "pr-v-1", category: "prihozhaya", subcategory: "vejsherob", name: "Банкетка с вешалкой", material: "МДФ + ткань", term: "10 дней", size: "90×40×130 см", priceFrom: 14000 },
];

export function getProductsBySubcategory(category: string, subcategory: string): Product[] {
  const result = products.filter(
    (p) => p.category === category && p.subcategory === subcategory
  );
  // если нет данных — возвращаем заглушки
  if (result.length === 0) {
    return Array.from({ length: 4 }, (_, i) => ({
      id: `placeholder-${i}`,
      category,
      subcategory,
      name: "Модель на заказ",
      material: "По вашему выбору",
      term: "от 14 дней",
      priceFrom: undefined,
    }));
  }
  return result;
}

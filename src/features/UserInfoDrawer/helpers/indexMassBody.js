export const indexMassBody = (height, weight) => {
   const bodyIndex = weight / Math.pow(height / 100, 2);
   const fixIndex = bodyIndex.toFixed(1);

   switch (true) {
      case bodyIndex <= 16:
         return ["Крайний недостаток веса", fixIndex];

      case bodyIndex >= 16 && bodyIndex <= 18.5:
         return ["Не достаток в весе", fixIndex];

      case bodyIndex > 18.5 && bodyIndex <= 25:
         return ["Нормальный вес тела", fixIndex];

      case bodyIndex > 25 && bodyIndex <= 30:
         return ["Избыточная масса тела", fixIndex];

      case bodyIndex > 30 && bodyIndex <= 35:
         return ["Ожирение (Класс I)", fixIndex];

      case bodyIndex > 35 && bodyIndex <= 40:
         return ["Ожирение (Класс II - тяжелое)", fixIndex];

      case bodyIndex > 40:
         return ["Ожирение (Класс III - крайне тяжелое)", fixIndex];
   }
};

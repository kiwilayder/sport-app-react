export const indexMassBody = (height, weight) => {
   const bodyIndex = (weight / Math.pow(height / 100, 2)).toFixed(1);

   switch (true) {
      case bodyIndex <= 16:
         return ["Крайний недостаток веса", bodyIndex, "error"];

      case bodyIndex >= 16 && bodyIndex <= 18.5:
         return ["Не достаток в весе", bodyIndex, "warning"];

      case bodyIndex > 18.5 && bodyIndex <= 25:
         return ["Нормальный вес тела", bodyIndex, "success"];

      case bodyIndex > 25 && bodyIndex <= 30:
         return ["Избыточная масса тела", bodyIndex, "warning"];

      case bodyIndex > 30 && bodyIndex <= 35:
         return ["Ожирение (Класс I)", bodyIndex, "error"];

      case bodyIndex > 35 && bodyIndex <= 40:
         return ["Ожирение (Класс II - тяжелое)", bodyIndex, "error"];

      case bodyIndex > 40:
         return ["Ожирение (Класс III - крайне тяжелое)", bodyIndex, "error"];
   }
};

export const excessWeight = (height, weight) => {
   const surplus = Math.ceil(weight - 25 * Math.pow(height / 100, 2));
   if (surplus < 0) return 0;
   return surplus;
};

export const indexMassBody = (height, weight) => {
   const bodyIndex = weight / Math.pow(height / 100, 2);

   let bmi = "";
   switch (true) {
      case bodyIndex <= 16:
         bmi = "Крайний недостаток веса";
         break;
      case bodyIndex >= 16 && bodyIndex <= 18.5:
         bmi = "Недостаток в весе";
         break;
      case bodyIndex > 18.5 && bodyIndex <= 25:
         bmi = "Нормальный вес тела";
         break;
      case bodyIndex > 25 && bodyIndex <= 30:
         bmi = "Избыточная масса тела";
         break;
      case bodyIndex > 30 && bodyIndex <= 35:
         bmi = "Ожирение (Класс I)";
         break;
      case bodyIndex > 35 && bodyIndex <= 40:
         bmi = "Ожирение (Класс II - тяжелое)";
         break;
      case bodyIndex > 40:
         bmi = "Ожирение (Класс III - крайне тяжелое)";
         break;
   }
   console.log(height, weight);
   return [bmi, bodyIndex.toFixed(1)];
};

export const calkTrening = (maxValue) => {
   const percent = maxValue / 100;

   return [
      [60, 50, 45, 40, 35].map((per) => Math.floor(percent * per)),
      [65, 55, 50, 45, 40].map((per) => Math.floor(percent * per)),
      [70, 60, 55, 50, 45].map((per) => Math.floor(percent * per)),
   ];
};

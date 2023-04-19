export const calkTrening = (maxValue) => {
   const percent = maxValue / 100;

   return [
      [60, 50, 45, 40, 35].map((el) => Math.floor(percent * el)),
      [65, 55, 50, 45, 40].map((el) => Math.floor(percent * el)),
      [70, 60, 55, 50, 45].map((el) => Math.floor(percent * el)),
   ];
};

export const asyncLocalStorage = {
   setItem: async function (key, value) {
      await null;
      return localStorage.setItem(key, JSON.stringify(value));
   },
   getItem: async function (key) {
      await null;
      return JSON.parse(localStorage.getItem(key));
   },
};

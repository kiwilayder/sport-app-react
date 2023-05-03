export const asyncLocalStorage = {
   setItem: async function (key, value) {
      return localStorage.setItem(key, JSON.stringify(value));
   },
   getItem: async function (key) {
      return JSON.parse(localStorage.getItem(key));
   },
};

import { asyncLocalStorage } from "../helpers/asyncLocalStorage";

export const userFakeAPI = {
   async setUser(user) {
      return await asyncLocalStorage.setItem("user", user);
   },
   async getUser() {
      return await asyncLocalStorage.getItem("user");
   },
};

export const treningFakeAPI = {
   async getTrening(typeTrening) {
      return await asyncLocalStorage.getItem(typeTrening);
   },
   async setTrening(treningType, trening) {
      return await asyncLocalStorage.setItem(treningType, trening);
   },
};

export const getDate = (date) => {
   const formatDate =
      ("0" + date.getDate()).slice(-2) +
      "." +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "." +
      date.getFullYear();
   return formatDate;
};

export const isDateForUpdate = (data: string) => {
  const today = new Date();
  const someDate = new Date(data);

  const result = someDate.getUTCDate() === today.getDate() - 1
           && someDate.getUTCMonth() === today.getMonth()
      && someDate.getUTCFullYear() === today.getFullYear();
  return result;
};

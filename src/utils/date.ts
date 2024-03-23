export const isDateForUpdate = (data: string) => {
  const today = new Date();
  const someDate = new Date(data);

  const result = someDate.getUTCDate() === today.getDate() - 1
           && someDate.getUTCMonth() === today.getMonth()
      && someDate.getUTCFullYear() === today.getFullYear();
  return result;
};

export const formatDate = (data: string) => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const date = new Date(data);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day} ${months[monthIndex]} ${year}`;
};

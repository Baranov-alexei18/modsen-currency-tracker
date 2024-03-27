export const isDateForUpdate = (data: string) => {
  const today = new Date();
  const someDate = new Date(data);

  const result = someDate.getUTCDate() === today.getDate() - 1
           && someDate.getUTCMonth() === today.getMonth()
      && someDate.getUTCFullYear() === today.getFullYear();
  return result;
};

export const getTimeLastUpdate = (lastData: string) => {
  const data = new Date(lastData);
  const hours = data.getUTCHours();
  const minutes = data.getUTCMinutes();
  const timeUpdate = hours > 12 ? ` ${hours - 12}:${minutes}pm` : `${hours}:${minutes}am`;
  return timeUpdate;
};

export const formatDate = (data: string) => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const date = new Date(data);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day} ${months[monthIndex]} ${year}`;
};

export function getDateDayAgo(day: number) {
  const currentDate = new Date();
  const pastDate = new Date(currentDate.setDate(currentDate.getDate() - day));
  return pastDate.toISOString().slice(0, 19);
}

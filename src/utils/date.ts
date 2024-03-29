export const isYestardayDay = (data: string) => {
  const today = new Date();
  const someDate = new Date(data);

  const result = someDate.getUTCDate() === today.getDate() - 1
           && someDate.getUTCMonth() === today.getMonth()
      && someDate.getUTCFullYear() === today.getFullYear();
  return result;
};

export function getDateDayAgo(day: number) {
  const currentDate = new Date();
  const pastDate = new Date(currentDate.setDate(currentDate.getDate() - day));
  return pastDate.toISOString().slice(0, 19);
}

export const getTimeLastUpdate = (lastData: string) => {
  const data = new Date(lastData);
  const hours = data.getUTCHours();
  const minutes = data.getUTCMinutes();

  const minutesLow = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const timeUpdate = hours > 12 ? `${hours - 12}:${minutesLow}pm` : `${hours}:${minutesLow}am`;
  return timeUpdate;
};

export const formatDate = (data: string) => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const date = new Date(data);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  if (!Date.parse(data)) return 'Data invalid';

  return `${day} ${months[monthIndex]} ${year}`;
};
